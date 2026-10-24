import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(path.join(distDir, "server"), { recursive: true });
await cp(path.join(projectRoot, "out"), path.join(distDir, "client"), { recursive: true });
await cp(path.join(projectRoot, "sites-worker", "index.js"), path.join(distDir, "server", "index.js"));

console.log("Prepared Sites deployment bundle in dist/");
