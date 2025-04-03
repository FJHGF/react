// 순회
// 1. 배열 순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
}

// length : 길이 저장

let arr2 = [...arr, 4, 5, 6, 7];
for (let i = 0; i < arr2.length; i++) {
  //   console.log(arr2[i]);
}

// 2. for of 반복문
// 배열만 돌는 것
for (let item of arr) {
  //   console.log(item);
}

// 3. 객체 순회
let person = {
  name: "박지성",
  age: 27,
  hobby: "테니스",
};

// 1)Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  //   console.log(key, person[key], value);
}

// 2) Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  //   console.log(value);
}

// 3) for in
// 객체 순회
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
