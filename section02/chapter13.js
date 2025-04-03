// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장 객체
// 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등

//대기(Pending) -> (resolve -> )성공(Fullfilled), (reject -> ) 실패(Rejected)

const promise1 = new Promise(() => {
  // 비동기 작업 = executer
  setTimeout(() => {
    // console.log("안녕");
  }, 2000);
});
// console.log(promise1);

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("안녕");
    // resolve(); // 성공 성황을 만듬
    // resolve("안녕");
    // reject("err"); // 실패하게 된 상황 만듬
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const num = 10;
    const num = null;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num 숫자 아님");
    }
  }, 2000);
});

// setTimeout(() => {
//   // console.log(promise2);
//   console.log(promise3);
// }, 2000);

// then 메서드
// 프로미스 체이닝
promise3
  .then((value) => {
    // console.log(value);
  })
  .catch((error) => {
    // console.log(error);
  });

// promise3.catch((error) => {
//   console.log(error);
// });

function add10(num) {
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num 숫자 아님");
      }
    }, 2000);
  });
  return promise3;
}

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   // newP.then((result) => {
//   //   console.log(result);
//   // });
//   return newP; // 새로운 프로미스를 반환
// }).then((result) => {
//   console.log(result);
// });

// 간결한 버전
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 새로운 프로미스를 반환
  })
  .then((result) => {
    console.log(result);
    // return add10(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
