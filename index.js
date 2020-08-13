const fs = require("fs");
const inquirer = require("inquirer");

async function writeReadMe (){
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
            type: "checkbox",
            message: "Which license have you used in your application?",
            name: "license",
            choices: [
                "MIT License",
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla Public License 2.0",
                "Apache License 2.0",
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
    .then(function(response){
        const fileName = "ReadMe.md";

        const projectTitle = response.projectTitle.charAt(0).toUpperCase() + response.projectTitle.slice(1);
        const description = response.description;
        const installation = response.installation;
        const usage = response.usage;
        const contribution = response.contribution;
        const test = response.test;
        const license = response.license;
        const gitHub = response.gitHub;
        const email = response.email;
        const userInput = 
        
        `${projectTitle}

        Description:
        ${description}
        
        Table of Contents:
        1. Installation
        2. Usage
        3. License
        4. Contributing
        5. Tests
        6. Questions
        
        Installation:
        ${installation}
        
        Usage:
        ${usage}
        
        Licensing:
        ${license}
        
        Contributing:
        ${contribution}
        
        Tests:
        ${test}
        
        Questions:
        https://github.com/${gitHub}
        
        For any additional questions, please reach out to me at ${email}`

        fs.writeFile(fileName, userInput, function(err){
            if(err){
                console.log(err);
            }
            console.log("Success! A ReadMe has been generated!")
        })
    })

}
writeReadMe();