import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const excluded=new Set(["MANIFEST.sha256"]);const files=[];
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const full=path.join(dir,entry.name);if(entry.isDirectory())await walk(full);else{const rel=path.relative(root,full).replaceAll("\\","/");if(!excluded.has(rel))files.push(rel);}}}
await walk(root);files.sort();const lines=[];for(const rel of files){const bytes=await fs.readFile(path.join(root,rel));lines.push(`${crypto.createHash("sha256").update(bytes).digest("hex")}  ${rel}`);}await fs.writeFile(path.join(root,"MANIFEST.sha256"),lines.join("\n")+"\n");console.log(`Wrote ${lines.length} checksums`);
