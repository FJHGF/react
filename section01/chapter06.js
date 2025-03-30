// Type Casting
// 1. 묵시적 형변환
// -> 자바스크립트 엔진이 자동을로 형변환하는것

let num = 10;
let str = "20";

const result = num + str;
//console.log(result); // 1020
// -> 숫자 + 문자 = 문자
// -> 자바스크립트 엔진이 숫자형을 문자형으로 형변환

// 2. 명시적 형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형변환을 명시
// -> 문자열 -> 숫자

let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(10 + strToNum2); //NaN

let strToNum3 = parseInt(str2); // 숫자로 시작한 문자여야 함
console.log(10 + strToNum3); // 20

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다."); // 20입니다.
