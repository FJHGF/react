//console.log("chapter 04");
//1. 변수
let age; // 변수 선언
// console.log(age); // undefined

age = 27; // 변수 초기화
// console.log(age);

age = 30; // 변수 재할당
// console.log(age);

//2, 상수 -> 재할당 불가
// 변수 선언 동시에 초기화해야 함 > 변경을 못하도록 초기화
const birth = "1995-10-01"; // 상수 선언
// birth = "123"; // 오류가 남

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
// 3-2. 숫자로 시작할 수 없다.
// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let a = 1; // -> salesCount
let b = 1; // -> refundCount
let c = a - b; // -> totalSalesCount = salesCount - refundCount
// 누구도 알아 볼 수 없도록하면 안됌
