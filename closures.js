// function myFun() {
//   var Name = "Nitik";
//   function inner() {
//     console.log("Hey", Name);
//   }
//   return inner;
// }
// const myfun = myFun();
// myfun();

// function myFun() {
//   for (var i = 0; i < 3; i++) {
//     function fun(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     fun(i);
//   }
// }
// myFun();
// const hello = "Hello";
// function myFun() {
//   return function fun() {
//     console.log(hello);
//   };
// }
// myFun()();
// function once(func, context) {
//   let ran;
//   return function () {
//     if (func) {
//       ran = func.apply(context || this, arguments);
//     }
//     return ran;
//   };
// }

//Memorize polyfill
function myMemo(fn, context) {
  const res = {};
  return function (...args) {
    const argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      fn.call(context || this, ...args);
    } else {
      return res[argsCache];
    }
  };
}
const clumsyMemo = (num1, num2) => {
  for (let i = 1; i <= 100000; i++) {}
  return num1 * num2;
};

const mulFun = myMemo(clumsyMemo);
mulFun(2, 3);
