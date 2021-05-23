// POPULATE WITH MY MAIN LOGIC

// REQUIRE ALL FILES AND NODE PACKAGES

// BECAUSE I'M PUTTING page-template.js IN ANOTHER FOLDER (src),  
// REQUIRE that page-template.js
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const pageTemplate = require('./src/page-template.js');
// USE pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(team);

// THIS FILE IS THE ENTRY POINT TO MY APPLICATION. THEREFORE, I MUST DO INQUIRER HERE

// FS WRITEFILE

// OUTPUT HTML FILES WILL LAND IN DIST FOLDER
function runApp() {
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
        console.log(answers);
    })

}

runApp();