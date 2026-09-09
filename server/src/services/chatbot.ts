import Anthropic, { toFile } from '@anthropic-ai/sdk';

interface WebsiteContext {
  name: string;
  industry: string;
  services: string[];
  about: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export class ChatbotService {
  private client: Anthropic;
  private conversationHistory: ChatMessage[] = [];
  private websiteContext: WebsiteContext;

  constructor(context: WebsiteContext) {
    this.client = new Anthropic();
    this.websiteContext = context;
  }

  private getSystemPrompt(): string {
    return `You are a helpful chatbot assistant for ${this.websiteContext.name}.

Business Information:
- Industry: ${this.websiteContext.industry}
- Services: ${this.websiteContext.services.join(', ')}
- About: ${this.websiteContext.about}
- Email: ${this.websiteContext.contact.email}
- Phone: ${this.websiteContext.contact.phone}
- Location: ${this.websiteContext.contact.location}

Your role:
1. Answer questions about the business and its services
2. Provide helpful information based on the website content
3. Guide visitors to relevant pages or contact information
4. Be professional, friendly, and helpful
5. If a question is outside your knowledge, suggest contacting the business directly

Always maintain the business's tone and brand voice. Be concise and helpful.`;
  }

  async chat(userMessage: string): Promise<string> {
    this.conversationHistory.push({
      role: 'user',
      content: userMessage,
    });

    try {
      const response = await this.client.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: this.getSystemPrompt(),
        messages: this.conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content,
        })) as any,
      });

      const assistantMessage = response.content[0].type === 'text'
        ? response.content[0].text
        : 'I apologize, I was unable to process your request.';

      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage,
      });

      return assistantMessage;
    } catch (error) {
      console.error('Chat error:', error);
      throw error;
    }
  }

  getConversationHistory(): ChatMessage[] {
    return this.conversationHistory;
  }

  resetConversation(): void {
    this.conversationHistory = [];
  }
}
