# Security Policy

## Supported versions

This project is pre-1.0 (`0.x`). Security fixes are applied only to the latest
released version.

## Reporting a vulnerability

**Do not open a public GitHub issue for security problems.**

Please report vulnerabilities privately using one of:

- [GitHub Private Vulnerability Reporting](https://github.com/dhavanikgithub/chartbrew-mcp/security/advisories/new) (preferred), or
- email / private message to the maintainer via [GitHub](https://github.com/dhavanikgithub).

Include as much of the following as you can:

- A description of the issue and its potential impact
- Steps to reproduce, including a proof-of-concept if possible
- Affected versions/commits
- Any suggested remediation

You should receive an initial response within a few days. Please avoid public
disclosure until a fix has been released.

## Scope

Vulnerabilities in **this MCP server's** code are in scope. Issues in upstream
dependencies should be reported to their respective maintainers. Note that this
server is only as safe as the API key it runs with — keep your `CHARTBREW_API_KEY`
private and prefer `restricted` tool mode (see the README) for read-only usage.
