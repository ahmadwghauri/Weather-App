var addNum = (a,b) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (typeof a==='number' && typeof b==='number') {
        resolve(a+b);
      } else {
        reject('Both arguments should be numbers')
      }
    },2500);
  });
};

addNum(3,1).then((res)=>{
  console.log(res);
  return addNum(res,33);
}).then((res)=>{
  console.log('Should be: ',res);
}).catch((errorMessage)=>{
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     // resolve('Hey! It worked.');
//     reject('Unable to fulfill promise');
//   },2500)
// });
// somePromise.then((message) => {
//   console.log('Success: ', message);
// }, (errorMessage) => {
//   console.log('Error: ',errorMessage);
// })
