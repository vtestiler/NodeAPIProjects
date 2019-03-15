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
