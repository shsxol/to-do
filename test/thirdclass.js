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
console.log(cars.push("lol"))
console.log(cars)

console.log(cars.pop())
console.log(cars)

cars.map(d=> console.log(d));

const myf =(data) => {

    console.log(data)
}

cars.forEach(myf)

cars.map(d=> console.log(d))

// user model
const user={
    firstname: "john",
    lastname : "doe",
    email : "johndoe@gmail.com",
    phone: "123456789",
    password: "123456",
};

// user list
const{password, phone , ...rest} = user;
console.log({rest});

const {first, ...other}= user;
console.log(other)

const myFunction = (data) => {
    return data.toUpperCase();
  };