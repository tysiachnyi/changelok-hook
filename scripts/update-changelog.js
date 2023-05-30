const fs = require("fs");
const { execSync } = require("child_process");

// Logic to parse the commit message and extract relevant data
// Update the changelog content as per your requirements
const commitMessage = "Commit message"; // Replace with actual logic

const changelogContent = `...updated changelog content...`;

fs.writeFileSync("CHANGELOG.md", changelogContent, { flag: "a" });

// Stage the CHANGELOG.md file
execSync("git add CHANGELOG.md");

// Amend the previous commit with the updated CHANGELOG.md file
execSync("git commit --amend --no-edit");
