//scenario-1
//Anonymous function

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(5, 7));

// const sum = (a, b) => a + b;

// console.log(sum(8, 7));

//scenario-2
//Named function with 2 parameter

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 6));

// const sum = (a, b) => a + b;

// console.log(sum(8, 6));

//scenario-3
//Named function with 1 parameter

// function check(num) {
//   return num % 2 === 0;
// }
// const checkVal = check(10) ? "Even" : "Odd";
// console.log(checkVal);

// const check = (num) => num % 2 === 0;

// const checkVal = check(11) ? "Even" : "Odd";
// console.log(checkVal);

//scenario-4

// function random() {
//   return Math.random();
// }

// console.log(random());

// const random = () => Math.random();

// console.log(random());

//scenario-5
document.body.addEventListener("click", function () {
  console.log("clicked");
});

document.body.addEventListener("click", () => {
  console.log("clicked");
});
