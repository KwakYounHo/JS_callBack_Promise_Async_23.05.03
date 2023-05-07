//? Q4 =========================================================================
class exampleOne {
  constructor(NumberValue) {
    this._data = NumberValue;
  }
  set _data(value) {
    if (Number.isInteger(value)===true) {
      return this.data = value;
    } else {
      throw new Error('매개변수는 정수타입이어야 합니다.');
    }
  }
}
exampleOne.prototype.innerOne      = function() {return this.data + 1;};
exampleOne.prototype.innerTwo      = function() {return this.data + 2;};
exampleOne.prototype.innerThree    = function() {return this.data + 3;};
exampleOne.prototype.innerFour     = function() {return this.data + 4;};
exampleOne.prototype.functionBout1 = function() {
  let result;
  result = myClass.innerOne();
  result += 2;
  result += 3;
  result += 4;
  return result;
}
exampleOne.prototype.functionBout2 = function() {
  let result;
  result =  myClass.innerOne();
  result += myClass.innerTwo();
  result += myClass.innerThree();
  result += myClass.innerFour();
  return result
}

const myClass = new exampleOne(10);
console.log(myClass);
console.log(myClass.functionBout1());
console.log(myClass.functionBout2());
//? Q4 =========================================================================