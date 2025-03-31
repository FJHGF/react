// for
for (/*초기식; 조건식; 증감식 */ let idx = 0; idx < 5; idx++) {
  // console.log("반복");
  if (idx % 2) {
    continue;
  }
  console.log(idx);
  if (idx >= 3) {
    break;
  }
}
