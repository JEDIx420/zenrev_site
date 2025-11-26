# zenrev Website

A premium marketing website for zenrev - AI-powered GTM engineering for B2B SaaS teams.

## 🚀 Features

- **Premium Design**: Gradients, glassmorphism, smooth animations
- **6 Main Pages**: Home, Services, Agents, Case Studies, About, Contact
- **AI Chatbot**: Powered by OpenAI with streaming responses
- **Responsive**: Mobile-first design with smooth transitions
- **SEO Optimized**: Proper metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **AI**: Vercel AI SDK + OpenAI
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🤖 Chatbot Setup

The chatbot uses Google's Gemini API for AI-powered responses.

### Step 1: Get Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the key

### Step 2: Configure Environment Variables

The `.env.local` file has already been created with your API key:

```bash
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### Step 3: Restart Dev Server (if needed)

If the chatbot isn't working, restart the dev server:

```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

The chatbot will now work with AI-powered responses from Gemini!

### Without API Key

If you don't configure an API key, the chatbot will display a friendly message directing users to explore the site or book a consultation.

## 🎨 Design System

### Colors

- **Primary Blue**: `#2178F1`
- **Dark Blue**: `#0A2A73`
- **Light Grey**: `#F4F6F9`
- **Charcoal**: `#1B1F23`

### Typography

- **Headings**: Plus Jakarta Sans (Bold)
- **Body**: Inter

### Components

- Glassmorphism effects
- Gradient backgrounds
- Smooth scroll animations
- Custom scrollbar

## 📁 Project Structure

```
/app
  /page.tsx              # Home page
  /services/page.tsx     # Services
  /agents/page.tsx       # Agents directory
  /case-studies/page.tsx # Case studies
  /about/page.tsx        # About
  /contact/page.tsx      # Contact
  /api/chat/route.ts     # Chatbot API
  /layout.tsx            # Root layout
  /globals.css           # Global styles

/components
  /ui/Button.tsx         # Button component
  /layout/Header.tsx     # Navigation header
  /layout/Footer.tsx     # Footer
  /Chatbot.tsx           # AI chatbot

/lib
  /utils.ts              # Utility functions
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add `OPENAI_API_KEY` to environment variables
4. Deploy!

### Environment Variables on Vercel

Go to Project Settings → Environment Variables and add:

```
OPENAI_API_KEY=your_key_here
```

## 📝 Customization

### Update Content

- **Services**: Edit `app/services/page.tsx`
- **Agents**: Edit `app/agents/page.tsx`
- **Case Studies**: Edit `app/case-studies/page.tsx`

### Update Branding

- **Colors**: Edit `app/globals.css`
- **Logo**: Update in `components/layout/Header.tsx`
- **Metadata**: Edit `app/layout.tsx`

### Chatbot Personality

Edit the system prompt in `app/api/chat/route.ts`:

```typescript
const SYSTEM_PROMPT = `Your custom prompt here...`
```

## 🎯 Next Steps

1. **Add Real Client Logos**: Replace placeholder logos on home page
2. **Calendar Integration**: Embed Cal.com or Calendly on contact page
3. **Form Handling**: Connect contact form to n8n webhook or email service
4. **Analytics**: Add Plausible or Google Analytics
5. **Blog**: Create a blog section for content marketing

## 📄 License

MIT

---

Built with ❤️ by zenrev
