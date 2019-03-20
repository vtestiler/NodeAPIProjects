let obj ={
  num: 10
}

let addToThis = function (a, b, c){
  //'this has no context
  return (a + b + c) * this.num;
};

// call binds the function to the first object passed in.
//Parameters are passed in subsequesnt values

console.log('Calling addToThis function without object \n');

console.log(addToThis(1,2,3) + '\n');


console.log('Calling addToThis function with object \n');

console.log(addToThis.call(obj, 1, 2, 3) + '\n');


//Another example

let person1 = {
  firstName: 'Vladimir',
  lastName: 'Testiler'
};

let person2 = {
  firstName: 'Jonathan',
  lastName: 'Shlager'
};

function Greeting1 (greeting){

  console.log(`${this.firstName} ${this.lastName} ${greeting} \n`)
};

console.log('Calling Greeting1 function without object \n');
Greeting1('Good Morning!!! \n');

console.log('Calling Greetin1g function with object1 \n');

Greeting1.call(person1, 'Good Morning!!! \n');

console.log('Calling Greeting function with object2 \n');

Greeting1.call(person2, 'Good Night!!! \n');

// location of the the parameter can be switched around. See Greeting2 function

function Greeting2 (greeting){

  console.log(`${greeting} ${this.firstName} ${this.lastName}  \n`)
};

console.log('Calling Greeting2 function without object \n');
Greeting2('Good Morning!!!');

console.log('Calling Greeting2 function with object1 \n');

Greeting2.call(person1, 'Good Morning!!! ');

console.log('Calling Greeting2 function with object2 \n');

Greeting2.call(person2, 'What\'s up!!! \n'); // \ is the escape caracter.
