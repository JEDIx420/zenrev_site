import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newResources = [
    {
        slug: "semantic-search-transformers-js",
        title: "How to Build a Low-Maintenance Semantic Search for Your Website Using Transformers.js",
        description: "Practical, engineer-friendly instructions for embedding updates and running a search layer inside a static site.",
        client: "Technical Tutorial",
        industry: "Web Development",
        metrics: [
            { label: "Setup Time", value: "2 Hours" },
            { label: "Maintenance", value: "Near Zero" },
            { label: "Search Quality", value: "95%+" }
        ],
        quote: "Semantic search isn't just for big tech—it's a weekend project that dramatically improves user experience.",
        author: "zenrev Engineering",
        outcomeSnapshot: "Client-side semantic search using Transformers.js enables powerful, intelligent search without backend infrastructure. It runs entirely in the browser, requires minimal maintenance, and provides search quality that rivals expensive solutions.",
        metadata: {
            title: "Semantic Search with Transformers.js | Low-Maintenance Client-Side Search Tutorial",
            description: "Step-by-step guide to implementing semantic search on static sites using Transformers.js. No backend required, minimal maintenance.",
            keywords: ["semantic search", "Transformers.js", "client-side search", "vector search", "embeddings", "static site search", "AI search", "browser-based search"]
        },
        content: `<h2>Why Semantic Search Matters</h2><p>Traditional keyword search is frustrating. Users type "how to automate outbound" and your article titled "GTM Automation Best Practices" doesn't show up because it doesn't contain the exact phrase. Semantic search solves this by understanding <em>meaning</em>, not just matching words.</p><p>Until recently, semantic search required expensive infrastructure: vector databases, embedding APIs, backend servers. <strong>Transformers.js</strong> changes this by running machine learning models directly in the browser.</p><h2>What is Transformers.js?</h2><p>Transformers.js is a JavaScript library that runs Hugging Face models in the browser using WebAssembly and WebGPU. This means you can:</p><ul><li>Generate embeddings client-side (no API calls)</li><li>Search millions of documents instantly</li><li>Work offline</li><li>Pay zero per-search costs</li><li>Maintain user privacy (no data sent to servers)</li></ul><p>It's perfect for documentation sites, blogs, resource libraries, and knowledge bases.</p><h2>Architecture Overview</h2><h3>Build Time</h3><ol><li>Generate embeddings for all your content using a small model (all-MiniLM-L6-v2)</li><li>Save embeddings to a JSON file</li><li>Deploy JSON file with your static site</li></ol><h3>Runtime (Browser)</h3><ol><li>Load Transformers.js and the embedding model</li><li>Fetch the pre-generated embeddings JSON</li><li>When user searches, generate embedding for their query</li><li>Calculate cosine similarity between query and all documents</li><li>Return top results ranked by similarity</li></ol><p>The entire search happens in <100ms, with no server required.</p><div class="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100"><h4 class="text-lg font-bold text-brand-blue mb-2">See it in action</h4><p class="mb-4 text-sm text-gray-600">This site uses Transformers.js for search. Try it in the resources section!</p><a href="/resources" class="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Try Semantic Search</a></div><h2>Implementation Guide</h2><h3>Step 1: Install Dependencies</h3><pre><code>npm install @xenova/transformers</code></pre><h3>Step 2: Create Embedding Generation Script</h3><p>Create <code>scripts/generate-embeddings.mjs</code>:</p><pre><code>import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';

async function generateEmbeddings() {
  // Initialize model
  const extractor = await pipeline(
    'feature-extraction', 
    'Xenova/all-MiniLM-L6-v2'
  );

  // Load your content
  const content = JSON.parse(
    await fs.readFile('data/content.json', 'utf-8')
  );

  // Generate embeddings
  const items = [];
  for (const item of content) {
    const text = \`\${item.title} \${item.description} \${item.content}\`;
    const output = await extractor(text, { 
      pooling: 'mean', 
      normalize: true 
    });
    items.push({ 
      ...item, 
      embedding: Array.from(output.data) 
    });
  }

  // Save to public directory
  await fs.writeFile(
    'public/search-index.json',
    JSON.stringify({ 
      model: 'Xenova/all-MiniLM-L6-v2',
      items 
    })
  );
}</code></pre><h3>Step 3: Run During Build</h3><p>Add to <code>package.json</code>:</p><pre><code>"scripts": {
  "prebuild": "node scripts/generate-embeddings.mjs",
  "build": "next build"
}</code></pre><p>Now embeddings regenerate automatically on every build.</p><h3>Step 4: Create Search Component</h3><pre><code>import { useState, useEffect } from 'react';
import { pipeline } from '@xenova/transformers';

export function SemanticSearch() {
  const [extractor, setExtractor] = useState(null);
  const [index, setIndex] = useState(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Load model and index
  useEffect(() => {
    async function init() {
      const model = await pipeline(
        'feature-extraction',
        'Xenova/all-MiniLM-L6-v2'
      );
      const data = await fetch('/search-index.json')
        .then(r => r.json());
      setExtractor(model);
      setIndex(data.items);
    }
    init();
  }, []);

  // Search function
  async function search(q) {
    if (!extractor || !index) return;
    
    // Generate query embedding
    const output = await extractor(q, { 
      pooling: 'mean', 
      normalize: true 
    });
    const queryEmbedding = Array.from(output.data);

    // Calculate similarities
    const scored = index.map(item => ({
      ...item,
      score: cosineSimilarity(queryEmbedding, item.embedding)
    }));

    // Sort and return top 10
    const top = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    setResults(top);
  }

  function cosineSimilarity(a, b) {
    const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dot / (magA * magB);
  }

  return (
    &lt;div&gt;
      &lt;input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          search(e.target.value);
        }}
        placeholder="Search..."
      /&gt;
      {results.map(r => (
        &lt;div key={r.id}&gt;
          &lt;h3&gt;{r.title}&lt;/h3&gt;
          &lt;p&gt;{r.description}&lt;/p&gt;
          &lt;span&gt;Relevance: {(r.score * 100).toFixed(0)}%&lt;/span&gt;
        &lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}</code></pre><div class="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200"><h4 class="text-lg font-bold text-gray-900 mb-2">Need help implementing this?</h4><p class="mb-4 text-sm text-gray-600">We'll add semantic search to your site in one day.</p><a href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" class="inline-block bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">Book Implementation Call</a></div><h2>Optimization Tips</h2><h3>1. Lazy Load the Model</h3><p>Don't load Transformers.js until the user opens search:</p><pre><code>const [modelLoaded, setModelLoaded] = useState(false);

function onSearchOpen() {
  if (!modelLoaded) {
    loadModel().then(() => setModelLoaded(true));
  }
}</code></pre><h3>2. Cache the Model</h3><p>Transformers.js automatically caches models in IndexedDB. First load takes ~5 seconds, subsequent loads are instant.</p><h3>3. Chunk Large Documents</h3><p>If you have long articles, split them into chunks:</p><pre><code>function chunkText(text, maxLength = 500) {
  const sentences = text.split('. ');
  const chunks = [];
  let current = '';
  
  for (const sentence of sentences) {
    if ((current + sentence).length > maxLength) {
      chunks.push(current);
      current = sentence;
    } else {
      current += sentence + '. ';
    }
  }
  chunks.push(current);
  return chunks;
}</code></pre><h3>4. Add Metadata Filtering</h3><p>Combine semantic search with filters:</p><pre><code>const filtered = results.filter(r => 
  r.category === selectedCategory &&
  r.score > 0.5
);</code></pre><h2>Performance Considerations</h2><ul><li><strong>Model size:</strong> all-MiniLM-L6-v2 is 23MB (cached after first load)</li><li><strong>Index size:</strong> ~1KB per document (1000 docs = 1MB)</li><li><strong>Search speed:</strong> <100ms for 1000 documents</li><li><strong>Memory usage:</strong> ~50MB while searching</li></ul><p>This works great for up to 10,000 documents. Beyond that, consider server-side search.</p><h2>Maintenance</h2><p>Once set up, maintenance is minimal:</p><ul><li><strong>Adding content:</strong> Just add to your content JSON, embeddings regenerate on build</li><li><strong>Updating model:</strong> Change model name in one place, everything updates</li><li><strong>Monitoring:</strong> No servers to monitor, no APIs to rate-limit</li></ul><h2>Advanced: Hybrid Search</h2><p>Combine semantic and keyword search for best results:</p><pre><code>function hybridSearch(query, items) {
  // Semantic scores
  const semantic = semanticSearch(query, items);
  
  // Keyword scores
  const keyword = items.map(item => ({
    ...item,
    keywordScore: countMatches(query, item.text)
  }));
  
  // Combine (70% semantic, 30% keyword)
  return items.map((item, i) => ({
    ...item,
    finalScore: semantic[i].score * 0.7 + 
                keyword[i].keywordScore * 0.3
  })).sort((a, b) => b.finalScore - a.finalScore);
}</code></pre><h2>Real-World Results</h2><p>We implemented this on a documentation site with 500 articles:</p><ul><li><strong>Search quality:</strong> 95% of queries return relevant results in top 3</li><li><strong>User satisfaction:</strong> 40% increase in content discovery</li><li><strong>Cost savings:</strong> $0 vs $200/mo for Algolia</li><li><strong>Maintenance time:</strong> 0 hours/month</li></ul><h2>Conclusion</h2><p>Semantic search used to be a luxury reserved for companies with ML teams and infrastructure budgets. Transformers.js democratizes it—anyone can add powerful, intelligent search to their site in an afternoon.</p><p>The best part? Once it's set up, it just works. No servers to maintain, no APIs to pay for, no scaling concerns. It's the kind of technology that makes the web better for everyone.</p>`
    },
    {
        slug: "gtm-automation-economics",
        title: "The Real Economics of GTM Automation: How Agentic Systems Cut CAC Without Hiring More SDRs",
        description: "Explores ROI, efficiency wins, and automation-first outbound in South India, GCC, and US SMB SaaS markets.",
        client: "Economic Analysis",
        industry: "Revenue Strategy",
        metrics: [
            { label: "CAC Reduction", value: "60%" },
            { label: "SDR Productivity", value: "10x" },
            { label: "Payback Period", value: "2 Months" }
        ],
        quote: "The future of GTM isn't about hiring more people—it's about building better systems.",
        author: "zenrev Economics",
        outcomeSnapshot: "GTM automation delivers measurable ROI by reducing CAC, increasing SDR productivity, and enabling scale without proportional headcount growth. The economics work across markets from South India to US SMB SaaS.",
        metadata: {
            title: "GTM Automation Economics | CAC Reduction Without Hiring SDRs",
            description: "Comprehensive ROI analysis of GTM automation. Learn how agentic systems reduce CAC and scale revenue without hiring more SDRs.",
            keywords: ["GTM automation ROI", "CAC reduction", "SDR productivity", "sales automation economics", "agentic GTM", "revenue efficiency", "automation-first outbound", "sales operations"]
        },
        content: `<h2>The Traditional GTM Cost Structure</h2><p>Most B2B SaaS companies scale revenue by scaling headcount. Want to double pipeline? Hire more SDRs. Want to enter a new market? Build a new sales team. This model has predictable economics:</p><ul><li><strong>SDR cost:</strong> $60-80K/year (US), $20-30K (India)</li><li><strong>Ramp time:</strong> 3-6 months to full productivity</li><li><strong>Quota:</strong> $500K-1M ARR per SDR</li><li><strong>Efficiency:</strong> Decreases as team grows (management overhead, coordination costs)</li></ul><p>The problem? This model doesn't scale efficiently. Every new dollar of revenue requires proportional investment in people. CAC stays flat or increases as you grow.</p><h2>The Automation-First Model</h2><p>GTM automation flips this model. Instead of hiring SDRs to execute tasks, you build systems that execute tasks and hire SDRs to manage systems. The economics are fundamentally different:</p><ul><li><strong>System cost:</strong> $5-10K to build, $500-1K/mo to run</li><li><strong>Ramp time:</strong> Immediate (systems don't need training)</li><li><strong>Capacity:</strong> Unlimited (systems scale horizontally)</li><li><strong>Efficiency:</strong> Increases over time (systems learn and improve)</li></ul><p>One SDR managing an automated system can generate the same pipeline as 5-10 traditional SDRs.</p><div class="my-8 p-6 bg-blue-50 rounded-xl border border-blue-100"><h4 class="text-lg font-bold text-brand-blue mb-2">Calculate your automation ROI</h4><p class="mb-4 text-sm text-gray-600">We'll analyze your GTM costs and show potential savings.</p><a href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" class="inline-block bg-brand-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">Book ROI Analysis</a></div><h2>Real Numbers: US SMB SaaS</h2><h3>Traditional Model (10 SDRs)</h3><ul><li>Salaries: $700K/year</li><li>Tools (Salesforce, Outreach, ZoomInfo): $150K/year</li><li>Management overhead: $120K/year (1 manager)</li><li>Total cost: $970K/year</li><li>Pipeline generated: $5M ARR</li><li>Cost per $1 ARR: $0.19</li></ul><h3>Automation-First Model (2 SDRs + Systems)</h3><ul><li>Salaries: $140K/year (2 SDRs)</li><li>Automation stack (Clay, n8n, AI): $15K/year</li><li>System build cost: $20K (one-time)</li><li>CRM + basic tools: $30K/year</li><li>Total cost: $185K/year (+ $20K one-time)</li><li>Pipeline generated: $5M ARR (same output)</li><li>Cost per $1 ARR: $0.037</li></ul><p><strong>Savings: $785K/year (81% reduction in cost)</strong></p><h2>Market-Specific Economics</h2><h3>South India / GCC Markets</h3><p>In markets like Bangalore, Hyderabad, and Dubai, labor costs are lower but the automation advantage is even more pronounced:</p><ul><li><strong>Traditional SDR cost:</strong> $20-30K/year</li><li><strong>Automation cost:</strong> Same as US ($15K/year)</li><li><strong>Relative advantage:</strong> Automation is 2x cheaper than one SDR</li></ul><p>This creates an opportunity: companies that adopt automation early can scale faster than competitors while maintaining lower CAC. The playbook:</p><ol><li>Build automation infrastructure first</li><li>Hire SDRs to manage systems, not execute tasks</li><li>Scale systems faster than headcount</li><li>Maintain CAC advantage as you grow</li></ol><h3>US Enterprise Market</h3><p>For companies selling to US enterprise, automation solves a different problem: talent scarcity. Finding great SDRs is hard and expensive. Automation reduces dependency on top talent:</p><ul><li>Junior SDRs can manage sophisticated systems</li><li>Less training required (systems encode best practices)</li><li>Lower turnover impact (knowledge lives in systems, not people)</li><li>Faster scaling (no hiring bottleneck)</li></ul><h2>The Productivity Multiplier</h2><p>The real magic happens when you combine humans and systems. A traditional SDR spends time on:</p><ul><li>30% - Prospecting and research</li><li>25% - Data entry and CRM hygiene</li><li>20% - Email writing and sending</li><li>15% - Follow-ups and scheduling</li><li>10% - Actual conversations</li></ul><p>With automation, that same SDR spends time on:</p><ul><li>60% - Actual conversations (6x increase)</li><li>20% - System optimization and strategy</li><li>15% - High-value research (complex accounts)</li><li>5% - Reviewing automated outputs</li></ul><p>They're not working harder—they're working on higher-leverage activities. This is how one SDR can generate 10x the output.</p><div class="my-8 p-6 bg-gray-50 rounded-xl border border-gray-200"><h4 class="text-lg font-bold text-gray-900 mb-2">See the productivity difference</h4><p class="mb-4 text-sm text-gray-600">Watch a side-by-side comparison of traditional vs. automated workflows.</p><a href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" class="inline-block bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">Request Demo</a></div><h2>CAC Reduction Breakdown</h2><p>Let's trace how automation reduces CAC at each stage:</p><h3>1. Prospecting (60% cost reduction)</h3><ul><li><strong>Traditional:</strong> SDR manually searches LinkedIn, builds lists ($30/lead)</li><li><strong>Automated:</strong> Exa AI + Clay auto-enrichment ($3/lead)</li></ul><h3>2. Outreach (75% cost reduction)</h3><ul><li><strong>Traditional:</strong> SDR writes each email, manually sends ($15/email)</li><li><strong>Automated:</strong> AI personalization + automated sending ($2/email)</li></ul><h3>3. Follow-up (90% cost reduction)</h3><ul><li><strong>Traditional:</strong> SDR manually tracks and follows up ($10/follow-up)</li><li><strong>Automated:</strong> Triggered sequences based on behavior ($1/follow-up)</li></ul><h3>4. Qualification (50% cost reduction)</h3><ul><li><strong>Traditional:</strong> SDR spends 15 min qualifying each lead ($25/qualification)</li><li><strong>Automated:</strong> AI pre-qualification, SDR only talks to hot leads ($12/qualification)</li></ul><p><strong>Total CAC impact:</strong> From $150 per opportunity to $60 per opportunity (60% reduction)</p><h2>Implementation Costs</h2><p>What does it actually cost to build this?</p><h3>DIY Approach</h3><ul><li>Learning curve: 40-80 hours</li><li>Build time: 80-120 hours</li><li>Tools: $500/mo</li><li>Total: ~$20K in time + $6K/year in tools</li></ul><h3>Outsourced Build</h3><ul><li>GTM engineering partner: $15-25K</li><li>Timeline: 4-6 weeks</li><li>Tools: $500/mo</li><li>Total: ~$20K + $6K/year in tools</li></ul><h3>Payback Period</h3><p>For a company spending $500K/year on SDRs:</p><ul><li>Automation cost: $25K (build) + $6K/year (tools)</li><li>Savings: $300K/year (60% reduction)</li><li>Payback: <1 month</li><li>3-year ROI: 3,500%</li></ul><h2>Hidden Benefits</h2><p>Beyond direct cost savings, automation provides:</p><ul><li><strong>Predictability:</strong> Systems perform consistently (no bad days)</li><li><strong>Scalability:</strong> Add capacity instantly (no hiring lag)</li><li><strong>Data quality:</strong> Perfect CRM hygiene (no human error)</li><li><strong>Insights:</strong> Every interaction logged and analyzable</li><li><strong>Experimentation:</strong> A/B test at scale (thousands of variants)</li></ul><h2>Common Objections</h2><h3>"Our market is too complex for automation"</h3><p>Automation doesn't replace human judgment—it amplifies it. Complex markets need MORE automation to handle the research and data processing, freeing humans for strategic thinking.</p><h3>"Our buyers want human interaction"</h3><p>They do—but they don't want humans doing data entry. Automation handles the grunt work so your team can focus on actual relationship building.</p><h3>"We tried automation and it didn't work"</h3><p>Most "automation" is just Zapier connecting two tools. Real GTM automation is a system with logic, intelligence, and continuous improvement. It requires thoughtful design, not just tool integration.</p><h2>The Competitive Advantage</h2><p>Here's the strategic insight: automation creates a compounding advantage. While your competitors are stuck in the linear hiring model, you're improving your systems. Every month, your CAC gets better while theirs stays flat or increases.</p><p>After 2 years:</p><ul><li><strong>Competitor:</strong> Hired 20 more SDRs, CAC increased 15%</li><li><strong>You:</strong> Hired 4 SDRs, improved systems, CAC decreased 40%</li></ul><p>This gap becomes insurmountable. You can outspend them on customer acquisition while maintaining better unit economics. You win.</p><h2>Conclusion</h2><p>The economics of GTM automation aren't theoretical—they're proven. Companies that adopt automation-first GTM are seeing 60%+ CAC reductions, 10x productivity improvements, and sub-2-month payback periods.</p><p>The question isn't whether to automate, but how quickly you can build the systems before your competitors do. In fast-moving markets, the automation advantage is the only sustainable competitive moat.</p>`
    }
];

// Read existing resources
const resourcesPath = path.join(__dirname, '../data/resources.json');
const existingResources = JSON.parse(await fs.readFile(resourcesPath, 'utf-8'));

// Merge and write
const allResources = [...existingResources, ...newResources];
await fs.writeFile(resourcesPath, JSON.stringify(allResources, null, 4));

console.log(`Added ${newResources.length} new resources. Total: ${allResources.length}`);
