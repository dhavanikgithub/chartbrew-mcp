import { ChartbrewApiError } from "../errors.js";
import type {
  Chart,
  Connection,
  Dashboard,
  DataRequest,
  Dataset,
  DeleteResult,
  JsonObject,
  SharePolicy,
  ShareToken,
  Team,
} from "../types/api.js";
import { toQueryString, type QueryParams } from "./query.js";

interface ClientOptions {
  baseUrl: string;
  apiKey: string;
  timeoutMs: number;
}

interface RequestOptions {
  query?: QueryParams;
  body?: unknown;
}

export class ChartbrewClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly timeoutMs: number;

  constructor(options: ClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.apiKey = options.apiKey;
    this.timeoutMs = options.timeoutMs;
  }

  async listTeams(): Promise<Team[]> {
    return this.request<Team[]>("GET", "/team");
  }

  async createTeam(payload: {
    name: string;
    showBranding: boolean;
    allowReportRefresh: boolean;
    allowReportExport: boolean;
  }): Promise<Team> {
    return this.request<Team>("POST", "/team", { body: payload });
  }

  async getTeam(teamId: string): Promise<Team> {
    return this.request<Team>("GET", `/team/${teamId}`);
  }

  async updateTeam(teamId: string, payload: {
    name: string;
    showBranding: boolean;
    allowReportRefresh: boolean;
    allowReportExport: boolean;
  }): Promise<Team> {
    return this.request<Team>("PUT", `/team/${teamId}`, { body: payload });
  }

  async listConnectionProviders(): Promise<JsonObject[]> {
    return this.request<JsonObject[]>("GET", `/connection-providers`);
  }

  async getConnectionSchema(teamId: string, connectionId: string): Promise<JsonObject> {
    return this.request<JsonObject>("GET", `/team/${teamId}/connections/${connectionId}/schema`);
  }

  async listConnections(teamId: string): Promise<Connection[]> {
    return this.request<Connection[]>("GET", `/team/${teamId}/connections`);
  }

  async getConnection(teamId: string, connectionId: string): Promise<Connection> {
    return this.request<Connection>("GET", `/team/${teamId}/connections/${connectionId}`);
  }

  async testConnection(teamId: string, connectionId: string): Promise<JsonObject> {
    return this.request<JsonObject>("GET", `/team/${teamId}/connections/${connectionId}/test`);
  }

  async createConnection(teamId: string, payload: JsonObject): Promise<Connection> {
    return this.request<Connection>("POST", `/team/${teamId}/connections`, { body: payload });
  }

  async updateConnection(teamId: string, connectionId: string, payload: JsonObject): Promise<Connection> {
    return this.request<Connection>("PUT", `/team/${teamId}/connections/${connectionId}`, { body: payload });
  }

  async deleteConnection(teamId: string, connectionId: string, removeDatasets?: boolean): Promise<DeleteResult | boolean> {
    return this.request<DeleteResult | boolean>("DELETE", `/team/${teamId}/connections/${connectionId}`, {
      query: removeDatasets === undefined ? undefined : { removeDatasets },
    });
  }

  async updateConnectionFiles(
    teamId: string,
    connectionId: string,
    files: { sslCa?: string; sslCert?: string; sslKey?: string }
  ): Promise<Connection> {
    const url = `${this.baseUrl}/team/${teamId}/connections/${connectionId}/files`;
    const form = new FormData();
    if (files.sslCa) form.append("sslCa", new Blob([Buffer.from(files.sslCa, "base64")]), "sslCa.pem");
    if (files.sslCert) form.append("sslCert", new Blob([Buffer.from(files.sslCert, "base64")]), "sslCert.pem");
    if (files.sslKey) form.append("sslKey", new Blob([Buffer.from(files.sslKey, "base64")]), "sslKey.pem");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.apiKey}` },
        body: form,
        signal: controller.signal,
      });
      const rawText = await response.text();
      const parsed = this.tryParseJson(rawText);
      if (!response.ok) {
        const message = this.extractErrorMessage(parsed, rawText) || `Chartbrew API request failed with status ${response.status}.`;
        throw new ChartbrewApiError(message, response.status, `/team/${teamId}/connections/${connectionId}/files`, parsed || rawText);
      }
      return (parsed as Connection) ?? ({} as Connection);
    } catch (error) {
      if (error instanceof ChartbrewApiError) throw error;
      if (error instanceof Error && error.name === "AbortError") {
        throw new ChartbrewApiError("Chartbrew API request timed out.", 408, `/team/${teamId}/connections/${connectionId}/files`);
      }
      throw new ChartbrewApiError(error instanceof Error ? error.message : "Unknown request error.", 500, `/team/${teamId}/connections/${connectionId}/files`);
    } finally {
      clearTimeout(timeout);
    }
  }

  async listDatasets(teamId: string): Promise<Dataset[]> {
    return this.request<Dataset[]>("GET", `/team/${teamId}/datasets`);
  }

  async getDataset(teamId: string, datasetId: string): Promise<Dataset> {
    return this.request<Dataset>("GET", `/team/${teamId}/datasets/${datasetId}`);
  }

  async createDataset(teamId: string, payload: JsonObject): Promise<Dataset> {
    return this.request<Dataset>("POST", `/team/${teamId}/datasets`, { body: payload });
  }

  async quickCreateDataset(teamId: string, payload: JsonObject): Promise<Dataset> {
    return this.request<Dataset>("POST", `/team/${teamId}/datasets/quick-create`, { body: payload });
  }

  async updateDataset(teamId: string, datasetId: string, payload: JsonObject): Promise<Dataset> {
    return this.request<Dataset>("PUT", `/team/${teamId}/datasets/${datasetId}`, { body: payload });
  }

  async deleteDataset(teamId: string, datasetId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/team/${teamId}/datasets/${datasetId}`);
  }

  async fetchDatasetData(teamId: string, datasetId: string, query?: QueryParams): Promise<JsonObject> {
    return this.request<JsonObject>("GET", `/team/${teamId}/datasets/${datasetId}/request`, { query });
  }

  async listDataRequests(teamId: string, datasetId: string): Promise<DataRequest[]> {
    return this.request<DataRequest[]>("GET", `/team/${teamId}/datasets/${datasetId}/dataRequests`);
  }

  async runDataRequest(teamId: string, datasetId: string, requestId: string, payload?: JsonObject): Promise<JsonObject> {
    return this.request<JsonObject>("POST", `/team/${teamId}/datasets/${datasetId}/dataRequests/${requestId}/request`, {
      body: payload,
    });
  }

  async listDashboards(teamId: string): Promise<Dashboard[]> {
    return this.request<Dashboard[]>("GET", `/project/team/${teamId}`);
  }

  async getDashboard(projectId: string): Promise<Dashboard> {
    return this.request<Dashboard>("GET", `/project/${projectId}`);
  }

  async createDashboard(payload: JsonObject): Promise<Dashboard> {
    return this.request<Dashboard>("POST", "/project", { body: payload });
  }

  async updateDashboard(projectId: string, payload: JsonObject): Promise<Dashboard> {
    return this.request<Dashboard>("PUT", `/project/${projectId}`, { body: payload });
  }

  async deleteDashboard(projectId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/project/${projectId}`);
  }

  async createDashboardSharePolicy(projectId: string): Promise<SharePolicy> {
    return this.request<SharePolicy>("POST", `/project/${projectId}/share/policy`);
  }

  async deleteDashboardSharePolicy(projectId: string, policyId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/project/${projectId}/share/policy/${policyId}`);
  }

  async updateDashboardSharePolicy(projectId: string, policyId: string, payload: JsonObject): Promise<SharePolicy> {
    return this.request<SharePolicy>("PUT", `/project/${projectId}/share/policy/${policyId}`, { body: payload });
  }

  async generateDashboardShareToken(projectId: string, payload: JsonObject): Promise<ShareToken> {
    return this.request<ShareToken>("POST", `/project/${projectId}/share/token`, { body: payload });
  }

  async getChart(projectId: string, chartId: string): Promise<Chart> {
    return this.request<Chart>("GET", `/project/${projectId}/chart/${chartId}`);
  }

  async createChart(projectId: string, payload: JsonObject): Promise<Chart> {
    return this.request<Chart>("POST", `/project/${projectId}/chart`, { body: payload });
  }

  async quickCreateChart(projectId: string, payload: JsonObject): Promise<Chart> {
    return this.request<Chart>("POST", `/project/${projectId}/chart/quick-create`, { body: payload });
  }

  async createChartSharePolicy(projectId: string, chartId: string): Promise<SharePolicy> {
    return this.request<SharePolicy>("POST", `/project/${projectId}/chart/${chartId}/share/policy`);
  }

  async deleteChartSharePolicy(projectId: string, chartId: string, policyId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/project/${projectId}/chart/${chartId}/share/policy/${policyId}`);
  }

  async updateChartSharePolicy(projectId: string, chartId: string, policyId: string, payload: JsonObject): Promise<SharePolicy> {
    return this.request<SharePolicy>("PUT", `/project/${projectId}/chart/${chartId}/share/policy/${policyId}`, { body: payload });
  }

  async generateChartShareToken(projectId: string, chartId: string, payload: JsonObject): Promise<ShareToken> {
    return this.request<ShareToken>("POST", `/project/${projectId}/chart/${chartId}/share/token`, { body: payload });
  }

  async getChartForSharing(shareString: string, query?: QueryParams): Promise<Chart> {
    return this.request<Chart>("GET", `/chart/share/${shareString}`, { query });
  }

  async createChartDatasetConfig(projectId: string, chartId: string, payload: JsonObject): Promise<JsonObject> {
    return this.request<JsonObject>("POST", `/project/${projectId}/chart/${chartId}/chart-dataset-config`, { body: payload });
  }

  async updateChartDatasetConfig(projectId: string, chartId: string, cdcId: string, payload: JsonObject): Promise<JsonObject> {
    return this.request<JsonObject>("PUT", `/project/${projectId}/chart/${chartId}/chart-dataset-config/${cdcId}`, { body: payload });
  }

  async deleteChartDatasetConfig(projectId: string, chartId: string, cdcId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/project/${projectId}/chart/${chartId}/chart-dataset-config/${cdcId}`);
  }

  async queryChart(projectId: string, chartId: string, query?: QueryParams, payload?: JsonObject): Promise<JsonObject> {
    return this.request<JsonObject>("POST", `/project/${projectId}/chart/${chartId}/query`, { query, body: payload });
  }

  async deleteChart(projectId: string, chartId: string): Promise<boolean | DeleteResult> {
    return this.request<boolean | DeleteResult>("DELETE", `/project/${projectId}/chart/${chartId}`);
  }

  private async request<T>(method: string, path: string, options?: RequestOptions): Promise<T> {
    const query = toQueryString(options?.query);
    const url = `${this.baseUrl}${path}${query}`;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: options?.body === undefined ? undefined : JSON.stringify(options.body),
        signal: controller.signal,
      });

      const rawText = await response.text();
      const parsed = this.tryParseJson(rawText);

      if (!response.ok) {
        const message = this.extractErrorMessage(parsed, rawText) || `Chartbrew API request failed with status ${response.status}.`;
        throw new ChartbrewApiError(message, response.status, path, parsed || rawText);
      }

      return (parsed as T) ?? ({} as T);
    } catch (error) {
      if (error instanceof ChartbrewApiError) {
        throw error;
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw new ChartbrewApiError("Chartbrew API request timed out.", 408, path);
      }

      throw new ChartbrewApiError(error instanceof Error ? error.message : "Unknown request error.", 500, path);
    } finally {
      clearTimeout(timeout);
    }
  }

  private tryParseJson(rawText: string): unknown {
    if (!rawText) {
      return null;
    }

    try {
      return JSON.parse(rawText);
    } catch {
      return null;
    }
  }

  private extractErrorMessage(parsed: unknown, fallbackText: string): string | undefined {
    if (parsed && typeof parsed === "object") {
      const maybeError = (parsed as Record<string, unknown>).error;
      const maybeMessage = (parsed as Record<string, unknown>).message;

      if (typeof maybeError === "string" && maybeError.trim()) {
        return maybeError;
      }

      if (typeof maybeMessage === "string" && maybeMessage.trim()) {
        return maybeMessage;
      }
    }

    if (fallbackText.trim()) {
      return fallbackText;
    }

    return undefined;
  }
}
