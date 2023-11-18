import React from 'react';
import { GoogleLogin } from 'react-oauth-google';

const GoogleSignIn = ({ onSuccess, onError }) => {
  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID" // Replace with your OAuth 2.0 Client ID
      onSuccess={onSuccess}
      onError={onError}
      buttonText="Sign in with Google"
    />
  );
};

export default GoogleSignIn;
