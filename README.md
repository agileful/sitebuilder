# Sitebuilder

A platform that transforms client websites into modern designs with integrated chatbots. Creates personalized subdomains under agileful.com for each client.

## Features

- **Website Import & Redesign**: Convert existing websites into modern, responsive designs while maintaining client branding
- **Chatbot Integration**: AI-powered chatbot that answers questions related to the client's website
- **Subdomain Management**: Automatically creates subdomains under agileful.com for each client
- **Style Preservation**: Analyzes and preserves the client's existing brand colors, typography, and design elements
- **Easy Deployment**: One-click deployment for client websites

## Architecture

- **Backend**: Node.js with Express
- **Frontend**: React with TypeScript
- **Chatbot**: Claude API integration for intelligent Q&A
- **Database**: PostgreSQL for client and website data
- **Hosting**: Vercel/AWS for scalable deployment

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run development server
npm run dev
```

## Project Structure

```
sitebuilder/
├── server/           # Backend API
├── client/           # Frontend React app
├── chatbot/          # Chatbot service
├── styles/           # Shared styling utilities
└── docs/            # Documentation
```
