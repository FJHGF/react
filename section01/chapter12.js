function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
// console.log(varA); // 함수 자체도 변수에 담을 수 있음
// 변수를 함수처럼 사용 가능
varA();

// 1. 함수 표현식 -> 값으로 취급 -> 호이스팅 대상이 되지 않음
let varB = function funcB() {
  //   console.log("funcB");
};
varB(); // 값으로서 함수가 생성된거라 함수로는 사용할 수 없음

// 2. 익명함수
let varC = function () {
  //   console.log("funcC");
};
varC();

// 3. 화살표 함수
let varD = () => {
  return 1;
};

console.log(varD());

let varE = () => 1;
console.log(varE());

let varF = (value) => value + 1;
console.log(varF(10));

let varG = (value) => {
  console.log("vlaue" + value);
  return value + 1;
};
console.log(varG(10));
