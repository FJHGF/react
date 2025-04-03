// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
// 요소, 위치, 배열
arr1.forEach(function (item, index, arr) {
  // console.log(item, index, arr);
  // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach(function (item) {
  doubledArr.push(item * 2);
});
// console.log(doubledArr); // [2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3, 4, 5];
let isInclued = arr2.includes(3); // true
// console.log(isInclued);
isInclued = arr2.includes(6); // false
// console.log(isInclued);

//3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3, 4, 5];
let index = arr3.indexOf(3); // 2
// console.log(index);
index = arr3.indexOf(6); // -1
// console.log(index); // -1

// 첫번째 위치한 인덱스 반환
let arr4 = [2, 2, 2];
let index2 = arr4.indexOf(2); // 0
// console.log(index2); // 0

let objectArr = [
  { name: "kim", age: 20 },
  { name: "lee", age: 30 },
];

// 얕은 비교를 하기 때문에 못찾음
// console.log(objectArr.indexOf({ name: "kim", age: 20 })); // -1

// 4, findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr5 = [1, 2, 3];
const findedIndex = arr5.findIndex((item) => {
  //if (item === 2) return true;
  //if (item % 2 !== 2) return true;
});
const findedIndex2 = arr5.findIndex((item) => item === 999);
// console.log(findedIndex2); // 1
// console.log(findedIndex2); // 0
// console.log(findedIndex2); // -1

// 객체 타입에서 사용하기 좋음

// console.log(objectArr.findIndex((item) => item.name === "kim")); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 반환
const finded = objectArr.find((item) => item.name === "kim");
console.log(finded); // {name : "kimn", age :20}
