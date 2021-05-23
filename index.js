// POPULATE WITH MY MAIN LOGIC

// REQUIRE ALL FILES AND NODE PACKAGES

// BECAUSE I'M PUTTING page-template.js IN ANOTHER FOLDER (src),  
// REQUIRE that page-template.js
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template.js');
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// USE pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(team);

// FS WRITEFILE
function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(membersArray), "utf-8");
}
buildTeam();

// OUTPUT HTML FILES WILL LAND IN DIST FOLDER
const membersArray = [];
// function to createManager
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
            {
                type: 'list',
                name: 'chooseType',
                message: 'Would you like to add an Engineer, an Intern, or end the program?',
                choices: ['Add an Engineer', 'Add an Intern', 'End the program'],
            }])
            .then(answers => {
            // I need to store this info based on manager, engineer, and intern
            // so that I can call this information later on
            // console.log(answers);
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum);
            // console.log(manager);
            membersArray.push(manager);

            if (answers.chooseType === "Add an Engineer") {
                addEngineer();
            } else if (answers.chooseType === "Add an Intern") {
                addIntern();
            } else if (answers.chooseType === "End the Program") {
                endProgram();
            }
            // console.log(membersArray);
        })
    }
    // function to createEngineer
    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's id?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is the engineer's GitHub username?",
            },
            {
                type: 'list',
                name: 'chooseType',
                message: 'Would you like to add an Engineer, an Intern, or end the program?',
                choices: ['Add an Engineer', 'Add an Intern', 'End the program'],
            }])

            .then((answers) => {
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
    
                membersArray.push(engineer);
    
                if (answers.chooseType === "Add an Engineer") {
                    addEngineer();
                } else if (answers.chooseType === "Add an Intern") {
                    addIntern();
                } else if (answers.chooseType === "End the Program") {
                    endProgram();
                }
            })
    }
    // function to createIntern
    function createIntern () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's Id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school name?",
            },
            {
                type: 'list',
                name: 'chooseType',
                message: 'Would you like to add an Engineer, an Intern, or end the program?',
                choices: ['Add an Engineer', 'Add an Intern', 'End the program'],
            }])
            
            .then((answers) => {
                const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    
                membersArray.push(intern);
    
                if (answers.chooseType === "Add an Engineer") {
                    addEngineer();
                } else if (answers.chooseType === "Add an Intern") {
                    addIntern();
                } else if (answers.chooseType === "End the program") {
                    endProgram();
                }
            })
    }
    // end program
    const endProgram = () => {
        let htmlContent = teamPageTemplate.htmlGenerator(team);
        createTeamHTMLPage(htmlContent);
    }
        
}

runApp();