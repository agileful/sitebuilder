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
  services: string[];
  aboutText: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  galleryImages?: string[];
}

export class PremiumWebsiteDesignService {
  // Real Sarah Linow wedding photos from their site
  private sarahLinowGallery = [
    'https://sarahlinow.de/wp-content/uploads/2023/04/Luxus-Hochzeit-Zelt-Matthias-Friel-Sarah-Linow-1-1-2048x1152.jpg',
    'https://sarahlinow.de/wp-content/uploads/2023/04/Luxus-Hochzeit-Zelt-Matthias-Friel-Sarah-Linow-Schloss-2-2048x1152.jpg',
    'https://sarahlinow.de/wp-content/uploads/2023/04/Luxus-Hochzeit-Zelt-Matthias-Friel-Sarah-Linow-Schloss-3-2048x1152.jpg',
    'https://sarahlinow.de/wp-content/uploads/2023/04/Luxus-Hochzeit-Zelt-Matthias-Friel-Sarah-Linow-Spiegelboden-4-2048x1152.jpg',
    'https://sarahlinow.de/wp-content/uploads/2024/11/Hochzeit-in-schwarz-weiss-1536x1024.jpg',
    'https://sarahlinow.de/wp-content/uploads/2024/11/Hochzeit-schwar-weiss-1536x1024.jpg',
  ];

  generatePremiumDesign(clientData: ClientWebsite): string {
    const galleryImages = clientData.galleryImages || this.sarahLinowGallery;

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
      --light: #fafaf8;
      --border: #e8e6e1;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.7;
      color: var(--text);
      background-color: var(--bg);
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Georgia', 'Garamond', serif;
      font-weight: 700;
      line-height: 1.2;
    }

    /* Header */
    header {
      background: white;
      padding: 30px 0;
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .header-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 3px;
      color: var(--primary);
      font-family: 'Georgia', serif;
    }

    nav {
      display: flex;
      gap: 50px;
    }

    nav a {
      text-decoration: none;
      color: var(--text);
      font-size: 13px;
      letter-spacing: 1px;
      font-weight: 500;
      transition: color 0.3s;
      text-transform: uppercase;
    }

    nav a:hover {
      color: var(--accent);
    }

    /* Hero with Video Background Effect */
    .hero {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 140px 50px;
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
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)" /></svg>');
      opacity: 0.5;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 900px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 64px;
      margin-bottom: 30px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1.2;
      animation: fadeInUp 1s ease-out;
    }

    .hero p {
      font-size: 20px;
      margin-bottom: 50px;
      opacity: 0.95;
      line-height: 1.8;
      animation: fadeInUp 1s ease-out 0.2s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cta-button {
      display: inline-block;
      background: var(--accent);
      color: white;
      padding: 20px 60px;
      border-radius: 0;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 2px;
      transition: all 0.3s;
      border: 2px solid var(--accent);
      font-size: 13px;
      text-transform: uppercase;
      animation: fadeInUp 1s ease-out 0.4s both;
    }

    .cta-button:hover {
      background: transparent;
      color: var(--accent);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }

    /* Gallery Section - Masonry */
    .gallery-section {
      max-width: 1400px;
      margin: 100px auto;
      padding: 0 50px;
    }

    .section-title {
      font-size: 48px;
      text-align: center;
      margin-bottom: 80px;
      color: var(--primary);
      letter-spacing: 2px;
      font-weight: 700;
      position: relative;
      padding-bottom: 20px;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 2px;
      background: var(--accent);
    }

    .gallery-masonry {
      column-count: 3;
      column-gap: 30px;
      animation: fadeInUp 1s ease-out;
    }

    .gallery-item {
      break-inside: avoid;
      margin-bottom: 30px;
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      box-shadow: 0 8px 30px rgba(0,0,0,0.12);
      transition: transform 0.4s ease;
      cursor: pointer;
    }

    .gallery-item:hover {
      transform: scale(1.02);
      box-shadow: 0 15px 50px rgba(0,0,0,0.25);
    }

    .gallery-item img {
      width: 100%;
      display: block;
      transition: transform 0.4s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.05);
    }

    /* Services Section */
    .services-section {
      background: var(--light);
      padding: 100px 50px;
      margin: 80px 0;
    }

    .services-grid {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
    }

    .service-card {
      background: white;
      padding: 50px 40px;
      border-radius: 2px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      transition: all 0.3s;
      border-top: 3px solid var(--accent);
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: -100px;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, var(--accent), transparent);
      opacity: 0;
      transition: all 0.3s;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    }

    .service-card:hover::before {
      opacity: 0.05;
      right: 0;
    }

    .service-card h3 {
      font-size: 28px;
      margin-bottom: 20px;
      color: var(--primary);
      position: relative;
      z-index: 1;
    }

    .service-card p {
      font-size: 15px;
      line-height: 1.8;
      color: #666;
      position: relative;
      z-index: 1;
    }

    /* About Section */
    .about-section {
      max-width: 1000px;
      margin: 100px auto;
      padding: 0 50px;
    }

    .about-section h2 {
      font-size: 48px;
      margin-bottom: 40px;
      color: var(--primary);
      letter-spacing: 2px;
    }

    .about-section p {
      font-size: 16px;
      line-height: 1.9;
      color: #555;
      margin-bottom: 25px;
      text-align: justify;
    }

    /* Testimonials Slider */
    .testimonials-section {
      background: white;
      padding: 100px 50px;
    }

    .testimonials-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      gap: 40px;
      margin-top: 60px;
    }

    .testimonial {
      background: var(--light);
      padding: 50px 40px;
      border-radius: 2px;
      border-left: 4px solid var(--accent);
      position: relative;
      transition: all 0.3s;
    }

    .testimonial::before {
      content: '"';
      font-size: 100px;
      color: var(--accent);
      opacity: 0.1;
      position: absolute;
      top: -20px;
      left: 20px;
    }

    .testimonial:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    .testimonial p {
      font-size: 16px;
      font-style: italic;
      color: #555;
      margin-bottom: 25px;
      line-height: 1.8;
      position: relative;
      z-index: 1;
    }

    .testimonial .author {
      font-weight: 700;
      color: var(--primary);
      font-style: normal;
      font-size: 14px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* Contact Section */
    .contact-section {
      max-width: 1400px;
      margin: 100px auto;
      padding: 0 50px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      margin-top: 60px;
    }

    .contact-info {
      padding: 50px;
      background: var(--light);
      border-radius: 2px;
    }

    .contact-info h3 {
      font-size: 24px;
      margin-bottom: 30px;
      color: var(--primary);
    }

    .contact-info p {
      margin-bottom: 20px;
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

    /* Chatbot */
    .chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 420px;
      height: 580px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 60px rgba(0,0,0,0.25);
      display: flex;
      flex-direction: column;
      z-index: 2000;
    }

    .chatbot-header {
      background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      padding: 25px;
      border-radius: 12px 12px 0 0;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
    }

    .chatbot-close {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
    }

    .chatbot-messages {
      flex: 1;
      overflow-y: auto;
      padding: 25px;
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
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .message.user { justify-content: flex-end; }

    .message-content {
      max-width: 75%;
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
      background: #f0f0f0;
      color: var(--text);
    }

    .chatbot-input {
      padding: 20px;
      border-top: 1px solid #e0e0e0;
      display: flex;
      gap: 10px;
    }

    .chatbot-input input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 6px;
      padding: 12px 14px;
      font-size: 14px;
    }

    .chatbot-input button {
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 6px;
      padding: 12px 20px;
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
      width: 60px;
      height: 60px;
      background: var(--accent);
      border: none;
      border-radius: 50%;
      color: white;
      font-size: 28px;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      transition: all 0.3s;
      z-index: 1999;
    }

    .chatbot-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 30px rgba(0,0,0,0.3);
    }

    .chatbot-hidden { display: none !important; }

    /* Footer */
    footer {
      background: var(--primary);
      color: white;
      padding: 60px 50px;
      text-align: center;
      margin-top: 100px;
    }

    footer p {
      font-size: 14px;
      letter-spacing: 1px;
      margin: 8px 0;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero h1 { font-size: 36px; }
      .section-title { font-size: 28px; }
      .gallery-masonry { column-count: 2; }
      .services-grid { grid-template-columns: 1fr; }
      .contact-grid { grid-template-columns: 1fr; }
      .chatbot-widget { width: calc(100% - 40px); height: 480px; }
      .header-container { padding: 0 20px; }
      nav { gap: 20px; }
      .hero { padding: 80px 20px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-container">
      <div class="logo">${clientData.clientName}</div>
      <nav>
        <a href="#gallery">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1>Luxury Moments Crafted with Care</h1>
      <p>${clientData.aboutText.substring(0, 200)}...</p>
      <a href="#contact" class="cta-button">Start Planning</a>
    </div>
  </section>

  <section class="gallery-section" id="gallery">
    <h2 class="section-title">Our Portfolio</h2>
    <div class="gallery-masonry">
      ${galleryImages.map((img, i) => `
        <div class="gallery-item">
          <img src="${img}" alt="Wedding ${i + 1}" loading="lazy">
        </div>
      `).join('')}
    </div>
  </section>

  <section class="services-section" id="services">
    <div class="section-title" style="margin: 0 auto 60px; width: fit-content;">Our Services</div>
    <div class="services-grid">
      ${clientData.services.map(service => `
        <div class="service-card">
          <h3>${service}</h3>
          <p>Bespoke, personalized service designed specifically for you. We handle every detail with precision and elegance, ensuring your day is exactly as you envisioned it.</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="about-section" id="about">
    <h2>About ${clientData.clientName}</h2>
    <p>${clientData.aboutText}</p>
  </section>

  <section class="testimonials-section" id="testimonials">
    <div class="testimonials-container">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial">
          <p>"Absolutely exceptional service. Sarah understood our vision perfectly and executed it flawlessly. Our wedding was perfect."</p>
          <div class="author">— Laura & Antonio</div>
        </div>
        <div class="testimonial">
          <p>"Professional, discreet, and brilliant. From conception to execution, every detail was handled with care and expertise."</p>
          <div class="author">— Andrea & Christian</div>
        </div>
        <div class="testimonial">
          <p>"Stress-free planning and impeccable execution. Sarah took care of everything so we could focus on enjoying our day."</p>
          <div class="author">— Ina & Flo</div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section" id="contact">
    <h2 class="section-title">Get in Touch</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Email</strong><br><a href="mailto:${clientData.contact.email}">${clientData.contact.email}</a></p>
        <p><strong>Phone</strong><br><a href="tel:${clientData.contact.phone.replace(/\s/g, '')}">${clientData.contact.phone}</a></p>
        <p><strong>Location</strong><br>${clientData.contact.location}</p>
      </div>
      <div class="contact-info">
        <h3>Hours & Availability</h3>
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
      <input type="text" id="chatbotInput" placeholder="Ask anything...">
      <button id="chatbotSend">Send</button>
    </div>
  </div>

  <footer>
    <p>&copy; 2024 ${clientData.clientName}. All rights reserved.</p>
    <p>Luxury Wedding Planning | Powered by Sitebuilder</p>
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
        addMessage(data.reply || 'Thank you for your message. We will respond shortly.', 'assistant');
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

    addMessage('Welcome! How can we help you plan your perfect day?', 'assistant');
  </script>
</body>
</html>
    `;
    return html;
  }
}
