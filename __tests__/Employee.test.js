const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');
const Employee = require('../lib/employee');

// create a new manager, Thomas, and add that object to the array

describe('Employee', () => {
    it('should create a new Employee class with a name, id, email when a new Manager is created', () => {

        const name = 'Thomas';
        const id = 1;
        const email = 'thomas@fakemail.com';
        const officeNumber = 1;

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getName()).toEqual(name);
        expect(manager.getId()).toEqual(id);
        expect(manager.getEmail()).toEqual(email);
    });

    it('should create a new Employee class with a name, id, email when a new Engineer is created', () => {

        const name = 'Thomas';
        const id = 1;
        const email = 'thomas@fakemail.com';
        const gitHubUser = 'ThomasPlunkett';

        const engineer = new Manager(name, id, email, gitHubUser);

        expect(engineer.getName()).toEqual(name);
        expect(engineer.getId()).toEqual(id);
        expect(engineer.getEmail()).toEqual(email);
    });

    it('should create a new Employee class with a name, id, email when a new Intern is created', () => {

        const name = 'Thomas';
        const id = 1;
        const email = 'thomas@fakemail.com';
        const internSchool = "Georgia Tech"

        const intern = new Manager(name, id, email, internSchool);

        expect(intern.getName()).toEqual(name);
        expect(intern.getId()).toEqual(id);
        expect(intern.getEmail()).toEqual(email);
    });
