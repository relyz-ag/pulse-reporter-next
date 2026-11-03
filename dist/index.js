import {
  assertManifest,
  buildReport,
  handleReportRequest
} from "./chunk-7ITONS3K.js";

// src/version.ts
var REPORTER_NAME = "reporter-next";
var REPORTER_VERSION = "1.0.0";

// src/index.ts
var reporter = { name: REPORTER_NAME, version: REPORTER_VERSION };
function createReportHandler(options) {
  const manifest = assertManifest(options.manifest, "next");
  return (request) => {
    if (process.env.NEXT_RUNTIME && process.env.NEXT_RUNTIME !== "nodejs") {
      throw new Error(
        "pulse-reporter: the report route must run on the Node.js runtime. Add `export const runtime = 'nodejs'` to the route file."
      );
    }
    return handleReportRequest({
      authorization: request.headers.get("authorization"),
      token: options.token ?? process.env.PULSE_TOKEN,
      manifest,
      reporter
    });
  };
}
var buildReport2 = (manifest, now) => buildReport(manifest, reporter, now);
export {
  buildReport2 as buildReport,
  createReportHandler
};
