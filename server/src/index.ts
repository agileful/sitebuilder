import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes will be added here
// TODO: Add routes for:
// - Website import and analysis
// - Design generation
// - Chatbot configuration
// - Subdomain management
// - Client management

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
