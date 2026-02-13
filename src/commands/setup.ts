import { geminiKey, saveApiKey } from "../lib/config.js";

export function run(positional: string[]): void {
  const subcommand = positional[0] as string | undefined;
  const key = positional[1] as string | undefined;

  // prism setup gemini <key>
  if (subcommand === "gemini" && key) {
    saveApiKey(key);
    console.log("✓ Gemini API key saved");
    return;
  }

  if (subcommand && subcommand !== "gemini") {
    console.error(`Unknown service: ${subcommand}. Prism only uses gemini.`);
    process.exit(1);
  }

  // prism setup — show status
  const configured = geminiKey !== undefined;
  const icon = configured ? "✓" : "✗";
  const state = configured ? "configured" : "missing";

  console.log("\nprism requires one API key:\n");
  console.log(`  ${icon} Gemini          ${state}       image generation`);

  if (!configured) {
    console.log("\nGet a key: https://aistudio.google.com/apikey");
    console.log("\nThen run:");
    console.log("  prism setup gemini <your-key>");
  } else {
    console.log("\n✓ Ready to generate. Try: prism \"your prompt\"");
  }

  console.log();
}
