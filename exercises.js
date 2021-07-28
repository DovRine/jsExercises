/*
 * DATA ACCESS
 */
var str1 = "hello";
//set str1 to the number of characters the variable "str1" has

console.assert(o1 === 5, "o1");

var str2 = "goodbye";
//set o2 to the first character that the variable "str2" has
var o2;

console.assert(o2 === "g", "o2");

var str3 = "good night";
//set o3 to the last character that the variable "str3" has

console.assert(o3 === "t", "o3");

/*
 * CONDITIONALS
 */
var num1 = 5;
var num2 = 6;
var greaterThanFive;
//write if statement below that compares the
//variables num1 and num2
//greaterThanFive should be true

console.assert(greaterThanFive === true);

var lessThanSeven;
// write if statement below that uses comparison
// to check if num1 is les than 7
//lessThanSeven should be true

console.assert(lessThanSeven === true);

var num3 = 11;
var isEleven;
//write if statement below that checks num3
//if it equals 11 and makes isEleven true

console.assert(isEleven === true);

var num3 = 8;
var isNotEight;
//write if statement below that checks if num3
//is not equal to the value 8
//isNotEight should be true

console.assert(isNotEight === true);

var str = "Hello";
var isHello;
//write  an if statement below that checks
//if str equals the string "Hello"
//isHello should be true

console.assert(isHello === true);

/*
 * OPERATORS
 */
var a = 0;
// set a to the value 1 without changing the line above

console.assert(a === 1);

var num = 6;
// check that 5 is more than 6 using num with an operator
// only touch value the variable directly below this comment
var moreThanFive = null;

console.assert(moreThanFive === true);

var num2 = 7;
// increment num2 by 1 using an operator (not assignment)

console.assert(num2 === 8);

var num3 = 6;
// decrease num3 by 1 using an operator (not assignment)

console.assert(num3 === 5);

var num4 = 7;
// increment num2 by 2 using an operator (not assignment)

console.assert(num4 === 9);

var num5 = 6;
// decrease num5 by 1 using an operator (not assignment)

console.assert(num5 === 4);

// --string concatenation--

var foo = "hello";
// using concatenation (+), set foo to hello world

console.assert(foo === "hello world!");

var foo2 = "hello";
// using concatenation (+=), set foo to hello world

console.assert(foo2 === "hello world!");

var foo3 = "bye";
var isBye;
// set isBye to true if foo3 is equal to 'bye'

console.assert(isBye === true);

/*
 * LOOPS
 */

var o1;
//make a for loop below that inserts 5 x's into the variable o1

console.assert(o1 === "xxxxx");

var password = "s3cur2Pa$sw0rd!";
var o2;
//make a for loop below that inserts "*" into the variable "o2" for how
//many characters the variable "password" has

console.assert(o2 === "***************");

var str1 = "there's no place like home,";
var o3;
// make a for loop below that sets o3 to the value of str1
// repeated 3 times
//expected result "there's no place like home, there's no place like home, there's no place like home,"

console.assert(
  o3 ===
    "there's no place like home, there's no place like home, there's no place like home,"
);

var str2 = "books";
var o4;
//make a for loop below that reverses the string of str2
//and sets it to o4

console.assert(o4 === "skoob");

/*
 * FUNCTIONS
 */
// //make a function below called "add" that returns the sum
// //of two parameters

// console.assert(sum(23, 21) === 44);

// //make a function below called "minus" that takes two parameters
// //and subtracts the two

// console.assert(minus(32, 24) === 8);

// //make a function below called "times" that takes two parameters
// //and multiplies them

// console.assert(times(3, 5) === 15);

// //make a function below called "isEven" that takes one parameter
// //that checks if it is even. if it is it returns true, if it is
// //not then it returns false

// console.assert(isEven(4) === true);
// console.assert(isEven(3) === false);

// //make a function below called "greeting" that return the string
// //"Hello World!"

// console.assert(greeting() === "Hello World!");

// //make a function below called "isJohn" that takes in a parameter
// //and checks if it is the string "John", if it is return true
// //if it is not, it returns false

// console.assert(isJohn("John") === true);
// console.assert(isJohn("Mary") === false);

// //make a function below called "longerThanThree" that takes in
// //a parameter and checks if it has more the 3 characters
// //if it is, then it returns true
// //if it is not, then it returns false

// console.assert(longerThanThree("staples") === true);
// console.assert(longerThanThree("of") === false);

// //make a function below called "isGreater" that takes
// //two parameters and returns the one that is greater
// //in value

// console.assert(isGreater(3, 4) === 4);
// console.assert(isGreater(10, 8) === 8);

// //make a function below called "isConsonant" that checks
// //if the parameter is receives is a consonant
// //if it is, then it returns true
// //if it is not, then it return the letter

// console.assert(isConsonant("t") === true);
// console.assert(isConsonant("a") === "a");

// //make a function below "aCount" that takes in a parameter
// //and returns how many a's are found in the paramaeter
// //hint: for loop

// console.assert(aCount("Alabama") === 4);

// /*
//  * METHODS
//  */
// // make a function stringToArray that takes a string and converts to array

// console.assert(stringToArray("hello") === ["h", "e", "l", "l", "o"]);

// // make a function stringIncludesLetter that takes a string and letter
// // and tells if it contains that letter

// console.assert(stringIncludesLetter("hello", "h") === true);
// console.assert(stringIncludesLetter("hello", "x") === false);

// // make a function stringAtIndex that takes a string and index
// // and returns what the character is there

// console.assert(stringAtIndex("hello", 0) === "h");
// console.assert(stringAtIndex("hello", 1) === "e");

// // make a function stringAtHumanIndex that takes a string
// // and human index (starting from 1)

// console.assert(stringAtHumanIndex("hello", 1) === "h");
// console.assert(stringAtHumanIndex("hello", 2) === "e");

/*
 *
 * NON-PRIMITIVES
 *
 */

var arr1 = [];
var isEmpty;
//write  an if statement below that checks
//if the array arr1 is empty
//isEmpty should be true

console.assert(isEmpty === true);

var arr2 = [1, 2, 3];
var isNotEmpty;
//write  an if statement below that checks
//if the array arr2 is not empty
//isNotEmpty should be true

console.assert(isNotEmpty === true);

var arr3 = [2, 4, 6];
var isTwo;
//write  an if statement below that checks
//if the first item in the array equals
//the value 2
//isTwo should be true

console.assert(isTwo === true);

var person1 = { name: "John", age: 24 };
var isJohn;
//write an if statement below that checks
//if the name equals the string "John"
//inside the object of person1
//isJohn should be true

console.assert(isJohn === true);

var person2 = { name: "Cindy", age: 27 };
var isNotJohn;
//write an if statement below that checks
//if the name does not equal the string "John"
//inside the object of person2
//isNotJohn should be true

console.assert(isNotJohn === true);

var person3 = { name: "Steve", age: 21 };
var isOverTwentyOne;
//write an if statement below that checks
//if the age is over 21 inside the object of person3
//isNotJohn should be true

console.assert(isOverTwentyOne === true);


var arr1 = [1, 2, 3];
// set o1 to the first item in the array arr1
var o1;

console.assert(o1 === 1);

var arr2 = [2, 4, 6];
// set o2 to the last item in the array arr2
var o2;

console.assert(o2 === 6);

var arr3 = ["apple", "orange", "pear"];
// add the value "banana" to the end of the array arr3

console.assert(
  JSON.stringify(arr3) === JSON.stringify(["apple", "orange", "pear", "banana"])
);

var arr4 = [
  [11, 22, 33],
  [11, 23],
];
// set o4 to the second nested array in arr4 "[11, 23]"
var o4;

console.assert(JSON.stringify(o4) === JSON.stringify([11, 23]));

var obj1 = { firstName: "John", lastName: "Daly" };
// add a key value pair of "age: 24" to the object obj1 without
//changing the code above

console.assert(
  JSON.stringify(obj1) === { firstName: "John", lastName: "Daly", age: 24 }
);

var obj2 = { firstName: "John", lastName: "Daly" };
// access the value "John" in the object obj2 and set it to o5
var o5;

console.assert(o5 === "John");

var obj3 = {
  make: "Toyota",
  model: "Prius",
  year: 2019,
  colors: { color1: "Red", color2: "Green", color3: "Silver" },
};
// access the value "Silver" in the object obj3 and set it to o6
var o6;

console.assert(o5 === "Silver");


// IGNORE THIS CODE
var arraysMatch = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false
  }
	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
      return false
    }
	}
	// Otherwise, return true
	return true
}

var objectsMatch = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
//IGNORE CODE ABOVE :)

var o1;
//make a loop below that sets "o1" to an array of
//numbers 1-5

console.assert(arraysMatch(o1, [1, 2, 3, 4, 5]));

var arr1 = [1, 2, 3];
var o2 = 0;
//make a for loop below that increments "o2" based on
//how many items there are in "arr1"

console.assert(o2 === 3)

var arr2 = [4, 5, 6];
//make a for loop  below that injects the numbers 7, 8 and 9
//to the end of the array arr2

console.assert(arraysMatch(arr2, [4, 5, 6, 7, 8, 9]));

var obj1 = { key1: 1, key2: 2, key3: 3 }
//make a for loop below that accesses each key in obj1
//and increments their value by 1

console.assert(objectsMatch(obj1, { key1: 2, key2: 3, key3: 4 }));

var arr3 = ["a", "a", "b", "a", "c", "c"];
var obj2 = {};

//make a for loop below that inserts key value pairs
//in obj2 where each key represents how many pairs
//there are in arr3
//expected obj2 = {a: 3, b: 1, c: 2}

console.assert(objectsMatch(obj2, { a: 3, b: 1, c: 2 }));

var arr = [1]
var firstIsOne = null
// set firstIsOne to true if the first item is 1
console.assert(firstIsOne === true)

var obj = {
    count: 1
}
// increment count by 1 do not directly change obj above
console.assert(obj.count === 2)

var obj2 = {
    count: 1
}
// decrease count by 1 do not directly change obj above
console.assert(obj2.count === 2)

var person = {
    first: 'Jane',
    last: 'doe',
    isCool: false
}
// check that first name is larger than last name
// don't change the null to the value true
// use the object
var isFirstLarger = null
console.assert(isFirstLarger === true)

// set person isCool to true
// do not manually change the object above
console.assert(person.isCool === true)


var arr1 = [1,2,3]
var arr2 = [1,2,3,4]

// // make a function hasOne that checks if an array has 1
// // and returns true
// // otherwise false

// console.assert(hasOne(arr1) === true)

// // make a function multiply that takes an array and returns each item multiplied by two
// // input: [1,2,3,4]
// // output: [2,4,6,8]
// console.assert(JSON.stringify(multiply(arr2)) === JSON.stringify([2,4,6,8]))

// // make a function noOnes that takes an array and
// // removes all instances of the number 1

// console.assert(JSON.stringify(noOnes(arr2)) === JSON.stringify([2,3,4]))

// // make a function arrayToString that takes an array and converts to string

// console.assert(arrayToString(['1', '2', '3']) === '123')


// arr1 = [];
// arr2 = [1, 2, 3];
// //make a function below called "isEmpty" that checks if an array
// //is empty. if it is, then it returns true
// //if it is not, then it returns false

// console.assert(isEmpty(arr1) === true);
// console.assert(isEmpty(arr2) === false);

// arr3 = [1, 2, 3];
// arr4 = [2, 3, 4];
// //make a function below called "firstIsOne" that checks if the first
// //item in the array is equal to the value 1
// //if it is, then it returns true
// //if it is not then it returns the number

// console.assert(firstIsOne(arr3) === true);
// console.assert(firstIsOne(arr4) === 2);

// arr5 = [2, 7, 9];
// arr6 = [5, 8, 4, 2];
// //make a function below called "divByThree" that checks if the last
// //item in the array is divisible by 3
// //if it is, then it returns true
// //if it is not then it false

// console.assert(divByThree(arr5) === true);
// console.assert(divByThree(arr6) === false);

// obj1 = { name: "Tom" };
// obj2 = { name: "Tim" };
// //make a function below called "isTom" that takes in an object
// //as a parameter and checks if the name is "Tom"
// //if it is then it returns true
// //if it is not then it returns false

// console.assert(isTom(obj1) === true);
// console.assert(isTom(obj2) === false);

// obj3 = { name: "Jane", age: 22 };
// obj4 = { name: "Stan", age: 19 };
// //make a function below called "overTwentyOne" that takes in an object
// //as a parameter and checks if the age is over 21
// //if it is, then it returns true
// //if it not, then it returns false

// console.assert(overTwentyOne(obj3) === true);
// console.assert(overTwentyOne(obj4) === false);

// obj5 = { todo: "buy groceries", isCompleted: false };
// obj6 = { todo: "walk the dog", isCompleted: true };
// //make a function below called "isDone" that takes in an object
// //and returns if the todo is completed or not (true or false)

// console.assert(isDone(obj5) === false);
// console.assert(isDone(obj6) === true);

// obj7 = { id: 1, cart: ["apples", "oranges", "pears"] };
// obj8 = { id: 2, cart: ["carrots", "lettuce", "celery"] };
// //make a function below called "firstItem" that take in an object and
// //returns the first item in the cart

// console.assert(firstItem(obj5) === "apples");
// console.assert(firstItem(obj6) === "carrots");

// todos = [
//   { title: "clean the house", isCompleted: false },
//   { title: "review functions", isCompleted: true },
//   { title: "fix the wifi", isCompleted: true },
//   { title: "cook dinner", isCompleted: false },
//   { title: "fold laundry", isCompleted: true },
// ];
// //make a function below called "todoCount" that takes in an array
// //of objects and returns the number of todos not yet completed
// //hint: for loop

// console.assert(todoCount(todos) === 2);
