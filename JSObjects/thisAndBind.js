// In JavaScript , the thing called 'this' is the object
// that 'owns' the JavaScript code

let hotRod ={};

hotRod = {
sound: 'vroooom',
soundOff: function(){
  console.log(this.sound);
  }
};

hotRod.soundOff();

let soundFunction = hotRod.soundOff; //this loses its context

console.log('Calling soundFunction \n');

soundFunction();

//We can 'bind' 'this' to the object hotRod.
//This will gove soundFunction a 'this' context

let boundSoundFunction = soundFunction.bind(hotRod);


console.log('Calling boundSoundFunction \n');
boundSoundFunction();

// Another bind example

person1 = {
  name: 'Vlad'
};

person2 = {
  name: 'Dina'
};

function callName(){
  console.log(this.name);
}

console.log('Calling callName function without binding \n');
callName();

console.log('Calling callName function with binding to person1 object \n');

callName.bind(person1)();

console.log('Calling callName function with binding to person2 object \n');

callName.bind(person2)();

// one more bind example

let number = {
  x: 10,
  y: 20
};

let sum = function (){

  return this.x + this.y
};

console.log('Calling sum function without binding \n');
console.log(sum());

console.log('Calling sum function with binding to number object \n');
console.log(sum.bind(number)());
