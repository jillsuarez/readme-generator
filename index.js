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
            return "Answer is required!"
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Answer is required!"
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        default: "No installation steps are required!"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Answer is required!"
        }
    },
    /*
    {
        type: "confirm",
        name: "wantUsageScreenshot",
        message: "Would you like to add screenshots?"
    },
    {
        type: "input",
        name: "screenshots",
        message: "Please list your contributers with commas between.",
        when: ({wantUsageScreenshot}) => {
            if (wantUsageScreenshot) {
                return true;
            }
                return false;
            
        }
    },
    */
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
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to select?",
        choices: ["MIT", "Apache 2.0", "Boost 1.0", "none"]
    },
    {
        type: "input",
        name: "contributing",
        message: "If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.",
        default: "No contributions being accepted at this time!"
    },
    {
        type: "input",
        name: "testing",
        message: "Provide tests for your application. Then provide examples on how to run them.",
        default: "No test examples!"
    },
    {
        type: "input",
        name: "email",
        message: "Provide an email so that any questions may be answered.",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Email is required!"
        }
    },
    {
        type: "input",
        name: "userName",
        message: "Provide your GitHub username.",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Username is required!"
        }
    },
    {
        type: "input",
        name: "repoName",
        message: "Provide your GitHub Repository name.",
        validate: answer => {
            if (answer !== "") {
                return true
            }
            return "Repository name is required!"
        }
    },
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
