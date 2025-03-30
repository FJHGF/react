// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2; //  +, - 보다 우선순위가 높음
let num4 = 3 / 2; //  +, - 보다 우선순위가 높음
let num5 = 3 % 2; //  +, - 보다 우선순위가 높음

let num6 = 1 + 2 * 10; //23
//console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
//num7 = num7 + 20;
num7 += 20;
//console.log(num7);
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // 다음 라인에서 증가가 됌 // 후위 연산
++num8; // 해당 라인에서 증가가 됌 // 전위 연산
//console.log(num8);
num8--;
--num8;

// 5. 논리연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 값과 자료형을 비교
let comp2 = 1 == "1"; // 값만 비교
let comp3 = 1 !== 2;
console.log(comp1, comp2, comp3);

let comp4 = 2 > 1; //true
let comp5 = 2 < 1; //false
console.log(comp4, comp5);

let comp6 = 2 >= 2; //true
let comp7 = 2 <= 2; //true
console.log(comp6, comp7);
