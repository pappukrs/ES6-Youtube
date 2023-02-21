let user = {
  name: "Mike",
  friend: ["John", "Paul", "Jimmy"],
  locations: {
    region: "England",
    country: "United Kingdom",
  },
};

const {
  friend: [a,...b],
  locations: { country },
} = user;

console.log(a, b);
console.log(country);
