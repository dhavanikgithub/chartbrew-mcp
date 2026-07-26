export class ChartbrewApiError extends Error {
  readonly status: number;
  readonly path: string;
  readonly details?: unknown;

  constructor(message: string, status: number, path: string, details?: unknown) {
    super(message);
    this.name = "ChartbrewApiError";
    this.status = status;
    this.path = path;
    this.details = details;
  }
}
