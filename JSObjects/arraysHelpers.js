// Array Helper Methods

// Old Way of doing

let array = [20, 30, 40, 50];

console.log('FOR Loop =============');
for (var x=0; x < array.length; x++){
  console.log(array[x]);
}

console.log(' ================ \n');

// New Way

console.log('FOR EACH =======');
array.forEach(function(value){
console.log(value);
})
console.log(' ================ \n');

// Or with Fat arrow

console.log('FOR EACH Using Fat arrow ===============');
array.forEach(value => console.log(value));

console.log(' ================ \n');

console.log('SUM and Average ======== \n');

let grades = [99, 96, 92, 87, 74, 69];
console.log('Grades Array:');
console.log(grades);

console.log(' ========================= \n');



let sum = 0;
grades.forEach(value => sum += value);

console.log(`Sum = ${sum}. \n`);

let average = sum / grades.length;

console.log(`Average = ${average.toFixed(1)}. \n`);

// toFixed(x) converts number to number with x decimal points.

// Map Helper
// iterate through array and perform some operation on each element

array = [1, 2, 3, 4, 5];
console.log('array is:');
console.log(array + '\n');

let addOne = [];

array.forEach(value => addOne.push(value + 1));  // Using forEach method.

console.log('addOne array is:');
console.log(addOne + '\n');

// Using Map Helper

let addOneMap = array.map(value => value +1) ;

console.log('addOneMap array is:');
console.log(addOneMap + '\n');

let vehicles = [
  {make: 'Honda', model: 'Accord Ex', year: '1997', is4WD: false},
  {make: 'Toyota', model: 'Highlander', year: '2003', is4WD: true},
  {make: 'BMW', model: '328 Xi', year: '2010', is4WD: true}
];

let models = vehicles.map(car => car.model);
let make = vehicles.map(vehicle => vehicle.make);
let year = vehicles.map(anything => anything.year);

console.log('Models:');
console.log(models + '\n');

console.log('Make:');
console.log(make + '\n');

console.log('Year:');
console.log(year + '\n');

// Filter
console.log('filteredViehicles array:')
let filteredVehicles = vehicles.filter(vehicle => vehicle.is4WD == false);
console.log(filteredVehicles);
