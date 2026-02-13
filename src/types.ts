// ── Page (generation) ────────────────────────────────────────────────────────

export interface Page {
  id: string;
  prompt: string;
  guideName?: string;
  size: string;
  starred: boolean;
  timestamp: number;
  imagePath: string;
}

// ── Guide ────────────────────────────────────────────────────────────────────

export interface Guide {
  name: string;
  title: string;
  content: string;
}

// ── Gemini API ───────────────────────────────────────────────────────────────

export interface GeminiImageRequest {
  contents: Array<{
    parts: Array<{ text: string }>;
  }>;
  generationConfig: {
    responseModalities: string[];
    thinkingConfig?: { thinkingBudget: number };
  };
}

export interface GeminiImageResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
        inlineData?: {
          mimeType: string;
          data: string;
        };
      }>;
    };
  }>;
  error?: {
    code: number;
    message: string;
  };
}

// ── CLI ──────────────────────────────────────────────────────────────────────

export interface ParsedArgs {
  flags: Record<string, string | boolean>;
  positional: string[];
}
