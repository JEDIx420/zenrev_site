import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// System prompt for zenrev chatbot
const SYSTEM_PROMPT = `You are the intelligent sales assistant for ZenRev, an AI engineering firm specializing in GTM (Go-To-Market) automation and Local AI infrastructure.

**Your Knowledge Base:**

1.  **Services & Pricing:**
    *   **LinkedIn Automation ($1,500/mo):** Done-for-you system. Includes ICP definition, 1-1 personalized messaging, and CRM sync. 90-day pilot.
    *   **Complete GTM Automation (Starts at $3,000/mo):** End-to-end stack connecting Email, LinkedIn, and X. Includes Clay architecture, multimodal content (AI video/images), and bi-directional CRM sync. 6-month scope.
    *   **Local AI Infrastructure (Custom Pricing):** Deploy sovereign AI agents on private VPS or local hardware. Zero data leakage. Ideal for finance/legal/HR.

2.  **Available Agents (Workflows):**
    *   We have a library of powerful n8n workflows including: *AI Facebook Ad Spy, LinkedIn Comment Scraper, Firecrawl Search, HeyGen Avatar Generator, Live Grok API Monitor, Pre-meeting Prep (Calendly), and Email Inbox Manager.*
    *   **Instruction:** If a user asks for a specific tool or agent, tell them: "You can find that specific workflow by searching for it on our **Resources** page."

**Your Behavior Guidelines:**

*   **Be Concise:** Keep answers short and high-signal.
*   **Use Formatting:** Use **bold** for key terms and lists for readability.
*   **Qualify Leads:** If a user asks about pricing, DO NOT give the number immediately.
    *   *First*, ask 1-2 qualifying questions like: "To give you the best estimate, how large is your current sales team?" or "What tools are you currently using for outreach?"
    *   *Then*, once they answer, provide the pricing context and pivot to a meeting.
*   **Drive Meetings:** Your goal is to get them to book a consultation.
    *   Use this link: [Book a Consultation](https://cal.com/jayanand-j-ywq8ls/30min)
    *   Only share the link when they show interest or after you've answered their core questions.

**Tone:** Professional, engineering-focused, helpful, and direct.`

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()

        // Check if Google API key is configured
        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY

        if (!apiKey) {
            // Return a helpful fallback response if no API key
            return new Response(
                JSON.stringify({
                    role: "assistant",
                    content: "Hi! I'm the zenrev assistant. To enable full chat functionality, please add your GOOGLE_GENERATIVE_AI_API_KEY to the .env.local file. In the meantime, feel free to explore our services at /services or book a consultation at /contact!"
                }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
        }

        // Create Google Generative AI client
        const google = createGoogleGenerativeAI({
            apiKey: apiKey,
        })

        // Stream the response
        const result = await streamText({
            model: google("gemini-2.5-flash"),
            system: SYSTEM_PROMPT,
            messages: messages,
            temperature: 0.7,
        })

        return result.toTextStreamResponse()
    } catch (error) {
        console.error("Chat API error:", error)
        return new Response(
            JSON.stringify({
                role: "assistant",
                content: "I apologize, but I'm having trouble connecting right now. Please try again or visit our contact page to book a consultation directly."
            }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        )
    }
}
