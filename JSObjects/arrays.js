// Arrays are declared with square brackets.

 let grades = [5, 2, 3, 4, 1];
 //console.log(`My first grade is ${grades[2]}.`);

console.log(`Grades array is ${grades}. \n`);
console.log(`My Array contains ${grades.length} elements . \n`);


// Arrays can have mixes elements

let myStuff = ['Hat', 'Shirt', true, 20];
console.log(`MyStuff Array is ${myStuff}. \n`);
console.log(`First element of myStuff is ${myStuff[0]}. \n`);
console.log('-------------------------------------- \n');


// Array Methods
// POP pops last element out of the array and returns it

console.log('Array methods Section \n');
console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('-------------------------------------- \n');
console.log(`My Grades Array is ${grades}. \n` );
console.log('--------------------------------------');
console.log('-------------------------------------- \n');

console.log('POP Section \n');

// grades.pop();
console.log(`Poped element is ${grades.pop()}. \n`);
console.log(`Grades array after pop methos is ${grades} \n`);

//PUSH pushes elements into Array
console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('-------------------------------------- \n');

console.log('Push Section \n');


console.log('--------------------------------------');
console.log('-------------------------------------- \n');

grades.push(6);
console.log(`Grades array after push grades.push(6) methos is ${grades} \n`);

console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('--------------------------------------');

grades.push(10, 20, 30);
console.log(`Grades array after push grades.push(10, 20, 30) methos is ${grades}`);

// SHIFT and UNSHIFT
// moves first element out of the array and returns it's value

console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('-------------------------------------- \n');

console.log('Shift and Unshift Section. \n');

console.log(`Grades array is ${grades}. \n`);
let shiftedElement = grades.shift();
console.log(`Shifted element is ${shiftedElement}. \n \n`);
console.log(`Grades array now is ${grades}. \n`);
console.log(`MyStuff array now is ${myStuff}. \n`);

grades.unshift(myStuff[0]);
console.log(`Result of grades.unshift(myStuff[0]) is ${grades}. \n`);
grades.unshift(myStuff[1]);
console.log(`Result of grades.unshift(myStuff[1]) is ${grades}. \n`);
grades.unshift(myStuff[2]);
console.log(`Result of grades.unshift(myStuff[2]) is ${grades}. \n`);
grades.unshift(myStuff[3]);
console.log(`Result of grades.unshift(myStuff[3]) is ${grades}. \n`);

console.log(`Grades array element 0 is ${grades[0]}. \n`);
console.log(`Grades array element 1 is ${grades[1]}. \n`);


// CONCAT

console.log('--------------------------------------');
console.log('--------------------------------------');
console.log('-------------------------------------- \n');

console.log('Concat Section. \n');
let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let array3 = [9,10,11,12];


console.log(`Array1 is ${array1}. \n`);
console.log(`Array2 is ${array2}. \n`);
console.log(`Array3 is ${array3}. \n`);

console.log(`Result of array1.concat(array2): \n`);
console.log(array1.concat(array2) + '\n \n');
console.log(`Array1 is ${array1}. \n`);
console.log(`Result of array1.concat(array2, array3): \n`);
console.log(array1.concat(array2, array3) + '\n \n');

console.log(`Array1 is ${array1}. \n`);
console.log(`Array2 is ${array2}. \n`);
console.log(`Array3 is ${array3}. \n`);



//console.log(grades.concat(myStuff, grades, myStuff));

// REVERSE reverses array order
console.log('//REVERSE Section.')
console.log('--------------------------------------');
console.log('--------------------------------------');
console.log(`Grades array now is ${grades}. \n`);
console.log(`MyStuff array now is ${myStuff}. \n`);
console.log(`Grades array element 0 is ${grades[0]}. \n`);
console.log(`Grades array element 1 is ${grades[1]}. \n`);

console.log('--------------------------------------');
console.log('-------------------------------------- \n');

console.log(`Result of grades.reverse(): \n \n ${grades.reverse()}. \n`);

console.log('--------------------------------------');
console.log('--------------------------------------');

// SORT
console.log('//SORT Section. \n');
let statesArray = ['Missouri', 'Arkansas', 'Arizona', 'Mississipi', 'Alabama', 'California', 'Massachussets'];
console.log(`States Array: ${statesArray} \n`);
let sortedStatesArray = statesArray.sort();
console.log(`Sorted States Array: ${sortedStatesArray} \n`);
console.log(`Note States Array Also Sorted Now: ${statesArray} \n`);
console.log(sortedStatesArray);

let numericArray =[233, 3, 83, 2399, 23, 5, 8];

let sortedNumericArray = numericArray.sort();

console.log('Sorted Numeric Array using numericArray.sort(): ');
console.log(sortedNumericArray);
// By default sort() function sorts values as strings.
// Because of this, the sort() method will produce incorrect result when
// sorting numbers.
//
// You can fix this by providing a compare function:
//function(a, b){return a - b} or (a, b) => a - b  per ES6 standard
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
//
// If the result is negative a is sorted before b.
//
// If the result is positive b is sorted before a.
//
// If the result is 0 no changes is done with the sort order of the two values.

let sortedNumericArray2 = numericArray.sort((a, b) => a - b );

console.log('Sorted Numeric Array using numericArray.sort((a,b) => a-b): ');
console.log(sortedNumericArray2 );
// SLICE
// The slice() method slices out a piece of an array into a new array.

//The slice() method creates a new array. It does not remove any
//elements from the source array.

//The slice() method can take two arguments like slice(1, 3)
//The method then selects elements from the start argument,
//and up to (but not including) the end argument.

console.log('sortedStatesArray:');
console.log(sortedStatesArray);
let slicedStates = sortedStatesArray.slice(2, 5);

console.log('slicedStates after sortedStatesArray.slice(2, 5): \n');
console.log(slicedStates);

slicedStates = sortedStatesArray.slice(2); // If second argument omitted
// it selects from first argument's element until the end of the array

console.log('slicedStates after sortedStatesArray.slice(2): \n');
console.log(slicedStates);
