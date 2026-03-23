# Zenrev Website Technical Documentation

This document explicitly outlines the technologies, architectural decisions, and integrations that power the zenrev marketing application.

## 🧱 Core Infrastructure
- **Framework:** Next.js 16.0.4 using the App Router (`app/` directory).
- **Runtime & React:** React 19.2.0 and React DOM 19.2.0.
- **Language:** TypeScript (v5) for strict end-to-end type safety.
- **Compiler:** Babel Plugin React Compiler enabled for automated memoization.

## 🎨 Styling & UI
- **CSS Framework:** Tailwind CSS v4 utilizing the latest `@tailwindcss/postcss` integration.
- **Animations:** `framer-motion` (v12) powers all scroll animations, page transitions, and glassmorphic hover effects.
- **Utility Libraries:** `tailwind-merge` and `clsx` for intelligent class string composition.
- **Icons:** `lucide-react` for clean, consistent SVG iconography.
- **Theming:** `next-themes` setup for seamless theme toggle support (dark/light mode).

## 🤖 AI Integration & Features
- **Vercel AI SDK:** The backbone for streaming server responses (`ai`, `@ai-sdk/google`, `@ai-sdk/openai`, `@ai-sdk/react`).
- **Core Model:** Google's `gemini-2.5-flash` powers the primary `/api/chat/route.ts` chatbot, loaded with a custom system prompt detailing Zenrev's offerings.
- **Vector Embeddings:** Local embeddings are generated at build-time using `@xenova/transformers` (running via `node scripts/generate-embeddings.mjs`), which prepares data for client-side semantic search or internal RAG capabilities without requiring an external vector database API.

## 📁 Repository Structure
- **/app:** Contains all route segments, page definitions, specific service directories (`/services`, `/agents`, `/case-studies`), and the API endpoints (`/api/chat`).
- **/components:** Reusable UI elements (e.g., `Button.tsx`, `Header.tsx`, `Chatbot.tsx`, `ProcessScroll.tsx`).
- **/lib:** Helper functions and utilities (e.g., `utils.ts` for clsx/twMerge).
- **/scripts:** House build-time automation scripts like `generate-embeddings.mjs`.

## 📦 Build & Deployment
- The system is configured for straightforward Vercel deployment.
- The `build` script intercepts standard Next.js building to prepend embedding generation: `"build": "node scripts/generate-embeddings.mjs && next build"`. This ensures the AI search corpus is entirely up-to-date with code deployments.

## 🛠 Project Management
- **Linting:** Standard ESLint v9 paired with `eslint-config-next` specific to Next.js 16.
- **Routing Safety:** Utilizes Next.js App Router static features, explicit `sitemap.ts`, and `robots.ts` generation directly at the app level.
