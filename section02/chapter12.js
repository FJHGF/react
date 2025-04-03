//
// function task(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     // console.log(sum);
//     callback(sum);
//   }, 3000);
// }
// task(1, 2, (value) => {
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 2000);
}

function cooldouwnFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  cooldouwnFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
