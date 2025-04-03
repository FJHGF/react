// const moduleData = require("./math");
// const { add, sub } = require("./math");

// console.log("안녕 nodejs");
// console.log(moduleData.add(1, 3));
// console.log(moduleData.sub(4, 3));
// console.log(moduleData);

// import mul from "./math.js"; // 함수명 변경해도 가능
// import { add, sub } from "./math.js"; // 함수명 고수
import mul, { add, sub } from "./math.js"; // 같은 파일은 한개로 해도 됌

// console.log(add(5, 4));
// console.log(sub(5, 4));
// console.log(mul(5, 4));

import randomColor from "randomcolor";
const color = randomColor();
console.log(color);
