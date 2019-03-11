// Object literal function
// var truck = {
// make: 'Honda',
// color: 'Green',
// model: 'Titan',
//
// truckInfo: function(){
//   return ` ${this.make} ${this.model} ${this.color}`;
// }
// };
//
// console.log(truck.truckInfo());

// Object constructor function
function Car (make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.getFullCarName = function(){
    return `${this.make} ${this.model} ${this.year}`;
  };
}
let myCar = new Car('BMW', '328 Xi', 2010);
let myOldCar = new Car ('Honda', 'Accord Ex', 1997);
let myWifesCar = new Car ('Nissan', 'Murano SL', 2017);
let myWifesOldCar = new Car ('Toyota', 'Highlander ES', 2003);
let myFriendsOldCar = new Car ('Toyota', 'Camry', 2001);

console.log(myWifesOldCar.getFullCarName());
