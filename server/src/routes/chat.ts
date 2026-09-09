import express, { Request, Response } from 'express';
import { ChatbotService } from '../services/chatbot';

const router = express.Router();

const chatbotInstances: Map<string, ChatbotService> = new Map();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { message, clientId } = req.body;

    if (!message || !clientId) {
      return res.status(400).json({ error: 'Message and clientId are required' });
    }

    let chatbot = chatbotInstances.get(clientId);
    if (!chatbot) {
      return res.status(404).json({ error: 'Client not found' });
    }

    const reply = await chatbot.chat(message);

    res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
});

router.post('/reset', (req: Request, res: Response) => {
  try {
    const { clientId } = req.body;

    if (!clientId) {
      return res.status(400).json({ error: 'clientId is required' });
    }

    const chatbot = chatbotInstances.get(clientId);
    if (!chatbot) {
      return res.status(404).json({ error: 'Client not found' });
    }

    chatbot.resetConversation();

    res.json({
      success: true,
      message: 'Conversation reset',
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reset conversation' });
  }
});

export default router;
