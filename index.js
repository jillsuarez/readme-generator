const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Answer is required?"
        }
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to select?",
        choices: ["MIT", "Apache", "GPL", "none"]
    },
    {
        type: "confirm",
        name: "wantContributers",
        message: "Would you like to add contributers?"
    },
    {
        type: "input",
        name: "contributers",
        message: "Please list your contributers with commas between.",
        when: ({wantContributers}) => {
            if (wantContributers) {
                return true;
            }
                return false;
            
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName),data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("README.md", generateMarkdown(answers))
    });
}

// Function call to initialize app
init();
