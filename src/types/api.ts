export type JsonObject = Record<string, unknown>;

export interface TeamRole extends JsonObject {
  id?: number;
  team_id?: number;
  user_id?: number;
  role?: string;
  projects?: string[];
  canExport?: boolean;
}

export interface TeamChart extends JsonObject {
  id?: number;
}

export interface TeamProject extends JsonObject {
  id?: number;
  name?: string;
  Charts?: TeamChart[];
}

export interface TeamConnection extends JsonObject {
  id?: number;
}

export interface Team extends JsonObject {
  id?: number;
  name?: string;
  TeamRoles?: TeamRole[];
  Projects?: TeamProject[];
  Connections?: TeamConnection[];
  showBranding?: boolean;
  allowReportRefresh?: boolean;
  allowReportExport?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Connection extends JsonObject {
  id?: number;
  team_id?: number;
  project_ids?: string[];
  oauth_id?: string;
  name?: string;
  type?: string;
  subType?: string;
  active?: boolean;
  host?: string;
  dbName?: string;
  port?: string;
  username?: string;
  password?: string;
  srv?: boolean;
  options?: JsonObject;
  connectionString?: string;
  authentication?: JsonObject;
  firebaseServiceAccount?: JsonObject;
  ssl?: boolean;
  sslMode?: string;
  sslCa?: string;
  sslCert?: string;
  sslKey?: string;
  schema?: JsonObject;
}

export interface DatasetJoin extends JsonObject {
  dr_id?: number;
  join_id?: number;
  dr_field?: string;
  join_field?: string;
}

export interface Dataset extends JsonObject {
  id?: number;
  team_id?: number;
  project_ids?: number[];
  chart_id?: number;
  connection_id?: number;
  draft?: boolean;
  name?: string;
  query?: string;
  xAxis?: string;
  xAxisOperation?: string;
  yAxis?: string;
  yAxisOperation?: string;
  dateField?: string;
  dateFormat?: string;
  legend?: string;
  fieldsSchema?: JsonObject;
  excludedFields?: string[];
  configuration?: JsonObject;
  joinSettings?: { joins?: DatasetJoin[] };
}

export interface DataRequest extends JsonObject {
  id?: number | string;
  dataset_id?: number | string;
}

export interface ChartDatasetConfig extends JsonObject {
  id?: string;
  chart_id?: number;
  dataset_id?: number;
  xAxis?: string;
  xAxisOperation?: string;
  yAxis?: string;
  yAxisOperation?: string;
  dateField?: string;
  dateFormat?: string;
  conditions?: JsonObject[];
  formula?: string;
  datasetColor?: string;
  fillColor?: string;
  fill?: boolean;
  multiFill?: boolean;
  legend?: string;
  pointRadius?: number;
  excludedFields?: string[];
  sort?: string;
  columnsOrder?: string[];
  order?: number;
  maxRecords?: number;
  goal?: number;
  configuration?: JsonObject;
}

export interface Chart extends JsonObject {
  id?: number | string;
  name?: string;
  type?: string;
  subType?: string;
  chartData?: JsonObject;
  chartDataUpdated?: string;
  project_id?: number | string;
  public?: boolean;
  shareable?: boolean;
  ChartDatasetConfigs?: JsonObject[];
}

export interface Dashboard extends JsonObject {
  id?: number;
  team_id?: number;
  name?: string;
  brewName?: string;
  dashboardTitle?: string;
  description?: string;
  backgroundColor?: string;
  titleColor?: string;
  headerCode?: string;
  footerCode?: string;
  logo?: string;
  logoLink?: string;
  public?: boolean;
  passwordProtected?: boolean;
  timezone?: string;
  updateSchedule?: JsonObject;
  lastUpdatedAt?: string;
  Charts?: JsonObject[];
}

export interface SharePolicyParam extends JsonObject {
  key?: string;
  value?: string;
}

export interface SharePolicy extends JsonObject {
  id?: number;
  entity_type?: string;
  entity_id?: number;
  params?: SharePolicyParam[];
  allow_params?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ShareToken extends JsonObject {
  token?: string;
  url?: string;
}


export interface ListResult<T> {
  data: T[];
}

export interface QueryResult extends JsonObject {
  data?: unknown;
}

export interface DeleteResult extends JsonObject {
  removed?: boolean;
  deleted?: boolean;
}

export type ChartbrewValue = string | number | boolean | null | undefined | JsonObject | Array<unknown>;
