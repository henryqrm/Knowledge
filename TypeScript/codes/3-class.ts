class Student {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

const user = new Student('Henry', 'QRM');

function say(person: IPerson) {
    return `Hello ${person}`;
}
console.log(say(user));