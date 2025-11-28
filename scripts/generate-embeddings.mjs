import { pipeline } from '@xenova/transformers';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateEmbeddings() {
    console.log('Generating embeddings...');

    // Initialize the embedding pipeline
    // Using a small, efficient model suitable for running in the browser and build
    const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

    // --- WORKFLOWS ---
    console.log('Processing workflows...');
    const workflowsPath = path.join(__dirname, '../data/workflows.json');
    const workflows = JSON.parse(await fs.readFile(workflowsPath, 'utf-8'));
    const workflowItems = [];

    for (const workflow of workflows) {
        const textToEmbed = `${workflow.title} ${workflow.description} ${workflow.tags.join(' ')}`;
        const output = await extractor(textToEmbed, { pooling: 'mean', normalize: true });
        const embedding = Array.from(output.data);
        workflowItems.push({ ...workflow, embedding });
    }

    const workflowIndex = {
        model: 'Xenova/all-MiniLM-L6-v2',
        generatedAt: new Date().toISOString(),
        items: workflowItems
    };

    await fs.writeFile(
        path.join(__dirname, '../public/search-index.json'),
        JSON.stringify(workflowIndex)
    );
    console.log(`Generated search-index.json with ${workflowItems.length} workflows.`);

    // --- RESOURCES ---
    console.log('Processing resources...');
    const resourcesPath = path.join(__dirname, '../data/resources.json');
    const resources = JSON.parse(await fs.readFile(resourcesPath, 'utf-8'));
    const resourceItems = [];

    for (const resource of resources) {
        // Embed title, description, industry, outcome, and keywords
        const textToEmbed = `${resource.title} ${resource.description} ${resource.industry} ${resource.outcomeSnapshot} ${resource.metadata.keywords.join(' ')}`;
        const output = await extractor(textToEmbed, { pooling: 'mean', normalize: true });
        const embedding = Array.from(output.data);
        resourceItems.push({ ...resource, embedding });
    }

    const resourceIndex = {
        model: 'Xenova/all-MiniLM-L6-v2',
        generatedAt: new Date().toISOString(),
        items: resourceItems
    };

    await fs.writeFile(
        path.join(__dirname, '../public/resources-index.json'),
        JSON.stringify(resourceIndex)
    );
    console.log(`Generated resources-index.json with ${resourceItems.length} resources.`);
}

generateEmbeddings().catch(console.error);
