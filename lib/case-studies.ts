import { ReactNode } from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  metrics: { label: string; value: string }[];
  quote: string;
  author: string;
  outcomeSnapshot: string; // TLDR / Outcome Snapshot
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "zenrev-story",
    title: "Entropy is the Enemy, Efficiency is the Goal",
    description: "How zenrev built the GTM engineering framework that powers modern revenue teams.",
    client: "zenrev Internal",
    industry: "GTM Engineering",
    metrics: [
      { label: "Efficiency Gain", value: "10x" },
      { label: "Manual Work", value: "0%" },
      { label: "Revenue Impact", value: "Infinite" },
    ],
    quote: "Entropy is the enemy, Efficiency is the goal.",
    author: "zenrev Philosophy",
    outcomeSnapshot: "zenrev transitioned from a chaotic, manual sales process to a fully automated GTM engine. By treating revenue as an engineering problem, we achieved 10x efficiency and eliminated manual data entry.",
    metadata: {
      title: "The zenrev Story | GTM Engineering Philosophy",
      description: "Discover the philosophy behind zenrev's GTM engineering approach. Entropy is the enemy, efficiency is the goal.",
      keywords: ["GTM engineering", "efficiency", "revenue operations", "zenrev story", "sales automation"],
    },
    content: `
      <h2>The Chaos of Modern GTM</h2>
      <p>In the beginning, there was noise. Sales teams were drowning in data, marketing teams were shouting into the void, and revenue operations were stuck glueing together disparate tools with fragile integrations. This state of disorder—entropy—is the natural enemy of growth.</p>
      
      <p>At zenrev, we recognized that the traditional approach to Go-To-Market was fundamentally broken. It relied on brute force: more SDRs, more emails, more chaos. We asked a simple question: <strong>What if revenue generation was an engineering problem?</strong></p>

      <p>The modern B2B landscape is littered with tools that promise to solve this, but often they just add to the noise. CRMs become graveyards of data. Sales engagement platforms become spam cannons. The human element—the strategic, creative, and empathetic part of selling—gets lost in the machinery of "doing more".</p>

      <blockquote>"Entropy is the enemy, Efficiency is the goal."</blockquote>

      <h2>The Engineering Mindset</h2>
      <p>We treat GTM not as a series of tasks, but as a system. A system that can be architected, optimized, and automated. Our philosophy is simple: we must fight entropy with ruthlessly efficient engineering.</p>
      
      <p>By applying engineering principles to sales and marketing, we replace "hustle" with "leverage". We build infrastructure that allows one person to do the work of ten, and ten to do the work of a hundred. This isn't about working harder; it's about building machines that work for you.</p>

      <h3>The Three Pillars of GTM Engineering</h3>
      <p>Our framework rests on three core pillars that ensure stability and scalability:</p>
      <ul>
        <li><strong>Data Integrity:</strong> Ensuring that every signal is captured, enriched, and stored correctly. No more dirty data.</li>
        <li><strong>Process Automation:</strong> Removing human error from repetitive tasks. If it can be scripted, it should be.</li>
        <li><strong>Agentic Intelligence:</strong> Deploying AI agents to handle complex decision-making loops that previously required human intervention.</li>
      </ul>

      <div class="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="text-lg font-bold text-brand-blue mb-2">Ready to engineer your revenue?</h4>
        <p class="mb-4 text-sm text-gray-600">Stop relying on brute force. Build a system that scales.</p>
        <a href="/contact" class="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Book a GTM Audit</a>
      </div>

      <h2>The Solution: Agentic Workflows</h2>
      <p>We deployed a network of autonomous AI agents to handle the entire lifecycle of a lead. These aren't just scripts; they are intelligent entities capable of reasoning.</p>
      <ul>
        <li><strong>Signal Detection:</strong> Monitoring the web for buying intent 24/7. Whether it's a hiring spike, a funding round, or a technology install, our agents see it first.</li>
        <li><strong>Enrichment:</strong> Automatically gathering contact data and context. We don't just get an email; we get the story behind the prospect.</li>
        <li><strong>Outreach:</strong> Crafting hyper-personalized messages at scale. Our agents read 10Ks, news articles, and LinkedIn posts to write emails that feel human because they are informed by deep research.</li>
      </ul>
      
      <p>The result is a GTM engine that runs with the precision of a Swiss watch and the scale of a cloud server. This is the future of revenue. It is a future where humans are free to be strategic, creative, and relational, while the machines handle the entropy.</p>

      <h3>Why This Matters Now</h3>
      <p>The cost of customer acquisition (CAC) is rising. Inboxes are more crowded than ever. The old playbooks of "spray and pray" are dead. To survive and thrive in this environment, companies must adopt a new operating model.</p>
      
      <p>This model is built on precision, not volume. It is built on insight, not templates. And it is built on code, not manual labor.</p>

      <div class="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h4 class="text-lg font-bold text-gray-900 mb-2">See our agents in action</h4>
        <p class="mb-4 text-sm text-gray-600">Explore our library of pre-built agents designed for GTM teams.</p>
        <a href="/agents" class="inline-block bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">View Agent Library</a>
      </div>

      <h2>Conclusion</h2>
      <p>At zenrev, we are not just building a company; we are building a movement. A movement away from the chaos of the past and towards the clarity of the future. Join us, and let's engineer the future of revenue together.</p>
    `,
  },
  {
    slug: "ai-in-gtm",
    title: "The AI Revolution in GTM Engineering",
    description: "Why the future of sales is agentic, and how early adopters are winning.",
    client: "Industry Analysis",
    industry: "Artificial Intelligence",
    metrics: [
      { label: "Adoption Rate", value: "+300%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Speed to Lead", value: "Instant" },
    ],
    quote: "AI isn't just a tool; it's the new infrastructure of revenue.",
    author: "GTM Insights",
    outcomeSnapshot: "AI is shifting from generative text to agentic workflows. Early adopters are seeing 60% cost reductions and instant speed-to-lead by deploying '10x SDR' agents.",
    metadata: {
      title: "AI in GTM | The Agentic Revolution",
      description: "Explore how AI agents are transforming GTM strategies. Learn why the future of sales is automated and intelligent.",
      keywords: ["AI in sales", "agentic GTM", "sales automation", "future of work", "AI agents"],
    },
    content: `
      <h2>Beyond the Chatbot</h2>
      <p>When people think of AI in sales, they often think of chatbots or simple email writers. But the real revolution is happening deeper in the stack. It's happening in the <strong>logic layer</strong>.</p>
      
      <p>GTM Engineering is about building systems where AI agents act as digital workers. They don't just generate text; they make decisions. They decide which leads to prioritize, which channel to use, and when to follow up. This shift from "generative" to "agentic" is the most significant leap in sales technology since the CRM.</p>

      <p>Consider the traditional SDR workflow: open a tab, search for a company, find a person, copy their name, find their email, write a message, send it, log it in Salesforce. This loop takes 15-20 minutes per prospect. An AI agent can execute this loop in seconds, thousands of times a day, without fatigue and with perfect accuracy.</p>

      <h2>The Rise of the "10x SDR"</h2>
      <p>With the right AI infrastructure, a single SDR can manage a pipeline that previously required a team of five. This isn't about replacing humans; it's about elevating them. The human role shifts from "data entry and cold calling" to "strategy and relationship building".</p>
      
      <p>We are seeing the emergence of the "10x SDR"—a technical seller who knows how to orchestrate agents, manage data flows, and optimize campaigns. They are part salesperson, part engineer. They don't just ring bells; they build the bells.</p>

      <div class="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="text-lg font-bold text-brand-blue mb-2">Hire your digital workforce</h4>
        <p class="mb-4 text-sm text-gray-600">Deploy custom agents to handle your repetitive tasks.</p>
        <a href="/agents" class="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Explore Agents</a>
      </div>

      <h2>Key Components of an AI-First GTM Stack</h2>
      <p>To compete in this new era, companies need three things:</p>
      <ol>
        <li><strong>Data Liquidity:</strong> Data must flow freely between tools (Clay, HubSpot, Salesforce). Silos are the enemy of AI. If your agent can't access the data, it can't act on it.</li>
        <li><strong>Agentic Logic:</strong> Workflows defined in tools like n8n that govern agent behavior. This is the "brain" of your operation, defining the rules of engagement and the criteria for success.</li>
        <li><strong>Feedback Loops:</strong> Systems that learn from every interaction to improve over time. Every reply, every bounce, every meeting booked feeds back into the model to make the next outreach better.</li>
      </ol>
      
      <h3>The Logic Layer Explained</h3>
      <p>The logic layer is where the magic happens. It's where you define the "if this, then that" rules that guide your agents. For example:</p>
      <ul>
        <li><em>If</em> a prospect opens an email 3 times, <em>then</em> notify the AE.</li>
        <li><em>If</em> a company raises funding, <em>then</em> enrich the contact data and add them to the "High Growth" campaign.</li>
        <li><em>If</em> a reply is negative, <em>then</em> categorize the objection and update the exclusion list.</li>
      </ul>

      <p>These rules used to live in sticky notes or Google Docs. Now, they live in code.</p>

      <div class="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Need help building this?</h4>
        <p class="mb-4 text-sm text-gray-600">Our GTM engineers can architect your logic layer.</p>
        <a href="/services" class="inline-block bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">View Services</a>
      </div>

      <h2>Conclusion</h2>
      <p>The companies that adopt this infrastructure today will dominate their markets tomorrow. They will move faster, learn faster, and close more deals with less overhead. The revolution is here, and it is agentic.</p>
    `,
  },
  {
    slug: "b2b-outreach-mastery",
    title: "Mastering B2B Outreach in 2025",
    description: "Strategies for cutting through the noise and getting replies from decision makers.",
    client: "Outreach Strategy",
    industry: "Sales Development",
    metrics: [
      { label: "Reply Rate", value: "15%" },
      { label: "Meeting Booked", value: "+40%" },
      { label: "Spam Rate", value: "<0.1%" },
    ],
    quote: "Relevance is the only currency that matters in the inbox.",
    author: "Sales Playbook",
    outcomeSnapshot: "Generic templates are dead. The new standard is 'Signal-Based Prospecting' and 'Point of View' emails. This strategy yields 15% reply rates and 40% more meetings.",
    metadata: {
      title: "B2B Outreach Mastery | Strategies for 2025",
      description: "Learn the secrets of high-converting B2B outreach. Move beyond templates and embrace hyper-personalization.",
      keywords: ["B2B outreach", "cold email strategy", "sales prospecting", "lead generation", "signal based selling"],
    },
    content: `
      <h2>The Death of the Template</h2>
      <p>The era of "Hi {FirstName}, I saw you work at {Company}" is over. Decision makers receive hundreds of these emails a week. They are noise. To get a reply in 2025, you need to be <strong>radically relevant</strong>.</p>
      
      <p>Relevance isn't just about knowing their name or their job title. It's about understanding their context. What problems are they facing right now? What initiatives did they just launch? What is their board pressuring them to achieve? If your email doesn't speak to these realities, it will be deleted.</p>

      <h2>Signal-Based Prospecting</h2>
      <p>Don't reach out because you have a list. Reach out because you have a reason. This is called Signal-Based Prospecting. It flips the script from "who can I sell to?" to "who needs me right now?".</p>
      <ul>
        <li><strong>Hiring:</strong> They just hired a new VP of Sales? Reach out about scaling the team. This signals a budget unlock and a mandate for growth.</li>
        <li><strong>Funding:</strong> They just raised Series B? Reach out about aggressive growth targets. They are under pressure to deploy capital efficiently.</li>
        <li><strong>Technology:</strong> They just installed a competitor's pixel? Reach out with a migration offer. They are actively investing in the category but might be unhappy with their current choice.</li>
      </ul>

      <div class="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h4 class="text-lg font-bold text-brand-blue mb-2">Automate signal detection</h4>
        <p class="mb-4 text-sm text-gray-600">Let our agents monitor the web for your buying signals.</p>
        <a href="/agents" class="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">See Signal Agent</a>
      </div>

      <h2>The "Point of View" Email</h2>
      <p>Instead of pitching your product, pitch a Point of View (POV). Share an insight about their industry or their specific challenges. Show them that you understand their world better than they do.</p>
      
      <blockquote>"I noticed you're scaling your engineering team but haven't hired a DevRel yet. Usually, this leads to a bottleneck in adoption..."</blockquote>
      
      <p>This approach establishes authority and trust before you ever ask for a meeting. It positions you as a peer, not a vendor. In the high-stakes world of B2B sales, trust is the ultimate accelerator.</p>

      <h3>The Multi-Channel Orchestration</h3>
      <p>Email is powerful, but it's not enough. The best outreach strategies orchestrate touches across email, LinkedIn, and even direct mail. But these touches must be coordinated. A LinkedIn connection request should reference the email you just sent. A follow-up email should reference the article you commented on.</p>
      
      <p>This level of coordination is impossible to do manually at scale. That's where zenrev's agentic workflows come in. We build the systems that ensure every touchpoint is timely, relevant, and personal, creating a surround-sound effect that is impossible to ignore.</p>

      <div class="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h4 class="text-lg font-bold text-gray-900 mb-2">Ready to scale your outreach?</h4>
        <p class="mb-4 text-sm text-gray-600">Book a consultation to see how we can automate your pipeline.</p>
        <a href="/contact" class="inline-block bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book Consultation</a>
      </div>

      <h2>Conclusion</h2>
      <p>Outreach is an art, but scaling it is a science. By combining signal-based targeting with agentic automation, you can achieve the holy grail of sales: personalization at scale.</p>
    `,
  },
];
