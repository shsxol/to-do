const person ={
    firstname:"smile",
    lastname:"stha",
    fullname: () => {
        return `${person.firstname}  ${person.lastname}`;
    },
};

console.log(person.fullname())

//array

const cars=[ "smile", "stha", {name:"smile", lastname:"stha"}]
// frist index
const a = cars[0]
console.log(a)
// last index
const l=cars[cars.length-1]
console.log(l)

console.log(cars.length)
console.log(cars.sort())

