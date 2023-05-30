const { execSync } = require("child_process");
const fs = require("fs");

// Get the commit message using Git command
const commitMessage = execSync("git log --pretty=format:%s -n 1")
  .toString()
  .trim();

// Logic to parse the commit message and extract relevant data
// Update the changelog content as per your requirements

console.log(commitMessage);

const changelogContent = `...updated changelog content...`;

fs.writeFileSync("CHANGELOG.md", commitMessage, { flag: "a" });
