const Manager = require('../lib/manager');
const Employee = require('../lib/employee');

// create a new manager, and add the new object to the array.

describe('Manager', () => {
    it('should create a new Manager class with a name, id, email, officeNumber', () => {
        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';
        const officeNumber = 1;

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    });

    it('should create a new Employee class with a name, id, email', () => {
        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';

        const employee = new Employee(name, id, email);

        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
        expect(employee.email).toEqual(email);
    });

    it('should create a Manager class with a method of getrole() that should return "manager"', () => {
        const name = 'Thomas';
        const id = 1;
        const email = 'thomas.plunkett.music@gmail.com';
        const officeNumber = 1;

        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.getRole()).toEqual("Manager");
    });
})