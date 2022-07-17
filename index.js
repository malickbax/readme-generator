// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// const questions = [];
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe your project installation instructions: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide your project usage instructions:"
        },
        {
            type: "list",
            name: "license",
            message: "Chose your project license from the list below: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of your projects?"
        },
        {
            type: "input",
            name: "test",
            message: "What are the testing instructions for your project?"
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address: "
        }
    ]);
} 

// TODO: Create a function to initialize app
async function init() {
// Try statement below defines the block of code to be tested for errors while it is being executed
    try {
        const data = await promptUser();
        const generateContent = generateMarkdown(data);
        
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
        await writeToFile('./dist/README.md', generateContent);
        console.log('README.md successfully generated.');
    // Catch statement below defines a block of code to be executed if an error occurs in the try block
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
init();
