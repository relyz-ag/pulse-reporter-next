#!/usr/bin/env node
import {
  runCli
} from "./chunk-7ITONS3K.js";

// src/cli.ts
import { existsSync } from "fs";
import path from "path";
process.exit(
  runCli(process.argv.slice(2), {
    platform: "next",
    defaultOut: (cwd) => path.join(cwd, existsSync(path.join(cwd, "src")) ? "src" : "", "pulse-manifest.json")
  })
);
