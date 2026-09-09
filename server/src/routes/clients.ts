import express, { Request, Response } from 'express';
import { ChatbotService } from '../services/chatbot';
import { WebsiteDesignService } from '../services/websiteDesign';
import { SubdomainManager } from '../services/subdomainManager';
import { clientsData, chatbotInstances } from '../state';

const router = express.Router();
const designService = new WebsiteDesignService();
const subdomainManager = new SubdomainManager();

interface CreateClientRequest {
  clientName: string;
  industry: string;
  services: string[];
  about: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  brandColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
    background?: string;
  };
}

router.post('/create', (req: Request, res: Response) => {
  try {
    const clientData: CreateClientRequest = req.body;
    const subdomain = subdomainManager.generateSubdomain(clientData.clientName);

    const brandColors = {
      primary: clientData.brandColors?.primary || '#4a5568',
      secondary: clientData.brandColors?.secondary || '#2d3748',
      accent: clientData.brandColors?.accent || '#d4a574',
      text: clientData.brandColors?.text || '#2d3748',
      background: clientData.brandColors?.background || '#ffffff',
    };

    const clientConfig = {
      ...subdomain,
      clientName: clientData.clientName,
      industry: clientData.industry,
      services: clientData.services,
      about: clientData.about,
      aboutText: clientData.about,
      contact: clientData.contact,
      brandColors,
      createdAt: new Date(),
    };

    clientsData[subdomain.clientId] = clientConfig;

    const chatbotService = new ChatbotService({
      name: clientData.clientName,
      industry: clientData.industry,
      services: clientData.services,
      about: clientData.about,
      contact: clientData.contact,
    });

    chatbotInstances.set(subdomain.clientId, chatbotService);

    res.json({
      success: true,
      client: clientConfig,
      websiteUrl: subdomainManager.getSubdomainUrl(subdomain.slug),
    });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create client' });
  }
});

router.get('/:clientId', (req: Request, res: Response) => {
  const client = clientsData[req.params.clientId];
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }
  res.json(client);
});

router.get('/:clientId/website', (req: Request, res: Response) => {
  const client = clientsData[req.params.clientId];
  if (!client) {
    return res.status(404).json({ error: 'Client not found' });
  }

  const html = designService.generateModernDesign(client);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

router.get('/list', (req: Request, res: Response) => {
  const clients = Object.values(clientsData);
  res.json(clients);
});

export default router;
