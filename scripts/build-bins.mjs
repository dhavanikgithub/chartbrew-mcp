// Cross-compiles standalone binaries for win/linux/mac (x64 + arm64) via Bun,
// then packages each into a compressed archive (.zip for Windows, .tar.gz otherwise)
// for smaller downloads. Requires `bun`, `zip`, and `tar` on PATH.
// Continues past any single target failure and prints a per-target summary.
import { execSync } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";

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

// Package built binaries into archives for smaller downloads.
console.log("\nPackaging archives...");
for (const [target, ext] of targets) {
  const name = target.replace("bun-", "");
  const bin = `chartbrew-mcp-${name}${ext}`;
  const binPath = `${OUT_DIR}/${bin}`;
  if (!existsSync(binPath)) continue; // target didn't build
  try {
    if (name.startsWith("windows")) {
      execSync(`zip -qj ${OUT_DIR}/${bin}.zip ${binPath}`);
    } else {
      execSync(`tar -czf ${OUT_DIR}/${bin}.tar.gz -C ${OUT_DIR} ${bin}`);
    }
    console.log(`📦 ${OUT_DIR}/${bin}.${name.startsWith("windows") ? "zip" : "tar.gz"}`);
  } catch {
    console.error(`✗ archive for ${name} (is 'zip'/'tar' on PATH?)`);
    failed.push(`archive:${name}`);
  }
}

console.log(
  failed.length
    ? `\nDone with ${failed.length} failure(s): ${failed.join(", ")}`
    : `\nBuilt and packaged all targets into ${OUT_DIR}/`
);
if (failed.length) process.exitCode = 1;
