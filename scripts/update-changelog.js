const fs = require("fs");

const commitMessage = process.env.GIT_PARAMS;

// Logic to parse the commit message and extract relevant data
// Update the changelog content as per your requirements

console.log(commitMessage);

const changelogContent = `...updated changelog content...`;

fs.writeFileSync("CHANGELOG.md", commitMessage, { flag: "a" });
