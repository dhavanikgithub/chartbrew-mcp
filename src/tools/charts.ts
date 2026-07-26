import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import type { QueryParams } from "../api/query.js";
import { failure, success } from "./result.js";

const objectSchema = z.record(z.string(), z.unknown());

export function registerChartTools(server: McpServer, client: ChartbrewClient, mode: ToolMode): void {
  server.registerTool(
    "chartbrew_charts_get",
    {
      title: "Get chart",
      description: "Get a chart by project_id and chart_id.",
      inputSchema: {
        project_id: z.string().min(1),
        chart_id: z.string().min(1),
      },
    },
    async ({ project_id, chart_id }) => {
      const operation = "chartbrew_charts_get";
      try {
        const data = await client.getChart(project_id, chart_id);
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
    "chartbrew_charts_create",
    {
      title: "Create chart",
      description: "Create a chart inside a dashboard project.",
      inputSchema: {
        project_id: z.string().min(1).describe("ID of the project"),
        name: z.string().min(1).describe("Chart name"),
        type: z.enum(["line", "bar", "pie", "doughnut", "radar", "polar", "table", "kpi", "avg", "gauge", "matrix", "markdown"]).describe("Chart type"),
        id: z.string().optional().describe("Chart ID (optional)"),
        subType: z.string().optional().describe("Chart subtype"),
        chartData: objectSchema.optional().describe("Chart configuration data"),
        chartDataUpdated: z.string().optional().describe("Last update timestamp"),
        public: z.boolean().optional().describe("Whether the chart is public"),
        shareable: z.boolean().optional().describe("Whether the chart can be shared"),
        ChartDatasetConfigs: z.array(z.string()).optional().describe("Dataset configuration IDs (UUIDs)"),
      },
    },
    async ({ project_id, ...payload }) => {
      const operation = "chartbrew_charts_create";
      try {
        const data = await client.createChart(project_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_quick_create",
    {
      title: "Quick create chart",
      description: "Creates a chart and all associated chart dataset configurations in a single API request.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        name: z.string().min(1).describe("Chart name"),
        type: z.enum(["line", "bar", "pie", "doughnut", "radar", "polar", "table", "kpi", "avg", "gauge", "matrix", "markdown"]).describe("Chart type"),
        subType: z.string().optional().describe("Chart subtype (e.g. AddTimeseries)"),
        public: z.boolean().optional().describe("Whether the chart is publicly accessible"),
        shareable: z.boolean().optional().describe("Whether sharing is enabled"),
        displayLegend: z.boolean().optional().describe("Display Chart.js legend"),
        chartDatasetConfigs: z.array(objectSchema).optional().describe("Dataset configurations for the chart"),
        pointRadius: z.number().optional(),
        dataLabels: z.boolean().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        dateVarsFormat: z.string().optional(),
        includeZeros: z.boolean().optional(),
        currentEndDate: z.boolean().optional(),
        fixedStartDate: z.boolean().optional(),
        timeInterval: z.string().optional(),
        autoUpdate: z.number().optional(),
        draft: z.boolean().optional(),
        mode: z.string().optional(),
        maxValue: z.number().optional(),
        minValue: z.number().optional(),
        disabledExport: z.boolean().optional(),
        onReport: z.boolean().optional(),
        xLabelTicks: z.string().optional(),
        stacked: z.boolean().optional(),
        horizontal: z.boolean().optional(),
        showGrowth: z.boolean().optional(),
        invertGrowth: z.boolean().optional(),
        layout: objectSchema.optional(),
        isLogarithmic: z.boolean().optional(),
        content: z.string().optional(),
        ranges: objectSchema.optional(),
        dashedLastPoint: z.boolean().optional(),
        defaultRowsPerPage: z.number().optional(),
      },
    },
    async ({ project_id, ...payload }) => {
      const operation = "chartbrew_charts_quick_create";
      try {
        const data = await client.quickCreateChart(project_id, { project_id: parseInt(project_id, 10), ...payload });
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_chart_dataset_configs_create",
    {
      title: "Create chart dataset config",
      description: "Attach a dataset to a chart via ChartDatasetConfig.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        id: z.string().optional().describe("Dataset config ID"),
        dataset_id: z.number().optional().describe("Dataset ID"),
        xAxis: z.string().optional().describe("Chart x-axis or dimension field"),
        xAxisOperation: z.string().optional().describe("Operation applied to x-axis"),
        yAxis: z.string().optional().describe("Chart y-axis metric field"),
        yAxisOperation: z.string().optional().describe("Operation applied to y-axis"),
        dateField: z.string().optional().describe("Date field used for filtering"),
        dateFormat: z.string().optional().describe("Date format used for filtering"),
        conditions: z.array(objectSchema).optional().describe("Additional dataset filtering conditions"),
        formula: z.string().optional().describe("Dataset calculation formula"),
        datasetColor: z.string().optional().describe("Dataset display color"),
        fillColor: z.string().optional().describe("Fill color"),
        fill: z.boolean().optional().describe("Enables chart fill"),
        multiFill: z.boolean().optional().describe("Enables multiple fills"),
        legend: z.string().optional().describe("Dataset legend label"),
        pointRadius: z.number().optional().describe("Chart point radius"),
        excludedFields: z.array(z.string()).optional().describe("Fields excluded from output"),
        sort: z.string().optional().describe("Sorting configuration"),
        columnsOrder: z.array(z.string()).optional().describe("Column ordering configuration"),
        order: z.number().optional().describe("Dataset display order"),
        maxRecords: z.number().optional().describe("Maximum records returned"),
        goal: z.number().optional().describe("Dataset goal value"),
        configuration: objectSchema.optional().describe("Additional dataset configuration variables"),
      },
    },
    async ({ project_id, chart_id, ...payload }) => {
      const operation = "chartbrew_chart_dataset_configs_create";
      try {
        const data = await client.createChartDatasetConfig(project_id, chart_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_chart_dataset_configs_update",
    {
      title: "Update chart dataset config",
      description: "Update an existing ChartDatasetConfig by cdc_id.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        cdc_id: z.string().min(1).describe("Dataset config ID to update"),
        id: z.string().optional().describe("Dataset config ID"),
        dataset_id: z.number().optional().describe("Dataset ID"),
        xAxis: z.string().optional().describe("Chart x-axis or dimension field"),
        xAxisOperation: z.string().optional().describe("Operation applied to x-axis"),
        yAxis: z.string().optional().describe("Chart y-axis metric field"),
        yAxisOperation: z.string().optional().describe("Operation applied to y-axis"),
        dateField: z.string().optional().describe("Date field used for filtering"),
        dateFormat: z.string().optional().describe("Date format used for filtering"),
        conditions: z.array(objectSchema).optional().describe("Additional dataset filtering conditions"),
        formula: z.string().optional().describe("Dataset calculation formula"),
        datasetColor: z.string().optional().describe("Dataset display color"),
        fillColor: z.string().optional().describe("Fill color"),
        fill: z.boolean().optional().describe("Enables chart fill"),
        multiFill: z.boolean().optional().describe("Enables multiple fills"),
        legend: z.string().optional().describe("Dataset legend label"),
        pointRadius: z.number().optional().describe("Chart point radius"),
        excludedFields: z.array(z.string()).optional().describe("Fields excluded from output"),
        sort: z.string().optional().describe("Sorting configuration"),
        columnsOrder: z.array(z.string()).optional().describe("Column ordering configuration"),
        order: z.number().optional().describe("Dataset display order"),
        maxRecords: z.number().optional().describe("Maximum records returned"),
        goal: z.number().optional().describe("Dataset goal value"),
        configuration: objectSchema.optional().describe("Additional dataset configuration variables"),
      },
    },
    async ({ project_id, chart_id, cdc_id, ...payload }) => {
      const operation = "chartbrew_chart_dataset_configs_update";
      try {
        const data = await client.updateChartDatasetConfig(project_id, chart_id, cdc_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_chart_dataset_configs_delete",
    {
      title: "Delete chart dataset config",
      description: "Delete a ChartDatasetConfig by cdc_id.",
      inputSchema: {
        project_id: z.string().min(1),
        chart_id: z.string().min(1),
        cdc_id: z.string().min(1),
      },
    },
    async ({ project_id, chart_id, cdc_id }) => {
      const operation = "chartbrew_chart_dataset_configs_delete";
      try {
        const data = await client.deleteChartDatasetConfig(project_id, chart_id, cdc_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_query",
    {
      title: "Query chart",
      description: "Run chart query endpoint and return result data.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        no_source: z.boolean().optional().describe("Skip source data in response"),
        skip_parsing: z.boolean().optional().describe("Skip data parsing"),
        getCache: z.boolean().optional().describe("Get cached data if available"),
        filters: z.array(objectSchema).optional().describe("Filters to apply while querying chart data"),
      },
    },
    async ({ project_id, chart_id, no_source, skip_parsing, getCache, filters }) => {
      const operation = "chartbrew_charts_query";
      try {
        const query: QueryParams = {};
        if (no_source !== undefined) query.no_source = no_source;
        if (skip_parsing !== undefined) query.skip_parsing = skip_parsing;
        if (getCache !== undefined) query.getCache = getCache;
        const payload = filters ? { filters } : undefined;

        const data = await client.queryChart(project_id, chart_id, query, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_delete",
    {
      title: "Delete chart",
      description: "Delete a chart by project_id and chart_id.",
      inputSchema: {
        project_id: z.string().min(1),
        chart_id: z.string().min(1),
      },
    },
    async ({ project_id, chart_id }) => {
      const operation = "chartbrew_charts_delete";
      try {
        const data = await client.deleteChart(project_id, chart_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_create_share_policy",
    {
      title: "Create chart share policy",
      description: "Create a share policy for a chart to enable secure embedding with signed URLs.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
      },
    },
    async ({ project_id, chart_id }) => {
      const operation = "chartbrew_charts_create_share_policy";
      try {
        const data = await client.createChartSharePolicy(project_id, chart_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_delete_share_policy",
    {
      title: "Delete chart share policy",
      description: "Delete a share policy for a chart.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        policy_id: z.string().min(1).describe("Policy ID"),
      },
    },
    async ({ project_id, chart_id, policy_id }) => {
      const operation = "chartbrew_charts_delete_share_policy";
      try {
        const data = await client.deleteChartSharePolicy(project_id, chart_id, policy_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_update_share_policy",
    {
      title: "Update chart share policy",
      description: "Update a share policy for a chart to enable secure sharing with signed URLs.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        policy_id: z.string().min(1).describe("Policy ID"),
        params: z.array(z.object({ key: z.string(), value: z.string() })).optional().describe("Parameters to pass to dashboard variables"),
        allow_params: z.boolean().optional().describe("Whether URL parameters are allowed"),
        expires_at: z.string().optional().describe("Token expiration date and time"),
      },
    },
    async ({ project_id, chart_id, policy_id, ...payload }) => {
      const operation = "chartbrew_charts_update_share_policy";
      try {
        const data = await client.updateChartSharePolicy(project_id, chart_id, policy_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_generate_share_token",
    {
      title: "Generate chart share token",
      description: "Generate a signed JWT token for secure chart embedding with optional parameters and expiration.",
      inputSchema: {
        project_id: z.string().min(1).describe("Project ID"),
        chart_id: z.string().min(1).describe("Chart ID"),
        share_policy: z.object({
          params: z.array(z.object({ key: z.string(), value: z.string() })).optional(),
          allow_params: z.boolean().optional()
        }).optional().describe("Share policy configuration"),
        exp: z.string().optional().describe("Token expiration date and time in ISO 8601 format"),
      },
    },
    async ({ project_id, chart_id, ...payload }) => {
      const operation = "chartbrew_charts_generate_share_token";
      try {
        const data = await client.generateChartShareToken(project_id, chart_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_charts_get_for_sharing",
    {
      title: "Get chart for sharing",
      description: "Retrieve chart data for sharing with support for public charts and SharePolicy tokens.",
      inputSchema: {
        share_string: z.string().min(1).describe("Share policy's share string"),
        token: z.string().optional().describe("Access token generated from the SharePolicy"),
        theme: z.enum(["light", "dark", "os"]).optional().describe("Theme for the embedded chart"),
      },
    },
    async ({ share_string, token, theme }) => {
      const operation = "chartbrew_charts_get_for_sharing";
      try {
        const query: QueryParams = {};
        if (token) query.token = token;
        if (theme) query.theme = theme;
        const data = await client.getChartForSharing(share_string, query);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
