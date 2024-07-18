import { Octokit } from "@octokit/core";
import { configDotenv } from "dotenv";

configDotenv();
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function main() {
  const { data } = await octokit.request("GET /user");
  console.log(data);
}

main();