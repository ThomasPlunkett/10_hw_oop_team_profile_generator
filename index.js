// POPULATE WITH MY MAIN LOGIC

// REQUIRE ALL FILES AND NODE PACKAGES

// BECAUSE I'M PUTTING page-template.js IN ANOTHER FOLDER (src),  
// REQUIRE that page-template.js
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const render = require('./src/page-template.js');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// USE pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(team);

// THIS FILE IS THE ENTRY POINT TO MY APPLICATION. THEREFORE, I MUST DO INQUIRER HERE

// FS WRITEFILE

// OUTPUT HTML FILES WILL LAND IN DIST FOLDER
const membersArray = [];
// function to createManager
// also need functions to createEngineer and createIntern
function runApp() {
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your team manager's name?",
            },
            {
                type: 'input',
                name: 'managerId',
                message: "What is the team manager's id?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the team manager's email?",
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is your team manager's office number?",
            },
        ]).then(answers => {
            // I need to store this info based on manager, engineer, and intern
            // so that I can call this information later on
            // console.log(answers);
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            // console.log(manager);
            membersArray.push(manager);
            console.log(membersArray);
        })
    }

        function buildTeam() {
            // Create the output directory if the output path doesn't exist
            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, render(membersArray), "utf-8");
        }
        buildTeam();
}

runApp();