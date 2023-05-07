//? Q1 =============================================================================
function exampleOne(numberValue) {
  // sequence 1
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      return data;
    } else {
      return new Error('이 함수의 매개변수는 정수타입이어야 합니다.')
    }
  }
  // sequence 2
  function innerOne(one) {
    return one + 1;
  }
  // sequence 3
  function innerTwo(two) {
    return two + 2;
  }
  // sequence 4
  function innerThree(three) {
    return three + 3;
  }
  // sequence 5
  function innerFour(four) {
    return four + 4;
  }
  
  return innerFour(innerThree(innerTwo(innerOne(integerCheck(numberValue)))))
}

const result = exampleOne(10);
console.log(result);
//? Q1 =============================================================================