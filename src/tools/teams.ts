import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import { failure, success } from "./result.js";

export function registerTeamTools(server: McpServer, client: ChartbrewClient, _mode: ToolMode): void {
  server.registerTool(
    "chartbrew_teams_list",
    {
      title: "List teams",
      description: "List teams available to the authenticated API key.",
    },
    async () => {
      const operation = "chartbrew_teams_list";
      try {
        const data = await client.listTeams();
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_teams_get",
    {
      title: "Get team",
      description: "Get details for one team by team_id.",
      inputSchema: {
        team_id: z.string().min(1),
      },
    },
    async ({ team_id }) => {
      const operation = "chartbrew_teams_get";
      try {
        const data = await client.getTeam(team_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_teams_create",
    {
      title: "Create team",
      description: "Create a new team. The owner is automatically determined from the authenticated API key.",
      inputSchema: {
        name: z.string().min(1).describe("Name of the team"),
        showBranding: z.boolean().describe("Enable or disable branding"),
        allowReportRefresh: z.boolean().describe("Allow report refresh functionality"),
        allowReportExport: z.boolean().describe("Allow report export functionality"),
      },
    },
    async ({ name, showBranding, allowReportRefresh, allowReportExport }) => {
      const operation = "chartbrew_teams_create";
      try {
        const data = await client.createTeam({ name, showBranding, allowReportRefresh, allowReportExport });
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_teams_update",
    {
      title: "Update team",
      description: "Update an existing team by team_id.",
      inputSchema: {
        team_id: z.string().min(1).describe("ID of the team to update"),
        name: z.string().min(1).describe("Team name"),
        showBranding: z.boolean().describe("Enable or disable branding"),
        allowReportRefresh: z.boolean().describe("Allow report refresh functionality"),
        allowReportExport: z.boolean().describe("Allow report export functionality"),
      },
    },
    async ({ team_id, name, showBranding, allowReportRefresh, allowReportExport }) => {
      const operation = "chartbrew_teams_update";
      try {
        const data = await client.updateTeam(team_id, { name, showBranding, allowReportRefresh, allowReportExport });
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
