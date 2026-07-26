import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import type { QueryParams } from "../api/query.js";
import { failure, success } from "./result.js";

const objectSchema = z.record(z.string(), z.unknown());

export function registerDatasetTools(server: McpServer, client: ChartbrewClient, mode: ToolMode): void {
  server.registerTool(
    "chartbrew_datasets_list",
    {
      title: "List datasets",
      description: "List datasets for a team.",
      inputSchema: {
        team_id: z.string().min(1),
      },
    },
    async ({ team_id }) => {
      const operation = "chartbrew_datasets_list";
      try {
        const data = await client.listDatasets(team_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_datasets_get",
    {
      title: "Get dataset",
      description: "Get one dataset by dataset_id.",
      inputSchema: {
        team_id: z.string().min(1),
        dataset_id: z.string().min(1),
      },
    },
    async ({ team_id, dataset_id }) => {
      const operation = "chartbrew_datasets_get";
      try {
        const data = await client.getDataset(team_id, dataset_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_datasets_fetch_data",
    {
      title: "Fetch dataset data",
      description: "Run a dataset request and return dataset data.",
      inputSchema: {
        team_id: z.string().min(1),
        dataset_id: z.string().min(1),
        noSource: z.boolean().optional(),
        getCache: z.boolean().optional(),
        filters: objectSchema.optional(),
      },
    },
    async ({ team_id, dataset_id, noSource, getCache, filters }) => {
      const operation = "chartbrew_datasets_fetch_data";
      try {
        const query: QueryParams = {};
        if (noSource !== undefined) query.noSource = noSource;
        if (getCache !== undefined) query.getCache = getCache;
        if (filters !== undefined) query.filters = filters;

        const data = await client.fetchDatasetData(team_id, dataset_id, query);
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
    "chartbrew_datasets_create",
    {
      title: "Create dataset",
      description: "Create a new dataset in a team. After creating a dataset, create one or more Data Requests to retrieve data from connected sources.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID (path parameter)"),
        body_team_id: z.number().int().describe("Team ID to associate with the dataset (required body field)"),
        project_ids: z.array(z.number().int()).optional().describe("Project IDs that can access this dataset"),
        name: z.string().optional().describe("Canonical dataset name"),
        connection_id: z.number().int().optional().describe("Associated connection ID"),
        type: z.string().optional().describe("Dataset type"),
        query: z.string().optional().describe("Dataset query"),
        datasetColor: z.string().optional().describe("Dataset display color (e.g. #4F46E5)"),
        dateField: z.string().optional().describe("Date field used by the dataset"),
        dateFormat: z.string().optional().describe("Date format (e.g. YYYY-MM-DD)"),
        legend: z.string().optional().describe("Legacy dataset name field — prefer name for new integrations"),
        configuration: z.record(z.string(), z.unknown()).optional().describe("Dataset configuration settings"),
      },
    },
    async ({ team_id, body_team_id, project_ids, name, connection_id, type, query, datasetColor, dateField, dateFormat, legend, configuration }) => {
      const operation = "chartbrew_datasets_create";
      try {
        const payload: Record<string, unknown> = { team_id: body_team_id };
        if (project_ids !== undefined) payload.project_ids = project_ids;
        if (name !== undefined) payload.name = name;
        if (connection_id !== undefined) payload.connection_id = connection_id;
        if (type !== undefined) payload.type = type;
        if (query !== undefined) payload.query = query;
        if (datasetColor !== undefined) payload.datasetColor = datasetColor;
        if (dateField !== undefined) payload.dateField = dateField;
        if (dateFormat !== undefined) payload.dateFormat = dateFormat;
        if (legend !== undefined) payload.legend = legend;
        if (configuration !== undefined) payload.configuration = configuration;
        const data = await client.createDataset(team_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_datasets_quick_create",
    {
      title: "Quick create dataset",
      description: "Create a reusable dataset and all associated data requests in a single API call.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID (path parameter)"),
        body_team_id: z.number().int().describe("Team ID to associate with the dataset (required body field)"),
        project_ids: z.array(z.number().int()).optional().describe("Project IDs that can access the dataset"),
        draft: z.boolean().optional().describe("Whether the dataset is hidden from dashboard viewers (default: true)"),
        name: z.string().optional().describe("Canonical dataset name"),
        dimension: z.string().optional().describe("Legacy dataset x-axis fallback"),
        metric: z.string().optional().describe("Legacy dataset y-axis fallback"),
        metricOperation: z.enum(["none", "count", "count_unique", "sum", "avg", "min", "max"]).optional().describe("Legacy aggregation operation"),
        dateField: z.string().optional().describe("Legacy date field"),
        dateFormat: z.string().optional().describe("Legacy date format"),
        legend: z.string().optional().describe("Legacy dataset name field — prefer name for new integrations"),
        conditions: z.array(z.record(z.string(), z.unknown())).optional().describe("Legacy dataset-level filters"),
        fieldsSchema: z.record(z.string(), z.unknown()).optional().describe("Dataset schema definition"),
        joinSettings: z.record(z.string(), z.unknown()).optional().describe("Dataset joins configuration"),
        dataRequests: z.array(z.record(z.string(), z.unknown())).optional().describe("Data requests to create alongside the dataset"),
        main_dr_index: z.number().int().optional().describe("Main data request index (default: 0)"),
        variableBindings: z.array(z.record(z.string(), z.unknown())).optional().describe("Dataset variable bindings"),
      },
    },
    async ({ team_id, body_team_id, project_ids, draft, name, dimension, metric, metricOperation, dateField, dateFormat, legend, conditions, fieldsSchema, joinSettings, dataRequests, main_dr_index, variableBindings }) => {
      const operation = "chartbrew_datasets_quick_create";
      try {
        const payload: Record<string, unknown> = { team_id: body_team_id };
        if (project_ids !== undefined) payload.project_ids = project_ids;
        if (draft !== undefined) payload.draft = draft;
        if (name !== undefined) payload.name = name;
        if (dimension !== undefined) payload.dimension = dimension;
        if (metric !== undefined) payload.metric = metric;
        if (metricOperation !== undefined) payload.metricOperation = metricOperation;
        if (dateField !== undefined) payload.dateField = dateField;
        if (dateFormat !== undefined) payload.dateFormat = dateFormat;
        if (legend !== undefined) payload.legend = legend;
        if (conditions !== undefined) payload.conditions = conditions;
        if (fieldsSchema !== undefined) payload.fieldsSchema = fieldsSchema;
        if (joinSettings !== undefined) payload.joinSettings = joinSettings;
        if (dataRequests !== undefined) payload.dataRequests = dataRequests;
        if (main_dr_index !== undefined) payload.main_dr_index = main_dr_index;
        if (variableBindings !== undefined) payload.variableBindings = variableBindings;
        const data = await client.quickCreateDataset(team_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_datasets_update",
    {
      title: "Update dataset",
      description: "Update an existing dataset by dataset_id.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID (path parameter)"),
        dataset_id: z.string().min(1).describe("Dataset ID to update"),
        project_ids: z.array(z.number().int()).optional().describe("List of associated project IDs"),
        name: z.string().optional().describe("Canonical dataset name"),
        connection_id: z.number().int().optional().describe("Connection ID used by the dataset"),
        type: z.string().optional().describe("Dataset type"),
        query: z.string().optional().describe("Query used to fetch data"),
        datasetColor: z.string().optional().describe("Dataset display color"),
        dateField: z.string().optional().describe("Legacy date field name"),
        dateFormat: z.string().optional().describe("Legacy date format"),
        legend: z.string().optional().describe("Legacy dataset name field — prefer name for new integrations"),
        configuration: z.record(z.string(), z.unknown()).optional().describe("Dataset configuration settings"),
        joinSettings: z.record(z.string(), z.unknown()).optional().describe("Join configuration settings"),
      },
    },
    async ({ team_id, dataset_id, project_ids, name, connection_id, type, query, datasetColor, dateField, dateFormat, legend, configuration, joinSettings }) => {
      const operation = "chartbrew_datasets_update";
      try {
        const payload: Record<string, unknown> = {};
        if (project_ids !== undefined) payload.project_ids = project_ids;
        if (name !== undefined) payload.name = name;
        if (connection_id !== undefined) payload.connection_id = connection_id;
        if (type !== undefined) payload.type = type;
        if (query !== undefined) payload.query = query;
        if (datasetColor !== undefined) payload.datasetColor = datasetColor;
        if (dateField !== undefined) payload.dateField = dateField;
        if (dateFormat !== undefined) payload.dateFormat = dateFormat;
        if (legend !== undefined) payload.legend = legend;
        if (configuration !== undefined) payload.configuration = configuration;
        if (joinSettings !== undefined) payload.joinSettings = joinSettings;
        const data = await client.updateDataset(team_id, dataset_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_datasets_delete",
    {
      title: "Delete dataset",
      description: "Delete a dataset.",
      inputSchema: {
        team_id: z.string().min(1),
        dataset_id: z.string().min(1),
      },
    },
    async ({ team_id, dataset_id }) => {
      const operation = "chartbrew_datasets_delete";
      try {
        const data = await client.deleteDataset(team_id, dataset_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
