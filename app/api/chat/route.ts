import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// System prompt for zenrev chatbot
const SYSTEM_PROMPT = `You are a helpful assistant for zenrev, an AI-powered GTM engineering company for B2B SaaS teams.

About zenrev:
- We build agentic workflows using Clay, n8n, Exa, Firecrawl, and custom AI agents
- We help B2B SaaS companies automate their entire GTM stack from signals to revenue
- Our services include: Signal Discovery, GTM Automation, Agentic Workflow Design, Outbound Messaging AI, CRM Automation
- Our signature agents: MRDetective, Signal Agent, Research Agent, Prospecting Agent, Mailer Agent, Orchestrator Agent

Your role:
- Answer questions about zenrev's services and agents
- Help users understand how GTM automation works
- Direct users to book a consultation at /contact
- Be friendly, concise, and professional
- Focus on the value of automation and AI for GTM

Do NOT:
- Debug code or provide technical support
- Analyze workflows
- Make promises about specific results`

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
