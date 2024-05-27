import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';

ReactDOM.render(
  <React.StrictMode>
<<<<<<<< HEAD:project-web-app/front-end/src/index.js
  <GoogleOAuthProvider clientId="730983938828-ei06f6kl8n7tsf0md67ln8d2fn7golic.apps.googleusercontent.com">
    <App />
   </GoogleOAuthProvider>
  </React.StrictMode>,

document.getElementById('root')
========
 // xoa dong cam
    <App />
  
  </React.StrictMode>,

document.getElementById('App')
>>>>>>>> f617b47df7e5223c0a7d9fcce869b31e8d20d0ce:frontend/src/index.js
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();