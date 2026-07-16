import 'dotenv/config';

export const config = {
baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
timeout: Number(process.env.TEST_TIMEOUT_MS || 5000)
};