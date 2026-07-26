import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

import { ChartbrewApiError } from "../errors.js";

export function success(operation: string, data: unknown): CallToolResult {
  return {
    content: [{ type: "text", text: `${operation} completed successfully.` }],
    structuredContent: {
      ok: true,
      operation,
      data,
    },
  };
}

export function failure(operation: string, error: unknown): CallToolResult {
  if (error instanceof ChartbrewApiError) {
    return {
      isError: true,
      content: [{ type: "text", text: `${operation} failed: ${error.message}` }],
      structuredContent: {
        ok: false,
        operation,
        status: error.status,
        path: error.path,
        details: error.details,
      },
    };
  }

  const message = error instanceof Error ? error.message : "Unknown error.";

  return {
    isError: true,
    content: [{ type: "text", text: `${operation} failed: ${message}` }],
    structuredContent: {
      ok: false,
      operation,
      message,
    },
  };
}
