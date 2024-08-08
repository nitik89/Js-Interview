//sum(2)(6)(1)'

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(sum(2)(6)(1));

function curry(fn) {
  return function curriedFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFn(...args, ...next);
      };
    }
  };
}
const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(4));
