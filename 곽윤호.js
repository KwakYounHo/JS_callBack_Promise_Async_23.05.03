//? Q2 =============================================================================
function exampleOne(data, callback) {
  let result;
  new Promise((resolve, reject)=>{
    if (Number.isInteger(data)===true) {
      return resolve(data);
    } else {
      reject('매개변수는 정수타입이어야 합니다.');
    }
  })
    .then(data => {
      return data + 1;
    })
    .then(data => {
      return data + 2;
    })
    .then(data => {
      return data + 3;
    })
    .then(data => {
      return data + 4;
    })
    .then(data => {
      callback(data)
    })
}

exampleOne(10,data=>console.log(data));
//? Q2 =============================================================================