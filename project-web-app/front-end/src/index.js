import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

ReactDOM.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="730983938828-ei06f6kl8n7tsf0md67ln8d2fn7golic.apps.googleusercontent.com">
    <App />
   </GoogleOAuthProvider>
  </React.StrictMode>,

document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();