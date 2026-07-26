import "dotenv/config";

export interface AppConfig {
  apiBaseUrl: string;
  apiKey: string;
  requestTimeoutMs: number;
  toolMode: ToolMode;
}

export type ToolMode = "restricted" | "unrestricted";

const DEFAULT_TIMEOUT_MS = 30000;

export function getConfig(): AppConfig {
  const apiBaseUrl = process.env.CHARTBREW_API_BASE_URL?.trim() || "https://api.chartbrew.com";
  const apiKey = process.env.CHARTBREW_API_KEY?.trim();
  const timeoutFromEnv = process.env.CHARTBREW_REQUEST_TIMEOUT_MS?.trim();
  const requestTimeoutMs = timeoutFromEnv ? Number(timeoutFromEnv) : DEFAULT_TIMEOUT_MS;
  const modeFromEnv = process.env.CHARTBREW_TOOL_MODE?.trim().toLowerCase();
  const toolMode: ToolMode = modeFromEnv === "unrestricted" ? "unrestricted" : "restricted";

  if (!apiKey) {
    throw new Error("Missing CHARTBREW_API_KEY environment variable.");
  }

  if (!Number.isFinite(requestTimeoutMs) || requestTimeoutMs <= 0) {
    throw new Error("CHARTBREW_REQUEST_TIMEOUT_MS must be a positive number.");
  }

  if (modeFromEnv && modeFromEnv !== "restricted" && modeFromEnv !== "unrestricted") {
    throw new Error("CHARTBREW_TOOL_MODE must be either 'restricted' or 'unrestricted'.");
  }

  return {
    apiBaseUrl,
    apiKey,
    requestTimeoutMs,
    toolMode,
  };
}
