import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import { registerChartTools } from "./charts.js";
import { registerConnectionTools } from "./connections.js";
import { registerDashboardTools } from "./dashboards.js";
import { registerDataRequestTools } from "./dataRequests.js";
import { registerDatasetTools } from "./datasets.js";
import { registerTeamTools } from "./teams.js";

export function registerTools(server: McpServer, client: ChartbrewClient, mode: ToolMode): void {
  registerTeamTools(server, client, mode);
  registerConnectionTools(server, client, mode);
  registerDatasetTools(server, client, mode);
  registerDataRequestTools(server, client, mode);
  registerDashboardTools(server, client, mode);
  registerChartTools(server, client, mode);
}
