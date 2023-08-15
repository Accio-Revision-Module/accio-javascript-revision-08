// Fundamental data types -> String, Number, Boolean, null, undefined
// Referenced data types -> Arrays, Objects, Functions

// Immutable data types
let name = "Jayesh";
let name2 = name;

name2 = "John";
console.log(name, name2);

// Mutable data types
let obj1 = {
  name: "Jayesh",
  age: 99,
};
let obj2 = obj1;
obj2.name = "John";
console.log(obj1, obj2);

function hello() {
  console.log("hello", obj1);
}
