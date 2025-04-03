//1. Spread 연산자
// Spread : 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], 5, 6];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  //a: obj1.a,
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3, p4) {
  console.log(p1, p2, p3, p4);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
  //   console.log(rest);
}
funcB(...arr2);

function funcC(
  one,
  two,
  ...rest /*변수명은 상관업음, ad, ds...*/ /*four > 남은게 없어서 추가로 할 수 없음*/
) {
  console.log(one);
  console.log(rest);
}
funcC(...arr2);
