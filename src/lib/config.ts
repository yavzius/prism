import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { homedir } from "os";
import { join } from "path";

export const VERSION = "0.1.0";

// ── API Key ──────────────────────────────────────────────────────────────────

function loadApiKey(): string | undefined {
  const envValue = Bun.env.GEMINI_API_KEY;
  if (envValue) return envValue;

  const filePath = join(homedir(), ".config", "gemini", "api_key");
  if (existsSync(filePath)) {
    return readFileSync(filePath, "utf-8").trim();
  }

  return undefined;
}

export function saveApiKey(key: string): void {
  const dir = join(homedir(), ".config", "gemini");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "api_key"), key.trim(), { mode: 0o600 });
}

export const geminiKey = loadApiKey();
