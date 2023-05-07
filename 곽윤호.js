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

  integerCheck(numberValue)
  const first = innerOne(numberValue);
  const second = innerTwo(first);
  const third = innerThree(second);
  const fourth = innerFour(third);
  return fourth
}

const result = exampleOne(10);
console.log(result);

// Q1. 콜백 지옥으로 처리하기
// Q2. Promise로 처리하기
// Q3. async, await로 처리하기
// Q4. 부모 함수를 클래스로 만들고, 인스턴스에 '동적'으로 4개의 inner함수를 메서드로 추가해보기