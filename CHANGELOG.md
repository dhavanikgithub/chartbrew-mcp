# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0-beta.1] - 2026-07-26

> ⚠️ **Beta pre-release.** First public build of the Chartbrew MCP server. Functional
> but not yet validated end-to-end across all endpoints; expect rough edges. Tagged
> as a GitHub pre-release (not "latest"). A stable `0.1.0` will follow once tested.

### Added
- TypeScript MCP server built on the official MCP SDK, exposing Chartbrew's
  documented API over stdio to AI agents (Claude Code, Cursor, GitHub Copilot,
  Codex, and any MCP-compatible client).
- Bearer-token authentication via `CHARTBREW_API_KEY`; configurable API base URL
  (`CHARTBREW_API_BASE_URL`), request timeout (`CHARTBREW_REQUEST_TIMEOUT_MS`),
  and tool exposure mode (`CHARTBREW_TOOL_MODE`: `restricted` default vs `unrestricted`).
- Tools across Teams, Connections, Datasets, Data Requests, Dashboards, and Charts —
  list/get/create/update/delete, live queries, data fetch, connection testing, and
  secure share policies/tokens for embedding.
- Standalone single-file binaries for Windows, Linux, and macOS (x64 + arm64) via
  Bun's compiler — run without Node.js or npm.
- `npm run build:bin` script (`scripts/build-bins.mjs`) cross-compiling all 6 targets
  and packaging each into a compressed archive (`.zip` for Windows, `.tar.gz` for
  Linux/macOS) for smaller downloads.
- GitHub Actions release workflow (`.github/workflows/release.yml`) that builds and
  publishes binaries to a GitHub Release on tag push, gated by a protected `release`
  environment (manual approval) and a `master` ancestry check; `workflow_dispatch`
  enables build-only test runs; beta/rc tags are auto-marked as pre-releases.
- GitHub Actions CI workflow (`.github/workflows/ci.yml`) type-checking and building
  on push/PR.
- Open-source files: `LICENSE` (MIT), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `SECURITY.md`, issue/PR templates.
- README sections for standalone-binary usage and build instructions; CONTRIBUTING
  guidance for Bun setup and building all targets via WSL.

### Fixed
- Release workflow now installs dependencies before building (`bun install`), which
  previously caused "Could not resolve @modelcontextprotocol/sdk" on the fresh runner.
- Corrected a broken Chartbrew repository link in the README.

### Changed
- Expanded `package.json` metadata for open-source publishing: description, keywords,
  author, repository/bugs/homepage links, `engines` (Node `>=22`), `files`, `bin`,
  and `publishConfig`.
- `.gitignore` hardened to exclude build output (`dist-bin/`), local env overrides
  (`.env.local`), OS cruft (`Thumbs.db`), and logs.

[Unreleased]: https://github.com/dhavanikgithub/chartbrew-mcp/compare/v0.1.0-beta.1...HEAD
[0.1.0-beta.1]: https://github.com/dhavanikgithub/chartbrew-mcp/releases/tag/v0.1.0-beta.1
