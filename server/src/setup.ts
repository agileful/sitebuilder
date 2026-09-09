import fs from 'fs';
import path from 'path';

interface ClientConfig {
  clientName: string;
  industry: string;
  services: string[];
  about: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
}

export function loadClientConfig(clientName: string): ClientConfig {
  const configPath = path.join(__dirname, 'clients', `${clientName.toLowerCase().replace(/\s+/g, '-')}.json`);

  if (!fs.existsSync(configPath)) {
    throw new Error(`Client configuration not found: ${configPath}`);
  }

  const rawData = fs.readFileSync(configPath, 'utf-8');
  return JSON.parse(rawData) as ClientConfig;
}

export function loadAllClientConfigs(): Map<string, ClientConfig> {
  const clientsDir = path.join(__dirname, 'clients');
  const clients = new Map<string, ClientConfig>();

  if (!fs.existsSync(clientsDir)) {
    return clients;
  }

  const files = fs.readdirSync(clientsDir).filter(f => f.endsWith('.json'));

  for (const file of files) {
    try {
      const rawData = fs.readFileSync(path.join(clientsDir, file), 'utf-8');
      const config = JSON.parse(rawData) as ClientConfig;
      clients.set(config.clientName, config);
    } catch (error) {
      console.error(`Failed to load client config: ${file}`, error);
    }
  }

  return clients;
}
