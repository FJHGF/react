// 1. null 병합 연산자 = ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 30;

let var4 = var1 ?? var2; // var1이 대입됌
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // var2가 대입됌 // 첫번째 변수가 대입됌
//console.log(var4); // 10

let userName = "박지성";
let userNickName = "Winterlood";
let displayName = userName ?? userNickName; // userName이 대입됌
console.log(displayName); // 박지성

// 2. typeof 연사자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "안녕하세요";
let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝수"를 대입하고 , 홀수 -> "홀수"를 대입하라
let res = var8 % 2 === 0 ? "짝수" : "홀수"; // 짝수
console.log(res); // 짝수
