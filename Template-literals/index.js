// //template literal
// let fname="Aniket";
// let lname="Kumar";
// // let fullname=fname+" "+lname;
// let fullname=`${fname}

//  ${lname}`
// console.log(fullname);

// let a = 10;
// let b = 20;
// console.log(`The sum of ${a} and ${b} ${a + b}`);

// let str = `"Time" and "Tide"
// 'Wait' for none`;
// console.log(str);

let heading = `Fruit List`;
let array = [
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Carrot",
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Carrot",
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Carrot",
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Carrot",
  "Mango",
  "Orange",
  "Apple",
  "Banana",
  "Carrot",
];
let html = `<h1>${heading}</h1><ul>`;

(function () {
  for (const list of array) {
    html = html + `<li>${list}</li>`;
  }
  html = html + `</ul>`;
  document.getElementById("list").innerHTML = html;
})();
