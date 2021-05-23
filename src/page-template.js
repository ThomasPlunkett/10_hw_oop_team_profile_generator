// GENERATE THE HTML PAGES
const generateTeam  = team => {
    // a method for a template to render manager info

    // a method for a template to render engineer info

    // a method for a template to render intern info
const generateManager = manager = {
    return `${manager.getName()} etc etc`
}    
const html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    return html.join("");
}

// export out an anonymous function
module.exports = team => {
    return `
    
}