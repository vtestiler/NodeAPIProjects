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
