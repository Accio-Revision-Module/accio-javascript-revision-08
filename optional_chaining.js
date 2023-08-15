const person = {
  name: "Jayesh",
  address: {
    city: "Delhi",
    country: "India",
  },
};

// if (person) {
//   if (person.address) {
//     console.log("City of the person is: ", person.address.city);
//   }
// }

// Optional chaining
console.log("City of the person is: ", person?.address?.city);
