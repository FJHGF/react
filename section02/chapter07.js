// 배열 메서드
// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7); // 변환된 배열의 길이를 반환
// console.log(arr1);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 > 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
// console.log(arr2);
// console.log(popedItem);

// 3. shift > push, pop보다 느림 > 배열의 재배치가 일어나서서
// 배열의 맨 앞의 있는 요소를 제거 > 반환
let arr3 = [1, 2, 3];
const shifedItem = arr3.shift();
// console.log(shifedItem);
// console.log(arr3);

// 4. unshift > push, pop보다 느림 > 배열의 재배치가 일어나서서
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드 > 길이 반환
let arr4 = [1, 2, 3];
const unShifedItem = arr4.unshift(0);
// console.log(arr4);
// console.log(unShifedItem); //4

//5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced1 = arr5.slice(2, 5); // 마지막 위치 + 1
let sliced2 = arr5.slice(2);
// console.log(sliced1);
// console.log(sliced2); // sliced1과 동일한 결과
// console.log(arr5); // 원본 배열 그대로 남아있음

// 뒤에서부터
let sliced3 = arr5.slice(-1);
console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);

// console.log(concatedArr);
