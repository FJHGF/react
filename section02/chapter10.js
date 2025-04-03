// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 > 내장 함수
// console.log(date1);

let date2 = new Date("1999-01-01/10:10:10"); // 1999.01.01, 1999/01/01
// console.log(date2);

let date3 = new Date(1999, 1, 30, 23, 59, 59); // 1999.01.01, 1999/01/01
// console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지 의미하는 숫자값
// 협정세계시 UTC : 모든 나라가 사용하는 시간
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1, date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작함
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, month, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(6);
date1.setDate(30);
date1.setHours(25);
date1.setMinutes(59);
date1.setSeconds(33);
// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleString());
