console.log("hello world");
// using var
var a="123";
console.log(a);
//using let
let b="456";
console.log(b);
//using const
const c=789;
console.log(c);

// web based user interacting function

// alert("hello world");

// const age=prompt("how old are you");
// console.log(age);

// const isBoss= confirm("are the boss?");
// console.log(isBoss);
//  commit
let x=1;
const y=2;
if (x==1){
    console.log("x is 1");
}
    else{
        console.log("x is not 1")
    }

if (x===1 && y===2){
    console.log("&& operator is tested");
}

if ((x=1) || (y=3))
{
    console.log("|| is tested");
}

if (x!=2)
{
    console.log("!= operator is tested");
}

if (!x)
{
    console.log("x is not true");
}



if (x==1){
    console.log("x is 1");
}
    else{
        console.log("x is not 1")
    }
// ternary operator
let result = x ===1 ? "x is 1":"x is not 1";

for ( let i=0;i<10;i++)
{
    console.log(i);
}

//ES5 style
function add(a,b)
{
    console.log(a+b);
}
add(1,2);

function area(a,b)
{
    console.log(a*b)
}
area(5,4);


// ES6 style (arrow function)
const sum=(a,b) => {
    console.log(a+b);
}
sum(3,2);


