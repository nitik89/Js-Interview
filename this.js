// const user = {
//   name: "Nitik",
//   getName: () => {
//     console.log(this.name); //undef
//   },
//   getUserName: function () {
//     console.log(this.name); //Nitik
//   },
// };
// user.getName(), user.getUserName();

// const user = {
//   name: "Nitik",
//   getName: () => {
//     console.log(this.name); //undef
//   },
//   newObj: {
//     name: "Manik",
//     getdetail() {
//       console.log(this);
//     },
//   },
// };
// user.newObj.getdetail();

// function makeUser() {
//   return (myUser = {
//     name: "John",
//     ref: this,
//     //-> to fix this ref:(){ return this}
//   });
// }
// let user = makeUser();
// console.log(user.ref.myUser.name);

function myFun() {
  return {
    name: "John",
    ref: this,
  };
}
const user = {
  name: "John",
  ref: this,
};
console.log(myFun().ref);
console.log(user.ref);

// const user = {
//   name: "Nitik",
//   logMessage() {
//     console.log(this.name);
//   },
// };
// setTimeout(user.logMessage, 1000); //this will be as callback so its parent will be window nothing will be printed

// setTimeout(function () {
//   user.logMessage();
// }, 1000); //this will log the name wrapping it inside the function does it

//making the calculator

// let calculator = {
//   read() {
//     this.a = +prompt("a=", 0);
//     this.b = +prompt("b=", 0);
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// function getAns() {
//   return (user = {
//     name: "Nitik",
//     getName: () => {
//       console.log(this.data); //undef
//     },

//     getdetail() {
//       console.log(this);
//     },
//   });
// }

// getAns().getName();
// getAns().getdetail();

// function getAns() {
//   return (user = {
//     name: "Nitik",
//     getName: () => {
//       console.log(this.user.name); //undef
//     },

//     getdetail() {
//       console.log(this.name);
//     },
//   });
// }
// getAns().getName(), getAns().getdetail();
