const promiseFun = (myData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve(`Yes data is fine, ${myData}`);
      } else {
        reject(new Error("there is an error"));
      }
    }, 1000);
  });
};

const myFun = async () => {
  const ret = await promiseFun("Nitik");
  console.log("ret", ret);
};
myFun();
