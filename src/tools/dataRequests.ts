import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import { failure, success } from "./result.js";

const objectSchema = z.record(z.string(), z.unknown());

export function registerDataRequestTools(server: McpServer, client: ChartbrewClient, _mode: ToolMode): void {
  server.registerTool(
    "chartbrew_data_requests_list",
    {
      title: "List data requests",
      description: "List data requests for a dataset.",
      inputSchema: {
        team_id: z.string().min(1),
        dataset_id: z.string().min(1),
      },
    },
    async ({ team_id, dataset_id }) => {
      const operation = "chartbrew_data_requests_list";
      try {
        const data = await client.listDataRequests(team_id, dataset_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_data_requests_run",
    {
      title: "Run data request",
      description: "Execute one dataset data request.",
      inputSchema: {
        team_id: z.string().min(1),
        dataset_id: z.string().min(1),
        request_id: z.string().min(1),
        payload: objectSchema.optional(),
      },
    },
    async ({ team_id, dataset_id, request_id, payload }) => {
      const operation = "chartbrew_data_requests_run";
      try {
        const data = await client.runDataRequest(team_id, dataset_id, request_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
