import dotenv from 'dotenv';

dotenv.config();  

// To be accessible across app
const config = {}; 

config.port = process.env.PORT || 4000;

config.db_username = process.env.DB_USERNAME;
config.db_password = process.env.DB_PASSWORD;
config.db_name = process.env.DB_NAME;
config.db_host = process.env.DB_HOST;
config.db_port = process.env.DB_PORT;

config.facebook_id = process.env.FACEBOOK_ID;
config.facebook_secret = process.env.FACEBOOK_SECRET;

config.google_id = process.env.GOOGLE_ID;
config.google_secret = process.env.GOOGLE_SECRET

config.twitter_id = process.env.TWITTER_ID;
config.twitter_secret = process.env.TWITTER_SECRET

config.auth_secret = process.env.AUTH_SECRET || 'iamgroooot';

export default config;
 