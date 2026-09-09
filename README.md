# Sitebuilder

A platform that transforms client websites into modern designs with integrated AI chatbots. Creates personalized subdomains under agileful.com for each client.

## Features

- **Website Import & Redesign**: Convert existing websites into modern, responsive designs while maintaining client branding
- **Chatbot Integration**: AI-powered chatbot that answers questions related to the client's website using Claude API
- **Subdomain Management**: Automatically creates subdomains under agileful.com for each client
- **Style Preservation**: Analyzes and preserves the client's existing brand colors, typography, and design elements
- **Easy Deployment**: One-click deployment for client websites
- **Multi-Client Support**: Manage multiple client websites from a single platform

## Architecture

- **Backend**: Node.js with Express + TypeScript
- **Frontend**: React with TypeScript
- **Chatbot**: Claude API integration for intelligent Q&A
- **Website Design**: Modern, responsive HTML templates with integrated chatbot widget
- **Hosting**: Ready for Vercel/AWS deployment

## Quick Start

### 1. Install Dependencies

```bash
npm install
cd server && npm install
cd ../client && npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Add your Claude API key:
```
CLAUDE_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

This starts both the backend (port 3001) and frontend (port 3000).

## API Documentation

### Create a New Client Website

```bash
curl -X POST http://localhost:3001/api/clients/create \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Sarah Linow",
    "industry": "Luxury Wedding Planning",
    "services": ["Wedding Planning", "Destination Weddings", "Day-Of Coordination"],
    "about": "Exclusive luxury wedding planning services...",
    "contact": {
      "email": "info@sarahlinow.de",
      "phone": "+49 30 4991 0551",
      "location": "Berlin, Germany"
    },
    "brandColors": {
      "primary": "#4a5568",
      "secondary": "#2d3748",
      "accent": "#d4a574"
    }
  }'
```

### Get Client Website

```bash
GET /api/clients/:clientId/website
```

Returns the rendered HTML website with integrated chatbot.

### Chat with Client Chatbot

```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "client_1234567890",
    "message": "What services do you offer?"
  }'
```

### List All Clients

```bash
GET /api/clients/list
```

## Project Structure

```
sitebuilder/
├── server/
│   ├── src/
│   │   ├── services/
│   │   │   ├── chatbot.ts          # Chatbot service with Claude API
│   │   │   ├── websiteDesign.ts    # Website design generation
│   │   │   └── subdomainManager.ts # Subdomain management
│   │   ├── routes/
│   │   │   ├── clients.ts          # Client management endpoints
│   │   │   └── chat.ts             # Chat endpoints
│   │   ├── clients/
│   │   │   └── sarah-linow.json    # Client configurations
│   │   └── index.ts                # Express server
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   └── package.json
└── package.json
```

## Examples

### Sarah Linow - Luxury Wedding Planner

A modern redesign of the Sarah Linow wedding planning website:

**Original**: https://sarahlinow.de/
**Redesigned**: https://sarah-linow.agileful.com/

Features:
- Modern, clean design with luxury aesthetic
- Integrated AI chatbot for Q&A about services
- Preserved brand colors (#4a5568, #d4a574)
- Responsive mobile design
- Service cards, testimonials section, contact form

## Chatbot Capabilities

The integrated Claude-powered chatbot can:

- Answer questions about the business and services
- Provide detailed information based on website content
- Guide visitors to relevant pages or contact information
- Maintain conversation context across multiple messages
- Provide personalized responses based on business context

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

### Deploy to AWS

See deployment documentation for AWS configuration.

## Environment Variables

```env
# Server
NODE_ENV=development
PORT=3001
API_URL=http://localhost:3001

# Client
REACT_APP_API_URL=http://localhost:3001

# Claude API
CLAUDE_API_KEY=your_api_key_here

# Database (for future use)
DATABASE_URL=postgresql://user:password@localhost:5432/sitebuilder

# Subdomain Base
SUBDOMAIN_BASE=agileful.com
```

## Future Enhancements

- [ ] Database integration for persistent client data
- [ ] Admin dashboard for managing clients
- [ ] Image upload and analysis for brand color detection
- [ ] SEO optimization features
- [ ] Analytics and visitor tracking
- [ ] Email notification system
- [ ] Payment integration for client features
- [ ] Multi-language support
- [ ] Custom domain mapping
- [ ] Website preview builder UI

## License

Proprietary - Agileful

## Support

For issues or questions, contact: support@agileful.com
