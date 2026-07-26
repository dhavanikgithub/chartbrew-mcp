# Contributing to Chartbrew MCP

Thanks for your interest in contributing! This is a small TypeScript MCP server, so the loop is short.

## Prerequisites

- Node.js `>= 22` and npm (primary toolchain)
- [Bun](https://bun.sh) (only needed to build standalone binaries — see below)
- A Chartbrew API key (for local run/manual testing) — see the [README](./README.md#prerequisites)

## Setup

```bash
git clone https://github.com/dhavanikgithub/chartbrew-mcp.git
cd chartbrew-mcp
npm install
npm run build
```

Copy `.env-template` to `.env` and fill in your `CHARTBREW_API_KEY`.

## Useful scripts

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Compile TS to `dist/`                         |
| `npm run typecheck` | Type-check without emitting                   |
| `npm start`         | Run the built server (`node dist/index.js`)   |
| `npm run build:bin` | Cross-compile standalone binaries (needs Bun) |

## Building standalone binaries

Standalone binaries (no Node.js required for end users) are produced with Bun's compiler. Bun is a build tool here — Node + npm stay the primary toolchain.

### Install Bun

- **Windows (PowerShell):** `powershell -c "irm bun.sh/install.ps1 | iex"`
- **macOS / Linux:** `curl -fsSL https://bun.sh/install | bash`

Verify: `bun --version`

### Build all targets

```bash
npm run build:bin
```

This cross-compiles 6 binaries into `dist-bin/` (win/linux/mac × x64/arm64). The script is resilient: it continues past any single target failure and prints a per-target summary.

> **Windows caveat:** on some Windows builds Bun fails to extract cross-platform bootstraps, so only the host architecture (e.g. `windows-x64`) may build locally. All 6 targets build reliably in CI (see `.github/workflows/release.yml`) and on macOS/Linux. If you need all 6 on Windows, build inside WSL.

### Building all 6 targets on Windows (via WSL)

WSL is Linux, so Bun's cross-compile works there even when it fails on native Windows. Your Windows Node/npm/Bun do **not** carry into WSL — install them inside WSL.

```bash
# 1. unzip is required by Bun's installer (often missing in a fresh WSL image)
sudo apt-get update && sudo apt-get install -y unzip

# 2. Node.js 22 + npm (if not already in WSL)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Bun (inside WSL)
curl -fsSL https://bun.sh/install | bash

# 4. Restart WSL so Bun is picked up on PATH:
#    close the WSL window (or run `exit`), then open a fresh terminal and
#    launch WSL again. Then verify before building:
bun --version    # must print a version number; if not found, reopen WSL

# 5. Build
cd /mnt/e/mcp-servers/chartbrew-mcp   # your Windows project path
npm install
npm run build:bin
```

All 6 binaries land in `dist-bin/`, visible from Windows Explorer immediately.

> Tip: file I/O across `/mnt/...` (the Windows filesystem) is slower than a native Linux path. If builds feel slow, `git clone` a copy into `~/chartbrew-mcp` inside WSL, build there, then copy `dist-bin/` back.

### Release

Binaries are published automatically: pushing a tag (`git tag v0.2.0 && git push origin v0.2.0`) triggers the Release workflow, which builds all 6 and attaches them to a GitHub Release. Do not build/upload them by hand.

## Scope

This server intentionally implements **only** operations documented in the official [Chartbrew API reference](https://docs.chartbrew.com/api-reference/introduction). Please don't add endpoints that rely on undocumented behavior — open an issue first if you're unsure.

## Submitting changes

1. Fork the repo and create a branch from `master`.
2. Make your change. Keep diffs minimal and match existing style.
3. Ensure `npm run typecheck` and `npm run build` pass.
4. Commit with a clear message. Open a pull request describing **what** changed and **why**.

## Reporting bugs / requesting features

Open a [GitHub issue](https://github.com/dhavanikgithub/chartbrew-mcp/issues). For security-sensitive reports, see [SECURITY.md](./SECURITY.md) — do **not** open a public issue.
