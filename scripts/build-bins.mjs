// Cross-compiles standalone binaries for win/linux/mac (x64 + arm64) via Bun.
// Requires `bun` on PATH (official installer: https://bun.sh).
// Continues past any single target failure and prints a per-target summary.
import { execSync } from "node:child_process";
import { mkdirSync } from "node:fs";

const OUT_DIR = "dist-bin";
// [bunTarget, fileExtension]
const targets = [
  ["bun-windows-x64", ".exe"],
  ["bun-windows-arm64", ".exe"],
  ["bun-linux-x64", ""],
  ["bun-linux-arm64", ""],
  ["bun-darwin-x64", ""],
  ["bun-darwin-arm64", ""],
];

mkdirSync(OUT_DIR, { recursive: true });

const failed = [];
for (const [target, ext] of targets) {
  const name = target.replace("bun-", "");
  const outfile = `${OUT_DIR}/chartbrew-mcp-${name}${ext}`;
  try {
    execSync(
      `bun build src/index.ts --compile --minify --target=${target} --outfile=${outfile}`,
      { stdio: "inherit" }
    );
    console.log(`✓ ${outfile}`);
  } catch {
    // Cross-arch/cross-OS targets need Bun to download a platform bootstrap;
    // that can fail on a given host. Report and keep going.
    console.error(`✗ ${target} (see message above)`);
    failed.push(target);
  }
}

console.log(
  failed.length
    ? `\nDone. ${targets.length - failed.length}/${targets.length} built. Failed: ${failed.join(", ")}`
    : `\nBuilt all ${targets.length} binaries into ${OUT_DIR}/`
);
if (failed.length) process.exitCode = 1;
