// const person = {
//   name: "Bill Gates",
//   age: 17,
//   phone: "123456789",
// };
// let b = person.name;
// console.log(b);
// let c = person.age;
// console.log(c);

// const { phone, age } = person;
// console.log(phone, age);

// const { name, ...restObj } = person;

// console.log(restObj, name);

// const person = {
//       name: "Bill Gates",
//       age: 17,
//       phone: "123456789",
//     };

//     const {name,age,phone,dob,address} = person;

//     console.log(name,age,phone,dob,address);

//nested object

let user = {
  name: "Mike",
  locations: {
    region: "England",
    country: "United Kingdom",
  },
  aboutMe: {
    status: "Single",
    pet: "Dog",
  },
};

// const { name, locations:{country} } = user;
// console.log(country);

const {
  aboutMe: { status, pet },
  name,
} = user;

console.log(pet);
console.log(name);
