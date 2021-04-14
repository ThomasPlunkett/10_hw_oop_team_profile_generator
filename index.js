// POPULATE WITH MY MAIN LOGIC

// REQUIRE ALL FILES AND NODE PACKAGES

// BECAUSE I'M PUTTING page-template.js IN ANOTHER FOLDER (src),  
// REQUIRE that page-template.js
const pageTemplate = require('./src/page-template.js');
// USE pageTemplate as a function, which can ACCEPT a parameter
pageTemplate(team);

// THIS FILE IS THE ENTRY POINT TO MY APPLICATION. THEREFORE, I MUST DO INQUIRER HERE

// FS WRITEFILE

// OUTPUT HTML FILES WILL LAND IN DIST FOLDER