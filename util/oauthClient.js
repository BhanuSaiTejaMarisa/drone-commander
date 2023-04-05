const { google } = require("googleapis");

const oauthClient = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECET,
  'http://localhost:5000/api/auth/google/callback'
)

module.exports = oauthClient