function fibonacci(num) {
  if (num < 2) {
    return num
  }
  
  let add = [0,1]

  for (i = 0; i < num -1; ++i){
    let total = add[0] + add[1]
    add = [add[1], total]
  }
  return add[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// find the number in the fibonacci series by the index input
