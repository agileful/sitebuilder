interface ClientSubdomain {
  clientId: string;
  clientName: string;
  slug: string;
  subdomain: string;
  domain: string;
  createdAt: Date;
}

export class SubdomainManager {
  private baseDomain = 'agileful.com';

  generateSubdomain(clientName: string): ClientSubdomain {
    const slug = this.slugify(clientName);
    const subdomain = `${slug}.${this.baseDomain}`;

    return {
      clientId: this.generateClientId(),
      clientName,
      slug,
      subdomain,
      domain: this.baseDomain,
      createdAt: new Date(),
    };
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private generateClientId(): string {
    return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  getSubdomainUrl(slug: string): string {
    return `https://${slug}.${this.baseDomain}`;
  }

  validateSubdomain(subdomain: string): boolean {
    const pattern = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
    return pattern.test(subdomain);
  }
}
