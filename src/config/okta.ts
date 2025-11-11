import { OktaAuth } from '@okta/okta-auth-js';

// Only create OktaAuth instance if credentials are provided
const createOktaAuth = () => {
  const issuer = process.env.REACT_APP_OKTA_ISSUER;
  const clientId = process.env.REACT_APP_OKTA_CLIENT_ID;
  
  if (!issuer || !clientId) {
    // Return a minimal object that won't cause errors
    return null;
  }
  
  return new OktaAuth({
    issuer,
    clientId,
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
  });
};

const oktaAuth = createOktaAuth();

export default oktaAuth;

