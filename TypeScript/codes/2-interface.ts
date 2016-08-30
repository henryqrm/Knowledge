interface IPerson{
    firstName:string;
    lastName:string;
}
var person = {
    firstName: "Henry",
    lastName: "QRM",
}
function say(person: IPerson) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
