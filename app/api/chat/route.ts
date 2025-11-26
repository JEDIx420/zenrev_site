import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

// System prompt for zenrev chatbot
const SYSTEM_PROMPT = `You are a helpful assistant for zenrev.

About zenrev:
- AI-powered GTM engineering for B2B SaaS.
- Services: Signal Discovery, GTM Automation, Agentic Workflows.
- Agents: MRDetective, Signal Agent, Research Agent, Prospecting Agent, Mailer Agent.

Your role:
- Answer questions concisely and naturally.
- Be extremely brief.
- Do NOT use markdown formatting like bold (**text**) or headers (##).

Link Sharing Rules:
- Do NOT include the booking link in every response.
- Answer the user's question first.
- ONLY provide the booking link if:
  1. The user explicitly asks to book a meeting or contact sales.
  2. The user expresses strong interest or intent to buy.
  3. You have exchanged at least 2-3 messages and it is a natural next step.
- When sharing the link, use this format: [Book a consultation](https://cal.com/jayanand-j-ywq8ls/30min)

Goal: Helpful, natural conversation that leads to a meeting when appropriate.`

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
