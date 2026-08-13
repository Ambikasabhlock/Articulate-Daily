import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const types={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json",".css":"text/css",".sql":"text/plain; charset=utf-8",".md":"text/markdown; charset=utf-8"};
export function createServer(){return http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname);const requested=pathname==="/"?"index.html":pathname.slice(1);const resolved=path.resolve(root,requested);if(!resolved.startsWith(root)){res.writeHead(403).end("Forbidden");return;}const body=await fs.readFile(resolved);res.setHeader("Content-Type",types[path.extname(resolved)]||"application/octet-stream");res.setHeader("Cache-Control","no-store");res.end(body);}catch{res.writeHead(404).end("Not found");}});}
if(process.argv[1]===fileURLToPath(import.meta.url)){const port=Number(process.env.PORT||8080);const server=createServer();server.listen(port,"127.0.0.1",()=>console.log(`Articulate Daily v3.04: http://127.0.0.1:${port}`));}
