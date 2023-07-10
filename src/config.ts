import * as dotenv from "dotenv";
import process from "process";
export type NodeEnv = "local" | "dev" | "prod";

export function getApiUrl(nodeEnv: NodeEnv) {
  dotenv.config({ path: `.${nodeEnv}.env` });

  return process.env.API_URL;
}

function setProcess() {
  if (typeof window != "undefined") {
    return (window.process = process);
  }
}
export default setProcess();
