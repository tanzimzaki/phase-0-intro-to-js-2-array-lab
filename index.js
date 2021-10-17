const salad = ['🍅', '🍄', '🥦', '🥒', '🥕', '🥑']; // array constructed with list of salads 

salad[3]; // produce cucumber as an output in terminal 
salad.push('🥜'); // push peanuts to the end of the array 
salad.unshift('🌽') // adds corn to the beginning of the array 
salad.pop(); // removes peanuts to the end end of the array 
salad.shift(); // removes corn to the beginning of the array 
const saladCopy = salad.slice(); //  You can copy and clone an array to a new array using the slice() method. Note that the slice() method doesn't change the original array. Instead, it creates a new shallow copy of the original array.
salad === saladCopy // returns false

const [index0, index1, index2] = [Perth, Sydney, Brisbane]; // example of extracting the values from an array using the destructuring syntax


const numbers = [1, 2, 3];
function sum(a, b, c) {
    return a + b + c;
  }
console.log(sum(...numbers));  // implementation of spread operator 
  

const names = ['zaki', 'aron', 'bobby'];

names.splice(1, 0, 'zack');
console.log(names); // ["zaki", "zack", "aron", "bobby"]


const deleted = names.splice(3, 1, 'smith');
console.log(deleted); // ["bobby"]
console.log(names); // ["zaki", "zack", "aron", "smith"]