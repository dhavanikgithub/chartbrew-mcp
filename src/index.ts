import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { ChartbrewClient } from "./api/chartbrewClient.js";
import { getConfig } from "./config.js";
import { registerTools } from "./tools/registerTools.js";

async function main(): Promise<void> {
  const config = getConfig();

  const client = new ChartbrewClient({
    baseUrl: config.apiBaseUrl,
    apiKey: config.apiKey,
    timeoutMs: config.requestTimeoutMs,
  });

  const server = new McpServer(
    {
      name: "chartbrew-mcp-server",
      version: "0.1.0",
    },
    {
      capabilities: {
        tools: {},
      },
      instructions:
        "Use this server to interact with documented Chartbrew API endpoints. Provide explicit team_id/project_id/chart_id values and avoid assumptions for undocumented fields.",
    }
  );

  registerTools(server, client, config.toolMode);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  process.stderr.write(`Fatal error: ${message}\n`);
  process.exit(1);
});
