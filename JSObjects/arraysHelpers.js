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
  {id: 1, make: 'Honda', model: 'Accord Ex', year: '1997', is4WD: false},
  {id: 2, make: 'Toyota', model: 'Highlander', year: '2003', is4WD: true},
  {id: 3, make: 'BMW', model: '328 Xi', year: '2010', is4WD: true}
];

let sportCarDriver = {
  vehicleId: 3, name: 'Vlad'
};

let models = vehicles.map(car => car.model);
let make = vehicles.map(vehicle => vehicle.make);
let year = vehicles.map(anything => anything.year);

console.log('Models:');
console.log(models + '\n');

console.log('Make:');
console.log(make + '\n');

console.log('Year:');
console.log(year + '\n');

// Filter returns all elements matching criteria
console.log('filteredViehicles array:')
let filteredVehicles = vehicles.filter(vehicle => vehicle.is4WD == false);
console.log(filteredVehicles);

//Find returns only first element matching criteria

console.log('Find section ============ \n ');

let vehicle = vehicles.find(vehicle => vehicle.is4WD === true);

console.log(vehicle);

//Find sports car driver matching vehicle IDs

let car = vehicles.find(vehicle => vehicle.id === sportCarDriver.vehicleId);
console.log('Car is: ')
console.log(car);

// Every and Some, if every element matches condition it returnes true
// if some elements match conditions it return true.

let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === true);
console.log(`All vehicles 4 WD? ${areAll4WD} \n`);


let areSome4WD = vehicles.some(vehicle => vehicle.is4WD === true);
console.log(`Some vehicles 4 WD? ${areSome4WD} \n`);

//Reduce - see https://www.w3schools.com/jsref/jsref_reduce.asp

let numbers = [1,3,5,7,9];

let sumOfNumbers = numbers.reduce((total, element) => total + element);

console.log(`Total of numbers is: ${sumOfNumbers}`);
