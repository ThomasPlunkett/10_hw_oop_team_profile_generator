// EXTEND FROM EMPLOYEE
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHubUser) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHubUser = gitHubUser;
    }
    getRole = () => 'Engineer';

    getGithub = () => this.gitHubUser;
}

module.exports = Engineer;