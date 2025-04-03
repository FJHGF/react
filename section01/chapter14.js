// 스코프 > 범위
// 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
function funcA() {
  let a = 1; // a는 함수 내부가 a 접근 가능 영역
}

//console.log(a); // a 접근 불가능 영역

// -> 전역(전체 영역)스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1; // 전역 스코프
function funcB() {
  let b = 2; // 지역 스코프 : 에러 b is not defined
  console.log(a);
  function funcC() {} // 지역 스코프, if문, for문에서 함수 선언 못함
}
funcB();
//console.log(b);

if (true) {
  let c = 1; //지역 스코프
}
//console.log(c);

for (let i = 0; i < 10; i++) {
  let d = 1; //지역 스코프
}
//console.log(d);
//funcC();
