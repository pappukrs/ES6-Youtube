const myArray = ["Hindi", "Eng", "Math", "Sci"];

// const x = myArray[0];
// const y = myArray[1];

// console.log(x, y); // "a" "b"

//With destructuring

// const [x, ,, y] = myArray;
// console.log(x, y);

// const [x, y,...rest] = myArray;
// console.log(x, y);
// console.log(rest);

// const foo = ["one", "two"];

//   const [red, yellow, green, blue] = foo;
//   console.log(red, yellow, green, blue);

// destructuring array & nested array & combine array into single array
let person = ["John", "Sandy", "Sam", ["Mike", "Max"], "Diego", "Paul"];
// empty comma is like skipping array index. I skipped "Sam"
const [a, b, , c, ...d] = person;

let friend = [d, "Tom", "Jerry"];
let newFriend = [...d, "Tom", "Jerry"];

//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);
// console.log(friend);
console.log(newFriend);
