interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

interface ClientWebsite {
  clientName: string;
  slug: string;
  subdomain: string;
  industry: string;
  brandColors: BrandColors;
  logo?: string;
  services: string[];
  aboutText: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export class WebsiteDesignService {
  generateModernDesign(clientData: ClientWebsite): string {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${clientData.clientName}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary: ${clientData.brandColors.primary};
      --secondary: ${clientData.brandColors.secondary};
      --accent: ${clientData.brandColors.accent};
      --text: ${clientData.brandColors.text};
      --bg: ${clientData.brandColors.background};
      --light-gray: #f8f9fa;
      --border: #e9ecef;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background-color: var(--bg);
    }

    /* Header */
    header {
      background: white;
      padding: 20px 0;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .header-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary);
    }

    nav a {
      margin-left: 30px;
      text-decoration: none;
      color: var(--text);
      font-size: 14px;
      transition: color 0.3s;
    }

    nav a:hover {
      color: var(--primary);
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 80px 20px;
      text-align: center;
    }

    .hero-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 48px;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .hero p {
      font-size: 18px;
      margin-bottom: 30px;
      opacity: 0.95;
    }

    .cta-button {
      display: inline-block;
      background: var(--accent);
      color: white;
      padding: 15px 40px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.3s;
    }

    .cta-button:hover {
      background: var(--primary);
    }

    /* Services Section */
    .services {
      max-width: 1200px;
      margin: 60px auto;
      padding: 0 20px;
    }

    .section-title {
      font-size: 32px;
      text-align: center;
      margin-bottom: 50px;
      color: var(--primary);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-bottom: 60px;
    }

    .service-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      border-left: 4px solid var(--accent);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.3s;
    }

    .service-card:hover {
      transform: translateY(-5px);
    }

    .service-card h3 {
      color: var(--primary);
      margin-bottom: 15px;
      font-size: 20px;
    }

    .service-card p {
      color: #666;
      font-size: 14px;
      line-height: 1.8;
    }

    /* About Section */
    .about {
      background: var(--light-gray);
      padding: 60px 20px;
    }

    .about-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .about h2 {
      color: var(--primary);
      margin-bottom: 30px;
      font-size: 32px;
    }

    .about p {
      font-size: 16px;
      line-height: 1.8;
      color: #555;
      margin-bottom: 20px;
    }

    /* Chatbot Widget */
    .chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 380px;
      height: 500px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 5px 40px rgba(0,0,0,0.16);
      display: flex;
      flex-direction: column;
      z-index: 1000;
      font-family: inherit;
    }

    .chatbot-header {
      background: var(--primary);
      color: white;
      padding: 20px;
      border-radius: 12px 12px 0 0;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }

    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .message {
      display: flex;
      gap: 10px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .message.user {
      justify-content: flex-end;
    }

    .message-content {
      max-width: 70%;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 14px;
      line-height: 1.5;
    }

    .message.user .message-content {
      background: var(--primary);
      color: white;
    }

    .message.assistant .message-content {
      background: var(--light-gray);
      color: var(--text);
    }

    .chatbot-input {
      padding: 15px;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 10px;
    }

    .chatbot-input input {
      flex: 1;
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 10px 12px;
      font-size: 14px;
      font-family: inherit;
    }

    .chatbot-input button {
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 16px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }

    .chatbot-input button:hover {
      background: var(--secondary);
    }

    .chatbot-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: var(--primary);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 999;
    }

    .chatbot-toggle:hover {
      background: var(--secondary);
    }

    .chatbot-hidden {
      display: none !important;
    }

    /* Contact Section */
    .contact {
      max-width: 1200px;
      margin: 60px auto;
      padding: 0 20px;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .contact-info {
      background: var(--light-gray);
      padding: 40px;
      border-radius: 8px;
    }

    .contact-info h3 {
      color: var(--primary);
      margin-bottom: 20px;
    }

    .contact-info p {
      margin-bottom: 15px;
      font-size: 14px;
    }

    .contact-info a {
      color: var(--primary);
      text-decoration: none;
    }

    /* Footer */
    footer {
      background: #2c3e50;
      color: white;
      padding: 40px 20px;
      text-align: center;
      margin-top: 60px;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 32px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }

      .chatbot-widget {
        width: calc(100% - 40px);
        height: 400px;
      }

      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">${clientData.clientName}</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-container">
      <h1>Welcome to ${clientData.clientName}</h1>
      <p>${clientData.aboutText.substring(0, 150)}...</p>
      <a href="#contact" class="cta-button">Get Started</a>
    </div>
  </section>

  <section class="services" id="services">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
      ${clientData.services.map(service => `
        <div class="service-card">
          <h3>${service}</h3>
          <p>Professional and personalized service tailored to your needs. Experience excellence in every detail.</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="about" id="about">
    <div class="about-container">
      <h2>About Us</h2>
      <p>${clientData.aboutText}</p>
    </div>
  </section>

  <section class="contact" id="contact">
    <h2 class="section-title">Contact Us</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Get in Touch</h3>
        <p><strong>Email:</strong> <a href="mailto:${clientData.contact.email}">${clientData.contact.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${clientData.contact.phone}">${clientData.contact.phone}</a></p>
        <p><strong>Location:</strong> ${clientData.contact.location}</p>
      </div>
      <div class="contact-info">
        <h3>Hours</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  </section>

  <button class="chatbot-toggle" id="chatbotToggle">💬</button>

  <div class="chatbot-widget chatbot-hidden" id="chatbotWidget">
    <div class="chatbot-header">
      <span>Chat with us</span>
      <button class="chatbot-close" id="chatbotClose">×</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages"></div>
    <div class="chatbot-input">
      <input type="text" id="chatbotInput" placeholder="Ask a question..." />
      <button id="chatbotSend">Send</button>
    </div>
  </div>

  <footer>
    <p>&copy; 2024 ${clientData.clientName}. All rights reserved.</p>
    <p>Powered by Sitebuilder</p>
  </footer>

  <script>
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    chatbotToggle.addEventListener('click', () => {
      chatbotWidget.classList.toggle('chatbot-hidden');
    });

    chatbotClose.addEventListener('click', () => {
      chatbotWidget.classList.add('chatbot-hidden');
    });

    chatbotSend.addEventListener('click', async () => {
      const message = chatbotInput.value.trim();
      if (!message) return;

      addMessage(message, 'user');
      chatbotInput.value = '';

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, clientId: '${clientData.slug}' })
        });
        const data = await response.json();
        addMessage(data.reply, 'assistant');
      } catch (error) {
        addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
      }
    });

    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') chatbotSend.click();
    });

    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message ' + sender;
      messageDiv.innerHTML = '<div class="message-content">' + text + '</div>';
      chatbotMessages.appendChild(messageDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Initial greeting
    addMessage('Hello! How can I help you today?', 'assistant');
  </script>
</body>
</html>
    `;
    return html;
  }

  analyzeBrandColors(imageUrl?: string): BrandColors {
    return {
      primary: '#4a5568',
      secondary: '#2d3748',
      accent: '#d4a574',
      text: '#2d3748',
      background: '#ffffff',
    };
  }
}
