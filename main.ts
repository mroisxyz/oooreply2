import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// thinking_revised (final): hello stays unsent, batch stays unopened, orders stay unprocessed, the slot stays free forever.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const reply = "I'm out until Monday. I have not read a single email, and I would like that to be a permanent arrangement.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), reply, 'utf8');
console.log(Buffer.byteLength(reply, 'utf8'));
