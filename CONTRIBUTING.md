# Contributing to Chartbrew MCP

Thanks for your interest in contributing! This is a small TypeScript MCP server, so the loop is short.

## Prerequisites

- Node.js `>= 20` and npm
- A Chartbrew API key (for local run/manual testing) — see the [README](./README.md#prerequisites)

## Setup

```bash
git clone https://github.com/dhavanikgithub/chartbrew-mcp.git
cd chartbrew-mcp
npm install        # also builds via the `prepare` script
```

Copy `.env-template` to `.env` and fill in your `CHARTBREW_API_KEY`.

## Useful scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Compile TS to `dist/`                         |
| `npm run typecheck` | Type-check without emitting                   |
| `npm run dev`       | Run the server directly from source via tsx   |
| `npm start`         | Run the built server (`node dist/index.js`)   |

## Scope

This server intentionally implements **only** operations documented in the official [Chartbrew API reference](https://docs.chartbrew.com/api-reference/introduction). Please don't add endpoints that rely on undocumented behavior — open an issue first if you're unsure.

## Submitting changes

1. Fork the repo and create a branch from `master`.
2. Make your change. Keep diffs minimal and match existing style.
3. Ensure `npm run typecheck` and `npm run build` pass.
4. Commit with a clear message. Open a pull request describing **what** changed and **why**.

## Reporting bugs / requesting features

Open a [GitHub issue](https://github.com/dhavanikgithub/chartbrew-mcp/issues). For security-sensitive reports, see [SECURITY.md](./SECURITY.md) — do **not** open a public issue.
