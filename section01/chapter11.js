function getArea(width, height) {
  function another() {
    // 중첩함수
    console.log("another");
  }
  another();
  let area = width * height;
  return area; // 반환값
  // 반환값 밑에 코드를 적으면 작동 안됌
}

let area1 = getArea(10, 20);
console.log(area1);

// 함수 위치가 어디여도 함수가 실행이 됌
// 호이스팅
// -> 끌어올리다
