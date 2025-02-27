//this is a codealong from the OBJECTS lesson from Canvas

//Objects, are the same line as String, numbers, booleans, and arrays.
//Objects live within {}, and are most similar to arrays
//Very important to add commas
//an object does not have an index. instead each item are like properties.

const user = {
  firstName: "Petter",
  lastName: "Hansen",
  age: 34,
  hobbies: ["Skiing", "Rogging", "Reading"],
  address: { streetName: "Eplegården", streetNumber: 2, postalCode: 1334 },
  //We can make our own Methods inside objects.
  // use "this" to reference things inside the object
  //   fullName: function () {
  //     return `${this.firstName} ${this.lastName}`.toUpperCase();
  //   },
  //   addMiddleName: function (midName) {
  //     this.middleName = midName;
  //   },
};
//here we called the method we created inside objects
// console.log(user.fullName());

//to add something to an object, refer to it and =

user.middleName = "Trond";
console.log(user);

//There are tools in Object too:

console.log(Object.entries(user));

// console.log(
//   user.firstName,
//   user.lastName,
//   " bor i ",
//   user.address.streetName,
//   user.address.streetNumber
// );

//to change something in an object is easy, even though it is a constant.
// user.age = 36;
// user.hobbies.push("Fishing");
