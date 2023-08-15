first();
var var1 = "hello";

function first() {
  console.log("The var1 is:", var1);
}

// 1. this
// 2. var var1 = undefined;
// 3. function first() ... var = undefined
// 4. console.log("The var1 is: ", undefined);
// 5. var1 = "hello";
