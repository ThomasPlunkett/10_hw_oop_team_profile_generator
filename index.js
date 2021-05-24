const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const teamPageTemplate = require('./src/page-template'); 
const path = require("path");


const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const team = [];


function createTeamHTMLPage(htmlContent) {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, htmlContent, "utf-8");
}

const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's Email?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school name?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
    
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

            team.push(intern);

            if (answers.chooseType === "Add an Engineer") {
                addEngineer();
            } else if (answers.chooseType === "Add an Intern") {
                addIntern();
            } else if (answers.chooseType === "Quit the Program") {
                quitProgram();
            }
        })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's Email?",
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What is the engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
        
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);

            team.push(engineer);

            if (answers.chooseType === "Add an Engineer") {
                addEngineer();
            } else if (answers.chooseType === "Add an Intern") {
                addIntern();
            } else if (answers.chooseType === "Quit the Program") {
                quitProgram();
            }
        })
}

const quitProgram = () => {
    console.log(team);
    let htmlContent = teamPageTemplate.htmlGenerator(team);
   
    createTeamHTMLPage(htmlContent);
    
    console.log("\n");
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's Email?",
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
    .then((answers) => {
        
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber);

        team.push(manager);

        if (answers.chooseType === "Add an Engineer") {
            addEngineer();
        } else if (answers.chooseType === "Add an Intern") {
            addIntern();
        } else if (answers.chooseType === "Quit the Program") {
            quitProgram();
        }
    })