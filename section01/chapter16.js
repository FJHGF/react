// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

//animal = { a: 1 }; // 아예 새로운 값을 넣는건 안됌
// 단, 변경은 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
// 동작을 정의할 때 사용
const person = {
  name: "박지성",
  // 메서드
  sayHi: function () {
    console.log("안녕!");
  },
  sayBye: () => {
    console.log("안녕!!!");
  },
  sayGood() {
    console.log("안녕!!!!!!");
  },
};

person.sayHi();
person.sayBye();
person.sayGood();
person["sayHi"]();
