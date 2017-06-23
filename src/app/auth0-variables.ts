interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '1Y28Oy5Xse9WlOKrmq6Fkne7RFKWQOIw',
  CLIENT_DOMAIN: 'tcjcodes.auth0.com',
  AUDIENCE: 'daily-deals-api',
  REDIRECT: 'http://localhost:4200/callback',
  SCOPE: 'openid'
};
