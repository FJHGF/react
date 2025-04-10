// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getDate() {
  // return {
  //   name: "박지성",
  //   id: "winter",
  // };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "박지성",
        id: "winter",
      });
    }, 2000);
  });
}

// console.log(getDate());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printDate() {
  // getDate().then((result) => {
  //   console.log(result);
  // });
  const data = await getDate();
  console.log(data);
}

printDate();
