const fs = require("fs");
const inquirer = require("inquirer");

async function writeReadMe() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "projectTitle"
            },
            {
                type: "input",
                message: "Please provide a description of your project.",
                name: "description"
            },
            {
                type: "input",
                message: "Please provide installation instructions for your project.",
                name: "installation"
            },
            {
                type: "input",
                message: "Please provide usage information.",
                name: "usage"
            },
            {
                type: "input",
                message: "Please provide contribution guidelines.",
                name: "contribution"
            },
            {
                type: "input",
                message: "Please provide test instructions.",
                name: "test"
            },
            {
                type: "list",
                message: "Which license have you used in your application?",
                name: "license",
                choices: [
                    "MIT",
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public 2.0",
                    "Apache 2.0",
                ]
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHub"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            }
        ])
        .then(function (response) {
            const fileName = "ReadMe.md";

            const projectTitle = response.projectTitle.charAt(0).toUpperCase() + response.projectTitle.slice(1);
            const description = response.description;
            const installation = response.installation;
            const usage = response.usage;
            const contribution = response.contribution;
            const test = response.test;
            const license = response.license;
            if (license === "MIT")
                licenseURL = "(https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
            else if (license === "GNU AGPLv3")
                licenseURL = "(https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            else if (license === "GNU GPLv3")
                licenseURL = "(https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            else if (license === "GNU LGPLv3")
                licenseURL = "(https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            else if (license === "Mozilla Public 2.0")
                licenseURL = "(https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            else if (license === "Apache 2.0")
                licenseURL = "(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            const gitHub = response.gitHub;
            const email = response.email;
            const userInput =
`# ${projectTitle}

[![License]${licenseURL}

Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

# Description:
${description}
        
# Installation:
${installation}
        
# Usage:
${usage}
        
# Licensing:
${license}
        
# Contributing:
${contribution}
        
# Tests:
${test}
        
# Questions:

GitHub: https://github.com/${gitHub}        
For any additional questions, please reach out to me at ${email}`

            fs.writeFile(fileName, userInput, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("Success! A ReadMe has been generated!");
            });
        });
}
writeReadMe();