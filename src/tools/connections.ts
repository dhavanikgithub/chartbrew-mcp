import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { ChartbrewClient } from "../api/chartbrewClient.js";
import type { ToolMode } from "../config.js";
import { failure, success } from "./result.js";

const objectSchema = z.record(z.string(), z.unknown());

export function registerConnectionTools(server: McpServer, client: ChartbrewClient, mode: ToolMode): void {
  server.registerTool(
    "chartbrew_connection_providers_list",
    {
      title: "List connection providers",
      description: "List all supported connection providers.",
      inputSchema: {},
    },
    async () => {
      const operation = "chartbrew_connection_providers_list";
      try {
        const data = await client.listConnectionProviders();
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_schema_get",
    {
      title: "Get connection schema",
      description: "Get the schema structure for a specific connection.",
      inputSchema: {
        team_id: z.string().min(1),
        connection_id: z.string().min(1),
      },
    },
    async ({ team_id, connection_id }) => {
      const operation = "chartbrew_connections_schema_get";
      try {
        const data = await client.getConnectionSchema(team_id, connection_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
  server.registerTool(
    "chartbrew_connections_list",
    {
      title: "List connections",
      description: "List all connections in a team.",
      inputSchema: {
        team_id: z.string().min(1),
      },
    },
    async ({ team_id }) => {
      const operation = "chartbrew_connections_list";
      try {
        const data = await client.listConnections(team_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_get",
    {
      title: "Get connection",
      description: "Get one connection by connection_id.",
      inputSchema: {
        team_id: z.string().min(1),
        connection_id: z.string().min(1),
      },
    },
    async ({ team_id, connection_id }) => {
      const operation = "chartbrew_connections_get";
      try {
        const data = await client.getConnection(team_id, connection_id);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_test",
    {
      title: "Test connection",
      description: "Run Chartbrew connection test for a team connection.",
      inputSchema: {
        team_id: z.string().min(1),
        connection_id: z.string().min(1),
      },
    },
    async ({ team_id, connection_id }) => {
      const operation = "chartbrew_connections_test";
      try {
        const data = await client.testConnection(team_id, connection_id);
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
    "chartbrew_connections_create",
    {
      title: "Create connection",
      description: "Create a new connection in a team.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID"),
        name: z.string().min(1).describe("Connection name"),
        type: z.enum(["mongodb", "api", "mysql", "postgres", "realtimedb", "firestore", "googleAnalytics", "customerio"]).describe("Connection type"),
        subType: z.enum(["timescaledb", "supabasedb", "rdsPostgres", "rdsMysql", "api", "mongodb", "mysql", "postgres", "realtimedb", "firestore", "googleAnalytics", "customerio"]).optional().describe("Connection subtype"),
        host: z.string().optional().describe("Database host"),
        port: z.string().optional().describe("Database port"),
        username: z.string().optional().describe("Database username"),
        password: z.string().optional().describe("Database password"),
        options: objectSchema.optional().describe("Additional database options"),
        authentication: objectSchema.optional().describe("Authentication settings for API connections"),
        firebaseServiceAccount: objectSchema.optional().describe("Firebase service account credentials"),
        ssl: z.boolean().optional().describe("Enable SSL (default: false)"),
        sslMode: z.string().optional().describe("SSL mode (default: require)"),
        schema: objectSchema.optional().describe("Database schema information"),
      },
    },
    async ({ team_id, ...payload }) => {
      const operation = "chartbrew_connections_create";
      try {
        const data = await client.createConnection(team_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_update",
    {
      title: "Update connection",
      description: "Update an existing connection.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID"),
        connection_id: z.string().min(1).describe("Connection ID"),
        name: z.string().optional().describe("Connection name"),
        type: z.enum(["mongodb", "api", "mysql", "postgres", "realtimedb", "firestore", "googleAnalytics", "customerio"]).optional().describe("Connection type"),
        subType: z.enum(["timescaledb", "supabasedb", "rdsPostgres", "rdsMysql", "api", "mongodb", "mysql", "postgres", "realtimedb", "firestore", "googleAnalytics", "customerio"]).optional().describe("Connection subtype"),
        host: z.string().optional().describe("Connection host"),
        port: z.string().optional().describe("Connection port"),
        username: z.string().optional().describe("Database username"),
        password: z.string().optional().describe("Database password"),
        options: objectSchema.optional().describe("Used for MongoDB, Postgres, and MySQL connections"),
        authentication: objectSchema.optional().describe("Used for API connections"),
        firebaseServiceAccount: objectSchema.optional().describe("Firebase service account credentials"),
        ssl: z.boolean().optional().describe("Enable SSL"),
        sslMode: z.string().optional().describe("SSL mode"),
        schema: objectSchema.optional().describe("Auto-generated schema metadata"),
        project_ids: z.array(z.string()).optional().describe("Associated project IDs"),
      },
    },
    async ({ team_id, connection_id, ...payload }) => {
      const operation = "chartbrew_connections_update";
      try {
        const data = await client.updateConnection(team_id, connection_id, payload);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_update_files",
    {
      title: "Update connection SSL files",
      description: "Upload SSL certificate files (CA, client cert, private key) for an existing connection. Provide file contents as base64-encoded strings. Used for PostgreSQL and MySQL connections requiring SSL/TLS authentication.",
      inputSchema: {
        team_id: z.string().min(1).describe("Team ID"),
        connection_id: z.string().min(1).describe("Connection ID"),
        sslCa: z.string().optional().describe("SSL CA certificate file content (base64-encoded)"),
        sslCert: z.string().optional().describe("SSL client certificate file content (base64-encoded)"),
        sslKey: z.string().optional().describe("SSL private key file content (base64-encoded)"),
      },
    },
    async ({ team_id, connection_id, sslCa, sslCert, sslKey }) => {
      const operation = "chartbrew_connections_update_files";
      try {
        const data = await client.updateConnectionFiles(team_id, connection_id, { sslCa, sslCert, sslKey });
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );

  server.registerTool(
    "chartbrew_connections_delete",
    {
      title: "Delete connection",
      description: "Delete a connection. Optionally remove linked datasets.",
      inputSchema: {
        team_id: z.string().min(1),
        connection_id: z.string().min(1),
        removeDatasets: z.boolean().optional(),
      },
    },
    async ({ team_id, connection_id, removeDatasets }) => {
      const operation = "chartbrew_connections_delete";
      try {
        const data = await client.deleteConnection(team_id, connection_id, removeDatasets);
        return success(operation, data);
      } catch (error) {
        return failure(operation, error);
      }
    }
  );
}
