//Truthy(참 같은 값), Falsy(거짓 같은 값)

// 1. Falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  //   console.log("falsy");
}
// 2. Truthy
// Falsy를 제외한 모든 값
let t1 = "hello";
let t2 = 124;
let t3 = [];
let t4 = {};
let t5 = () => {};
if (t4) {
  //   console.log("Truthy");
}

// 3. 활용
function printName(person) {
  //if (person === undefined || person === null) {
  if (!person) {
    // 거짓인 조건을 넣는것임
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "박지성" };
//let person;
//let person = null;
printName(person);
