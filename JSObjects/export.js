let myVariable = 1000;

let func1 = () => {
  console.log('Hello from func1 using ES5 way !!!');
}

function func2 (){
  console.log('Hello from func2 using ES5 way!!!')
};  // Enother way to declare function.

// module.exports.myVar = myVariable;
// module.exports.func1 = func1;
// module.exports.func2 = func2;

// it also can be done by exporting an object

module.exports = {
  myVar: myVariable,
  func1: func1,
  func2: func2
};
