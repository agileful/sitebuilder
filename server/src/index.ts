import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clientRoutes from './routes/clients';
import chatRoutes from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes
app.use('/api/clients', clientRoutes);
app.use('/api/chat', chatRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Sitebuilder API',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      createClient: 'POST /api/clients/create',
      getClient: 'GET /api/clients/:clientId',
      getClientWebsite: 'GET /api/clients/:clientId/website',
      listClients: 'GET /api/clients/list',
      chat: 'POST /api/chat',
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
