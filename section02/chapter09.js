// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
// 페이지 검색에 사용 많이함
let arr1 = [
  { name: "홍길동", hobby: "테니스" },
  { name: "이순신", hobby: "테니스" },
  { name: "호랑이", hobby: "독서" },
];

// const tennisPeople = arr1.filter((item) => {
// if (item.hobby === "테니스") return true;
// });

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

// 2. map
// 엄청 자주 사용함
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];

const mapResult2 = arr2.map((item, idx, arr) => {
  // console.log(idx, item);
  return item * 2;
});
//  console.log(mapResult2);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드

// let arr3 = ["b", "a", "c"];
let arr3 = [10, 40, 30];
// arr3.sort();

// 오름차순
arr3.sort((a, b) => {
  /*
  if (a > b) {
    // b가 a 앞으로 이동
    return 1;
  } else if (a < b) {
    // a가 b 앞으로 이동
    return -1;
  } else {
    // 두 값이 같다면 자리 이동 없도로 하기
    return 0;
  }
*/
  if (a > b) {
    // b가 a 앞으로 이동
    return -1;
  } else if (a < b) {
    // a가 b 앞으로 이동
    return 1;
  } else {
    // 두 값이 같다면 자리 이동 없도로 하기
    return 0;
  }
});

// console.log(arr3); //a,b,c
// console.log(arr3);

// 4. toSorted => 가장 최근에 추가된 함수
// 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();
// console.log(arr4); // c,a,b
// console.log(sorted); //a,b,c

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr5 = ["hi", "im", "winterlood"];
// const joined = arr5.join();
const joined = arr5.join("-"); // 구분자 변경 가능
console.log(joined);
