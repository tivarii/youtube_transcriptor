import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
  googleGenAiApiKey: process.env.GOOGLE_GENAI_API_KEY,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
};

// Validate required environment variables
if (!config.googleGenAiApiKey) {
  throw new Error('GOOGLE_GENAI_API_KEY environment variable is required');
}
