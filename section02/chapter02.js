// 단락 평가(short-circuit Evaluation)
// and 또는 or일 때, 첫번째 조건에서 평가 > 시간 감소
function returnFalse() {
  console.log("False 함수");
  return undefined;
  //return false;
}
function returnTrue() {
  console.log("True 함수");
  return 10;
  //  return true;
}

// console.log(returnFalse() && returnTrue()); //False 함수만 출력됌 //undefined
// console.log(returnTrue() && returnFalse()); //False, True 함수 출력됌 //undefined

// console.log(returnTrue() || returnFalse()); //True 함수만 출력됌 //10
// console.log(returnFalse() || returnTrue()); //False, True 함수 출력됌 //10

// 활용사례
function printName(person) {
  //   if (!person) {
  //     console.log("person에 값이 없음");
  //     return;
  //   }
  //   console.log(person.name);

  //   console.log(person && person.name);

  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //undefined
printName({ name: "박지성" });
//person = { name: "박지성" };
//printName(person);
