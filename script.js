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

//Below is an object array

const people = [
  {
    name: "Tom",
    male: true,
    age: 32,
    hobbies: ["Cycling", "Fusbal", "pogo"],
  },
  {
    name: "Susan",
    male: false,
    age: 39,
    hobbies: ["crochet", "jogging", "dog training"],
  },
  {
    name: "Monica",
    male: false,
    age: 23,
    hobbies: ["guitar", "bmx", "downhill"],
  },
  {
    name: "Stephen",
    male: true,
    age: 58,
    hobbies: ["reading", "painting", "UFC"],
  },
  {
    name: "Maggie",
    male: false,
    age: 40,
    hobbies: ["Sitting", "existing", "sleeping"],
  },
  {
    name: "Hector",
    male: true,
    age: 36,
    hobbies: ["Conquering", "court intrigue", "betrayal"],
  },
  {
    name: "Philippe",
    male: true,
    age: 78,
    hobbies: ["padel", "tennis", "cooking"],
  },
  {
    name: "Angelica",
    male: false,
    age: 46,
    hobbies: ["gossiping", "complaining", "cruelty"],
  },
];

//Time for a challenge. add a summary to each object that says:
// "(NAME) is an X year old man/woman who likes Y, among other things."
// Y should be random.

for (let i = 0; i < people.length; i++) {
  //   console.log(people[i].name);
  //   console.log(people[i].hobbies[2]);
  const randomHobby = people[i].hobbies[Math.floor(Math.random() * 2)];
  people[i].summary = `${people[i].name} is a ${people[i].age} year old ${
    people[i].male ? "man" : "woman"
  } who likes ${randomHobby} among other things.`;
  console.log(people[i].summary);
}

console.log(people);
