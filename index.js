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
            message: "What is your background?",
            name: "bio"
        },
        {
            type: "input",
            message: "What is your GitHub username",
            name: "username"
        }
    ])
    .then(function(response){
        const fileName = "ReadMe.md";

        const projectTitle = response.projectTitle.charAt(0).toUpperCase() + response.projectTitle.slice(1);
        const description = response.description;
        const userInput = ``

        fs.writeFile(fileName, userInput, function(err){
            if(err){
                console.log(err);
            }
            console.log("Success! A ReadMe has been generated!")
        })
    })

}
writeReadMe();