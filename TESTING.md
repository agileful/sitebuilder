# Sitebuilder Platform - Testing Guide

## Current Status

✅ Platform is built and ready for testing with multiple clients

## Prerequisites

1. Add your Claude API key to `.env`:
```bash
CLAUDE_API_KEY=sk-ant-... (your actual key)
```

2. Start the server:
```bash
npm run dev
```

## Testing with Different Clients

### Test 1: Sarah Linow (Wedding Planner)

**Create client:**
```bash
curl -X POST http://localhost:3001/api/clients/create \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Sarah Linow",
    "industry": "Luxury Wedding Planning",
    "services": ["Luxury Wedding Planning", "Destination Wedding Planning", "Day-Of Coordination", "Wedding Design", "Event Planning"],
    "about": "Since 2009, we design and plan exclusive weddings and events in Berlin, Germany, Europe and Florida.",
    "contact": {
      "email": "info@sarahlinow.de",
      "phone": "+49 30 4991 0551",
      "location": "Berlin, Germany"
    },
    "brandColors": {
      "primary": "#4a5568",
      "secondary": "#2d3748",
      "accent": "#d4a574",
      "text": "#2d3748",
      "background": "#ffffff"
    }
  }'
```

**View website:**
- Get `clientId` from response
- Visit: `http://localhost:3001/api/clients/{clientId}/website`
- Click chatbot (bottom right) and ask questions

**Test chatbot:**
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "client_xxx",
    "message": "What services do you offer for international couples?"
  }'
```

### Test 2: Add Your Own Client

Modify the JSON to test with your own business:
```bash
curl -X POST http://localhost:3001/api/clients/create \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Your Business Name",
    "industry": "Your Industry",
    "services": ["Service 1", "Service 2", "Service 3"],
    "about": "Your business description...",
    "contact": {
      "email": "contact@yoursite.com",
      "phone": "+1-555-0123",
      "location": "Your City, Country"
    },
    "brandColors": {
      "primary": "#your-color",
      "secondary": "#another-color",
      "accent": "#accent-color",
      "text": "#text-color",
      "background": "#bg-color"
    }
  }'
```

## What to Test

### Website Features
- [ ] Hero section renders correctly
- [ ] Service cards display with brand colors
- [ ] About section text shows
- [ ] Contact information is correct
- [ ] Navigation links work
- [ ] Responsive design (resize browser)

### Chatbot Features
- [ ] Chat widget opens/closes
- [ ] Initial greeting appears
- [ ] Send button works
- [ ] User messages appear in blue
- [ ] AI responses appear (after adding API key)
- [ ] Multiple messages work in conversation
- [ ] Chatbot context includes business info

### Subdomain Routing
- [ ] Each client gets unique subdomain
- [ ] Subdomain slug generated from client name
- [ ] Format: `{slug}.agileful.com`

## Feedback Points

As you test, consider:

1. **Design Enhancements**
   - Should we add image gallery carousel?
   - Add testimonials section?
   - Hero section background image?
   - Animations/transitions?

2. **Chatbot Improvements**
   - Response quality based on business context?
   - Should it suggest booking/contact actions?
   - Multi-language support?

3. **Performance**
   - Page load time
   - Chat response time
   - Mobile responsiveness

4. **Features to Add**
   - Admin dashboard for managing clients?
   - Email notifications on chatbot interactions?
   - Analytics/visitor tracking?
   - Custom branding in admin?

## GitHub Repository

https://github.com/agileful/sitebuilder

## Next Steps

Once testing is complete with your Claude API key:
1. Add more client examples
2. Enhance website design with gallery
3. Build admin dashboard
4. Add database persistence
5. Deploy to production

---

Need help? Check the README.md for architecture details.
