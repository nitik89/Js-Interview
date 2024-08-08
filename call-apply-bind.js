// var obj = { name: "Nitik" };

// function sayHello(age, role) {
//   return "Hello" + " " + this.name + " " + age + " " + role;
// }
// console.log(sayHello.call(obj, 24, "Software Enginer"));
// console.log(sayHello.apply(obj, [24, "Software Engineer"]));

// const bindFun = sayHello.bind(obj, 24, "Software Engineer");
// console.log(bindFun());

// const animals = [
//   { species: "Lion", name: "King" },
//   { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//   this.print = function () {
//     console.log(i + this.species + this.name);
//   };
//   this.print();
// }
// animals.map((animal, idx) => {
//   printAnimals.call(animal, idx);
// });
// const arr = ["a", "b"];
// const elements = [0, 1, 2];
// arr.push.apply(arr, elements); //to append into array
// console.log(arr);
// const arr = [12, 3, 4, 5, 33, 21];
// console.log(Math.max.apply(null, arr)); // to find max in an array

//polyfills

// let car1 = {
//   name: "Ferrari",
// };
// function getName(currency, price) {
//   console.log(this.name + currency + price);
// }

// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callabled");
//   }
//   context.fn = this;
//   context.fn(...args);
// };
// getName.myCall(car1, "Rs", 10000000);

// Function.prototype.myCall = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callabled");
//   }
//   if (!Array.isArray(args)) {
//     throw new TypeError("random");
//   }
//   context.fn = this;
//   context.fn(...args);
// };
// getName.myCall(car1, ["Rs", 10000000]);

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(this + "It's not callabled");
//   }
//   context.fn = this;
//   return function (...newArgs) {
//     return context.fn(...args);
//   };
// };
// const newFun = getName.bind(car1);
// newFun("Rs", 1000000);
