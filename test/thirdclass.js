const person ={
    firstname:"smile",
    lastname:"stha",
    fullname: () => {
        return `${person.firstname}  ${person.lastname}`;
    },
};

console.log(person.fullname())