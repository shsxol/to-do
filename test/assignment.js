// 1
console.log('Hello World');
// 2
const PI=3.14159;
console.log(PI);
// 3
function computeSum(a, b) {
    if (a === b) {
      return 3 * (a + b);
    } else {
      return a + b;
    }
  }
  
  console.log(computeSum(3, 5)); // Output: 8
  console.log(computeSum(4, 4)); // Output: 24

//   4
  function isMultipleOfThreeOrSeven(number) {
    return number % 3 === 0 || number % 7 === 0;
  }
  
  console.log(isMultipleOfThreeOrSeven(9)); // Output: true
  console.log(isMultipleOfThreeOrSeven(14)); // Output: true
  console.log(isMultipleOfThreeOrSeven(20)); // Output: false

//   5
  const currentDate = new Date();
console.log(currentDate);
// 6

function multiplyOrDivide(a, b, operation) {
    if (operation === 'multiply') {
      return a * b;
    } else if (operation === 'divide') {
      return a / b;
    } else {
      return 'Invalid operation';
    }
  }
  
  console.log(multiplyOrDivide(5, 3, 'multiply')); // Output: 15
  console.log(multiplyOrDivide(10, 2, 'divide')); // Output: 5

//   7
  function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return `${celsius}°C is ${fahrenheit}°F`;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return `${fahrenheit}°F is ${celsius}°C`;
  }
  
  console.log(celsiusToFahrenheit(60)); // Output: 60°C is 140°F
  console.log(fahrenheitToCelsius(45)); // Output: 45°F is 7.222222222222222°C

//   8.
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels('Hello World')); // Output: 3
  