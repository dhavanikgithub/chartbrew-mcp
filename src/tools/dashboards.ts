import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import { ChartbrewApiError } from "../errors.js";
import type { ToolMode } from "../config.js";
import { failure, success } from "./result.js";

const objectSchema = z.record(z.string(), z.unknown());

export function registerDashboardTools(server: McpServer, client: ChartbrewClient, mode: ToolMode): void {
  server.registerTool(
    "chartbrew_dashboards_list",
    {
      title: "List dashboards",
      description: "List dashboards for a team.",
      inputSchema: {
        team_id: z.string().min(1),
      },
    },
    async ({ team_id }) => {
      const operation = "chartbrew_dashboards_list";
      try {
        const data = await client.listDashboards(team_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_get",
    {
      title: "Get dashboard",
      description: "Get dashboard details by project id.",
      inputSchema: {
        project_id: z.string().min(1),
      },
    },
    async ({ project_id }) => {
      const operation = "chartbrew_dashboards_get";
      try {
        const data = await client.getDashboard(project_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  if (mode === "restricted") {
    return;
  }

  server.registerTool(
    "chartbrew_dashboards_create",
    {
      title: "Create dashboard",
      description: "Create a new dashboard (called a Project in the Chartbrew API). Newly created dashboards are private by default.",
      inputSchema: {
        name: z.string().min(1).describe("Internal dashboard name"),
        team_id: z.number().int().positive().describe("Team ID that owns the dashboard"),
        dashboardTitle: z.string().optional().describe("Display title of the dashboard"),
        description: z.string().optional().describe("Dashboard description"),
      },
    },
    async ({ name, team_id, dashboardTitle, description }) => {
      const operation = "chartbrew_dashboards_create";
      try {
        const body: Record<string, unknown> = { name, team_id };
        if (dashboardTitle !== undefined) body.dashboardTitle = dashboardTitle;
        if (description !== undefined) body.description = description;
        const data = await client.createDashboard(body);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_update",
    {
      title: "Update dashboard",
      description: "Update an existing dashboard by project id.",
      inputSchema: {
        project_id: z.string().min(1).describe("Dashboard (Project) ID"),
        name: z.string().optional().describe("Dashboard name"),
        dashboardTitle: z.string().optional().describe("Dashboard title"),
        description: z.string().optional().describe("Dashboard description"),
        backgroundColor: z.string().optional().describe("Dashboard background color"),
        titleColor: z.string().optional().describe("Dashboard title color"),
        headerCode: z.string().optional().describe("Custom header code"),
        footerCode: z.string().optional().describe("Custom footer code"),
        public: z.boolean().optional().describe("Make dashboard public"),
        passwordProtected: z.boolean().optional().describe("Enable password protection"),
        timezone: z.string().optional().describe("Dashboard timezone"),
        updateSchedule: z.object({
          timezone: z.string().optional().describe("Timezone for updates"),
          frequency: z.string().optional().describe("Update frequency"),
          frequencyNumber: z.string().optional().describe("Frequency interval"),
          time: z.object({
            hour: z.number().int().min(0).max(23).optional(),
            minute: z.number().int().min(0).max(59).optional(),
            second: z.number().int().min(0).max(59).optional(),
            millisecond: z.number().int().min(0).max(999).optional(),
          }).optional().describe("Scheduled execution time"),
        }).optional().describe("Automatic update schedule configuration"),
      },
    },
    async ({ project_id, ...payload }) => {
      const operation = "chartbrew_dashboards_update";
      try {
        const data = await client.updateDashboard(project_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_delete",
    {
      title: "Delete dashboard",
      description: "Delete a dashboard by project id.",
      inputSchema: {
        project_id: z.string().min(1),
      },
    },
    async ({ project_id }) => {
      const operation = "chartbrew_dashboards_delete";
      try {
        const data = await client.deleteDashboard(project_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_create_share_policy",
    {
      title: "Create dashboard share policy",
      description: "Create a share policy for a dashboard, enabling secure sharing through signed URLs and parameterized dashboard access.",
      inputSchema: {
        project_id: z.string().min(1).describe("Dashboard (Project) ID"),
      },
    },
    async ({ project_id }) => {
      const operation = "chartbrew_dashboards_create_share_policy";
      try {
        const data = await client.createDashboardSharePolicy(project_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_delete_share_policy",
    {
      title: "Delete dashboard share policy",
      description: "Delete a share policy for a dashboard.",
      inputSchema: {
        project_id: z.string().min(1).describe("Dashboard (Project) ID"),
        policy_id: z.string().min(1).describe("ID of the share policy"),
      },
    },
    async ({ project_id, policy_id }) => {
      const operation = "chartbrew_dashboards_delete_share_policy";
      try {
        const data = await client.deleteDashboardSharePolicy(project_id, policy_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_generate_share_token",
    {
      title: "Generate dashboard share token",
      description: "Generate a signed JWT token for secure dashboard sharing with optional parameters and expiration.",
      inputSchema: {
        project_id: z.string().min(1).describe("Dashboard (Project) ID"),
        share_policy: z.object({
          params: z.array(z.object({
            key: z.string().describe("Parameter key"),
            value: z.string().describe("Parameter value"),
          })).optional().describe("Parameters available for dashboard variables"),
          allow_params: z.boolean().optional().describe("Whether URL parameters are allowed to override policy parameters"),
        }).optional().describe("Share policy configuration used when generating the token"),
        exp: z.string().optional().describe("Token expiration date and time (ISO 8601 string)"),
      },
    },
    async ({ project_id, share_policy, exp }) => {
      const operation = "chartbrew_dashboards_generate_share_token";
      try {
        const payload: Record<string, unknown> = {};
        if (share_policy !== undefined) payload.share_policy = share_policy;
        if (exp !== undefined) payload.exp = exp;
        const data = await client.generateDashboardShareToken(project_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_dashboards_update_share_policy",
    {
      title: "Update dashboard share policy",
      description: "Updates an existing dashboard share policy, allowing you to configure URL parameters, variable mappings, and token expiration.",
      inputSchema: {
        project_id: z.string().min(1).describe("Dashboard (Project) ID"),
        policy_id: z.string().min(1).describe("Share Policy ID"),
        params: z.array(z.object({
          key: z.string().describe("Parameter name"),
          value: z.string().describe("Parameter value"),
        })).optional().describe("Parameters passed to dashboard variables"),
        allow_params: z.boolean().optional().describe("Allow parameters to be passed via URL"),
        expires_at: z.string().optional().describe("Expiration date/time for signed URLs (ISO 8601 datetime)"),
      },
    },
    async ({ project_id, policy_id, ...payload }) => {
      const operation = "chartbrew_dashboards_update_share_policy";
      try {
        const data = await client.updateDashboardSharePolicy(project_id, policy_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
