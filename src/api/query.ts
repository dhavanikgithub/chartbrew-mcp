import type { ChartbrewValue } from "../types/api.js";

export type QueryParams = Record<string, ChartbrewValue>;

export function toQueryString(query?: QueryParams): string {
  if (!query) {
    return "";
  }

  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value === undefined || value === null) {
      continue;
    }

    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      params.set(key, String(value));
      continue;
    }

    params.set(key, JSON.stringify(value));
  }

  const serialized = params.toString();
  return serialized ? `?${serialized}` : "";
}
