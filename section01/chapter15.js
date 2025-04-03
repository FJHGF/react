// 객체
// 어떤 사물이나 개념을 표한기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 > 대부분 사용

// 2. 객체 프로퍼티(객체 속성) > key : value
let person = {
  name: "박지성",
  nickName: "winterlood",
  age: 29,
  location: "목동",
  hobby: "테니스",
  extra: {},
  etc: function funcA() {},
  add: true,
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
// 존재하지 않는 프로퍼티는 undefined
let name = person.name;
console.log(name);

// 3.2
let age = person["age"];
console.log(age);

let p = person["like cat"];
console.log(p);

// 동적 접근법 가능
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.3 새로운 프로퍼티 추가
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

// 3.4 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초코릿";
console.log(person);

// 3.5 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3.6 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);
