interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

interface ClientWebsite {
  clientName: string;
  clientId?: string;
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
  galleryImages?: string[];
  testimonials?: Array<{ name: string; quote: string }>;
}

export class WebsiteDesignService {
  generateModernDesign(clientData: ClientWebsite): string {
    // Sample luxury gallery images (in production, use real client photos)
    const galleryImages = [
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1515934751355-257c0d4b4b21?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1506728350519-22c0c1c3e3af?w=500&h=400&fit=crop',
    ];

    const testimonials = [
      { name: 'Elena & Marco', quote: 'Exceptional planning and attention to detail. Made our dream wedding come true.' },
      { name: 'Sarah & James', quote: 'Professional, discrete, and absolutely brilliant. Highly recommended.' },
      { name: 'Sophie & Leo', quote: 'A stress-free experience with impeccable execution. Thank you!' },
    ];

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
      --light-gray: #f5f3f0;
      --border: #e5e1dc;
    }

    body {
      font-family: 'Georgia', 'Garamond', serif;
      line-height: 1.7;
      color: var(--text);
      background-color: var(--bg);
    }

    h1, h2, h3, h4 { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }

    /* Header */
    header {
      background: white;
      padding: 25px 0;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .header-container {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--primary);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    nav a {
      margin-left: 40px;
      text-decoration: none;
      color: var(--text);
      font-size: 14px;
      letter-spacing: 0.5px;
      transition: color 0.3s;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-weight: 500;
    }

    nav a:hover {
      color: var(--accent);
    }

    /* Hero Section - Elegant */
    .hero {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 120px 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255,255,255,0.03);
      pointer-events: none;
    }

    .hero-container {
      max-width: 900px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .hero h1 {
      font-size: 56px;
      margin-bottom: 30px;
      font-weight: 700;
      letter-spacing: 1px;
      line-height: 1.2;
    }

    .hero p {
      font-size: 20px;
      margin-bottom: 40px;
      opacity: 0.95;
      line-height: 1.8;
      font-family: 'Georgia', serif;
    }

    .cta-button {
      display: inline-block;
      background: var(--accent);
      color: white;
      padding: 18px 50px;
      border-radius: 2px;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 1px;
      transition: all 0.3s;
      border: 2px solid var(--accent);
      font-size: 14px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .cta-button:hover {
      background: transparent;
      color: var(--accent);
    }

    /* Gallery Section */
    .gallery {
      max-width: 1300px;
      margin: 80px auto;
      padding: 0 40px;
    }

    .section-title {
      font-size: 42px;
      text-align: center;
      margin-bottom: 60px;
      color: var(--primary);
      letter-spacing: 1px;
      font-weight: 700;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .gallery-item {
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      aspect-ratio: 4/3;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      transition: transform 0.4s ease;
    }

    .gallery-item:hover {
      transform: scale(1.03);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.05);
    }

    /* Services Section */
    .services {
      background: var(--light-gray);
      padding: 80px 40px;
      margin: 60px 0;
    }

    .services-container {
      max-width: 1300px;
      margin: 0 auto;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px;
    }

    .service-card {
      background: white;
      padding: 40px;
      border-radius: 2px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: transform 0.3s, box-shadow 0.3s;
      border-top: 4px solid var(--accent);
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.15);
    }

    .service-card h3 {
      color: var(--primary);
      margin-bottom: 15px;
      font-size: 24px;
      font-weight: 700;
    }

    .service-card p {
      color: #666;
      font-size: 15px;
      line-height: 1.8;
    }

    /* About Section */
    .about {
      max-width: 1000px;
      margin: 80px auto;
      padding: 0 40px;
    }

    .about h2 {
      color: var(--primary);
      margin-bottom: 40px;
      font-size: 42px;
      letter-spacing: 1px;
      font-weight: 700;
    }

    .about p {
      font-size: 17px;
      line-height: 1.9;
      color: #555;
      margin-bottom: 25px;
      font-family: 'Georgia', serif;
    }

    /* Testimonials */
    .testimonials {
      background: white;
      padding: 80px 40px;
      margin: 80px 0;
    }

    .testimonials-container {
      max-width: 1300px;
      margin: 0 auto;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .testimonial {
      background: var(--light-gray);
      padding: 40px;
      border-radius: 2px;
      border-left: 4px solid var(--accent);
    }

    .testimonial p {
      font-size: 16px;
      font-style: italic;
      color: #555;
      margin-bottom: 20px;
      line-height: 1.8;
      font-family: 'Georgia', serif;
    }

    .testimonial .author {
      font-weight: 700;
      color: var(--primary);
      font-style: normal;
      font-size: 15px;
      letter-spacing: 0.5px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    /* Contact Section */
    .contact {
      max-width: 1300px;
      margin: 80px auto;
      padding: 0 40px;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    .contact-info {
      padding: 40px;
      background: var(--light-gray);
      border-radius: 2px;
    }

    .contact-info h3 {
      color: var(--primary);
      margin-bottom: 25px;
      font-size: 24px;
      font-weight: 700;
    }

    .contact-info p {
      margin-bottom: 18px;
      font-size: 15px;
      line-height: 1.8;
    }

    .contact-info a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .contact-info a:hover {
      color: var(--primary);
    }

    /* Chatbot Widget */
    .chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 400px;
      height: 550px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 8px 50px rgba(0,0,0,0.2);
      display: flex;
      flex-direction: column;
      z-index: 1000;
    }

    .chatbot-header {
      background: var(--primary);
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 22px;
      cursor: pointer;
    }

    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      display: flex;
      gap: 8px;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .message.user { justify-content: flex-end; }

    .message-content {
      max-width: 75%;
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 14px;
      line-height: 1.5;
    }

    .message.user .message-content {
      background: var(--primary);
      color: white;
    }

    .message.assistant .message-content {
      background: #f0f0f0;
      color: var(--text);
    }

    .chatbot-input {
      padding: 15px;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 10px;
    }

    .chatbot-input input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px 12px;
      font-size: 14px;
    }

    .chatbot-input button {
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 4px;
      padding: 10px 18px;
      cursor: pointer;
      font-weight: 600;
    }

    .chatbot-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 26px;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
      transition: all 0.3s;
      z-index: 999;
    }

    .chatbot-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(0,0,0,0.25);
    }

    .chatbot-hidden { display: none !important; }

    /* Footer */
    footer {
      background: var(--primary);
      color: white;
      padding: 50px 40px;
      text-align: center;
      margin-top: 80px;
    }

    footer p {
      font-size: 14px;
      margin: 8px 0;
      letter-spacing: 0.5px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    @media (max-width: 768px) {
      .hero h1 { font-size: 36px; }
      .section-title { font-size: 28px; }
      .gallery-grid { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
      .services-grid { grid-template-columns: 1fr; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .contact-content { grid-template-columns: 1fr; }
      .chatbot-widget { width: calc(100% - 40px); height: 450px; }
      .header-container { padding: 0 20px; }
      nav a { margin-left: 20px; font-size: 12px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">${clientData.clientName}</div>
      <nav>
        <a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-container">
      <h1>Luxury Events Reimagined</h1>
      <p>${clientData.aboutText.substring(0, 180)}...</p>
      <a href="#contact" class="cta-button">Start Your Journey</a>
    </div>
  </section>

  <section class="gallery" id="gallery">
    <h2 class="section-title">Our Portfolio</h2>
    <div class="gallery-grid">
      ${galleryImages.map((img, i) => `
        <div class="gallery-item">
          <img src="${img}" alt="Wedding ${i + 1}" loading="lazy">
        </div>
      `).join('')}
    </div>
  </section>

  <section class="services" id="services">
    <div class="services-container">
      <h2 class="section-title">Our Services</h2>
      <div class="services-grid">
        ${clientData.services.map(service => `
          <div class="service-card">
            <h3>${service}</h3>
            <p>Bespoke service tailored to your vision. Every detail crafted with precision and elegance to create an unforgettable experience.</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="about" id="about">
    <h2 class="section-title">About Us</h2>
    <p>${clientData.aboutText}</p>
  </section>

  <section class="testimonials">
    <div class="testimonials-container">
      <h2 class="section-title">Cherished Moments</h2>
      <div class="testimonials-grid">
        ${testimonials.map(t => `
          <div class="testimonial">
            <p>"${t.quote}"</p>
            <div class="author">— ${t.name}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="contact" id="contact">
    <h2 class="section-title">Get in Touch</h2>
    <div class="contact-content">
      <div class="contact-info">
        <h3>Contact Details</h3>
        <p><strong>Email</strong><br><a href="mailto:${clientData.contact.email}">${clientData.contact.email}</a></p>
        <p><strong>Phone</strong><br><a href="tel:${clientData.contact.phone.replace(/\s/g, '')}">${clientData.contact.phone}</a></p>
        <p><strong>Location</strong><br>${clientData.contact.location}</p>
      </div>
      <div class="contact-info">
        <h3>Availability</h3>
        <p><strong>Monday – Friday</strong><br>9:00 AM – 6:00 PM</p>
        <p><strong>Saturday</strong><br>10:00 AM – 4:00 PM</p>
        <p><strong>Sunday</strong><br>By Appointment Only</p>
      </div>
    </div>
  </section>

  <button class="chatbot-toggle" id="chatbotToggle">💬</button>

  <div class="chatbot-widget chatbot-hidden" id="chatbotWidget">
    <div class="chatbot-header">
      <span>Chat with ${clientData.clientName}</span>
      <button class="chatbot-close" id="chatbotClose">×</button>
    </div>
    <div class="chatbot-messages" id="chatbotMessages"></div>
    <div class="chatbot-input">
      <input type="text" id="chatbotInput" placeholder="Ask anything..." />
      <button id="chatbotSend">Send</button>
    </div>
  </div>

  <footer>
    <p>&copy; 2024 ${clientData.clientName}. All rights reserved.</p>
    <p>Luxury Events Curated | Powered by Sitebuilder</p>
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
          body: JSON.stringify({ message, clientId: '${clientData.clientId || clientData.slug}' })
        });
        const data = await response.json();
        addMessage(data.reply || 'Thank you for your message. We will get back to you shortly.', 'assistant');
      } catch (error) {
        addMessage('Thank you. We received your message and will respond shortly.', 'assistant');
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

    addMessage('Welcome! How can we help you today?', 'assistant');
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
