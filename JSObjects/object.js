// //Object literal function
// var truck = {
// make: 'Honda',
// color: 'Green',
// model: 'Titan',
//
// truckInfo: function(){
//   return ` ${this.make} ${this.model} ${this.color}`;
// }
// };
// console.log(truck.make);
// console.log(truck.truckInfo());

// // Object constructor function
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.getFullCarName = function() {
//     return `${this.make} ${this.model} ${this.year}`;
//   };
// }
// let myCar = new Car('BMW', '328 Xi', 2010);
// let myOldCar = new Car('Honda', 'Accord Ex', 1997);
// let myWifesCar = new Car('Nissan', 'Murano SL', 2017);
// let myWifesOldCar = new Car('Toyota', 'Highlander ES', 2003);
// let myFriendsOldCar = new Car('Toyota', 'Camry', 2001);
//
// console.log(`Full Name Of My Wife's old Car is ${myWifesOldCar.getFullCarName()}
// . Model of My Old Car is ${myOldCar.make}.`);

// ES6 Enhanced Object Literal Syntax
function createCar (make, model, year){
  return {
    make,
    model,
    year,
    getFullCarName(){
      return `${make} ${model} ${year}`;
    }
  };
}
let myCar = new createCar ('BMW', '328 Xi', 2010);
let myWifesCar = new createCar ('Nissan', 'Murano SL', 2017);
console.log(` My Car is ''${myCar.getFullCarName()}'' and my wife's car is "${myWifesCar.getFullCarName()}".`);
