import express from 'express';
import jwt from 'jsonwebtoken';
import { google } from 'googleapis';
import jwksClient from 'jwks-rsa';

const router = express.Router();

const client = jwksClient({
  jwksUri: 'https://www.googleapis.com/oauth2/v3/certs'
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function(err, key) {
    if (err) {
      console.error('Error getting signing key:', err);
      return callback(err);
    }
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

// Middleware to verify token and retrieve authentication information
async function verifyToken(req, res, next) {
  const token = req.body.token;
  if (!token) {
    return res.status(401).send('Token is required');
  }

  jwt.verify(token, getKey, { algorithms: ['RS256'] }, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(500).json({ message: "Token verification failed.", error: err });
    }
    req.user = decoded;
    req.user.access_token = token;
    next();
  });
}

router.post('/storeToken', verifyToken, async (req, res) => {
  const { token } = req.body;

  try {
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials({ id_token: token });
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: token,
      audience: 'CLIENT_ID',
    });

    const payload = ticket.getPayload();
    req.session.refresh_token = payload['refresh_token'];
    req.session.access_token = payload['access_token'];

    res.status(200).json({ message: 'Tokens stored successfully' });
  } catch (error) {
    console.error('Error storing token:', error);
    res.status(500).json({ message: 'Failed to store token', error });
  }
});

async function refreshAccessToken(req, res, next) {
  const refresh_token = req.session.refresh_token;
  if (!refresh_token) {
    return res.status(401).send('Refresh token is missing');
  }

  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({ refresh_token });

  try {
    const { credentials } = await oAuth2Client.refreshAccessToken();
    req.session.access_token = credentials.access_token;
    req.user.access_token = credentials.access_token;
    next();
  } catch (error) {
    console.error('Error refreshing access token:', error);
    res.status(500).json({ message: 'Failed to refresh access token', error });
  }
}

router.post('/createEvent', verifyToken, refreshAccessToken, async (req, res) => {
  const { summary, start, end } = req.body;

  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({ access_token: req.user.access_token });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  const event = {
    summary,
    start: { dateTime: start },
    end: { dateTime: end },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Failed to create event', error });
  }
});

router.get('/listEvents', verifyToken, refreshAccessToken, async (req, res) => {
  const oAuth2Client = new google.auth.OAuth2();
  oAuth2Client.setCredentials({ access_token: req.user.access_token });

  const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    res.status(200).json(response.data.items);
  } catch (error) {
    console.error('Error listing events:', error);
    res.status(500).json({ message: 'Failed to list events', error });
  }
});

export default router;
