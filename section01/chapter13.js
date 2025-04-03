// 1.콜백함수 > 나중에 실행함

function main(value) {
  //   console.log(value);
  //   console.log(1);
  //   value(); // value변수를 함수처럼 사용
  //   console.log("end");
}

function sub() {
  //   console.log("sub");
}

//main(2);
main(sub); // value 변수 값에 sub라는 함수가 들어감감
main(function sub2() {
  //   console.log("sub2");
});
main(() => {
  //   console.log("sub3");
});

// 2.콜백함수의 예제
// 아래 2개의 함수는 거의 흡사
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
    //console.log(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

//repeat(5);
repeat(5, function (idx) {
  console.log(idx);
});
repeat(5, function (idx) {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});

// repeatDouble(5);
