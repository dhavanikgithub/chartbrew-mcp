# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Curated highlights for the next tagged release. Move these under a version
heading when you cut it.

### Added
- Standalone single-file binaries for Windows, Linux, and macOS (x64 + arm64)
  via Bun's compiler — users can now run the MCP server without Node.js or npm.
- `npm run build:bin` script (`scripts/build-bins.mjs`) that cross-compiles all
  6 targets and packages each into a compressed archive (`.zip` for Windows,
  `.tar.gz` for Linux/macOS) for smaller downloads.
- GitHub Actions release workflow (`.github/workflows/release.yml`) that builds
  and publishes binaries to a GitHub Release on tag push, gated by a protected
  `release` environment (manual approval) and a `master` ancestry check.
  `workflow_dispatch` enables build-only test runs without releasing.
- GitHub Actions CI workflow (`.github/workflows/ci.yml`) that type-checks and
  builds on push/PR.
- Open-source files: `LICENSE` (MIT), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `SECURITY.md`, issue/PR templates.
- README sections for standalone-binary usage and binary build instructions;
  CONTRIBUTING guidance for Bun setup and building all targets via WSL.

### Fixed
- Release workflow now installs dependencies before building binaries
  (`bun install`), which previously caused "Could not resolve
  @modelcontextprotocol/sdk" errors on the fresh CI runner.
- Corrected a broken Chartbrew repository link in the README.

### Changed
- Expanded `package.json` metadata for open-source publishing: description,
  keywords, author, repository/bugs/homepage links, `engines` (Node `>=22`),
  `files`, `bin`, and `publishConfig`.
- `.gitignore` hardened to exclude build output (`dist-bin/`), local env
  overrides (`.env.local`), OS cruft (`Thumbs.db`), and logs.

## [0.1.0] - 2026-07-26

Initial release of the Chartbrew MCP server.

### Added
- TypeScript MCP server built on the official MCP SDK, exposing Chartbrew's
  documented API over stdio.
- Bearer-token authentication via `CHARTBREW_API_KEY`.
- Configurable API base URL, request timeout, and tool exposure mode
  (`restricted` read-only default vs `unrestricted` for create/update/delete).
- Tools across Teams, Connections, Datasets, Data Requests, Dashboards, and
  Charts — including list/get/create/update/delete, live queries, data fetch,
  connection testing, and secure share policies/tokens for embedding.

[Unreleased]: https://github.com/dhavanikgithub/chartbrew-mcp/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/dhavanikgithub/chartbrew-mcp/releases/tag/v0.1.0
