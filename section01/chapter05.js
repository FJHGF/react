// 1. Number Type
let num1 = 28;
let num2 = 1.5;
let num3 = -30;

/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
*/

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 사칙연산을 실패했을 때
//console.log(1 * "Hello"); // NaN

// 2. String Type
let myName = "박지성"; // "" 없으면 변수명으로 인식
let myLocation = "목동";
let introduce = myName + myLocation;
// console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터럴 문법
//console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//  4. Null Type(아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
//console.log(none);

// null vs undefined
// null은 개발자가 의도적으로 비어있음을 표현하기 위해 사용
// undefined는 변수가 선언되었지만 값이 할당되지 않은 상태를 나타냄
// null은 명시적으로 비어있음을 나타내는 값
// undefined는 변수에 값이 할당되지 않았음을 나타내는 상태
