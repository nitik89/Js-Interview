// const value = { val: 20 };

// const mul = (x = { ...value }) => {
//   console.log((x.number *= 20));
// };

// mul(); //20
// mul(); //20
// mul(value); //20
// mul(value); //40

// const a = { b: 20 };
// const d = a;
// d.b = 40;
// console.log(a);
// console.log(d);

const test = ({ ...obj }) => {
  obj.b = 90;
};
const a = { b: 20 };
test(a);
console.log(a);
