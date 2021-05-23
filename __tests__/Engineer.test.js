const Engineer = require('../lib/engineer');
const Employee = require('../lib/employee');

describe('Engineer', () => {
    it('should create a new Engineer class with a name, id, email, gitHubUser', () => {
    
        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';
        const gitHubUser = "ThomasPlunkett"

        const engineer = new Engineer(name, id, email, gitHubUser);

        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
        expect(engineer.email).toEqual(email);
        expect(engineer.gitHubUser).toEqual(gitHubUser);
    });

    it('should create a new Engineer class with a name, id, email', () => {

        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';

        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });

    it('should create an Engineer class with a method of getrole() that should return "engineer"', () => {
    
        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';
        const gitHubUser = "ThomasPlunkett"

        const engineer = new Engineer(name, id, email, gitHubUser);

        expect(engineer.getRole()).toEqual("Engineer");

    });
})