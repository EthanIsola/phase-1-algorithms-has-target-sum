function hasTargetSum(array, target) {
  // Write your algorithm here
  let checker = false
  for (let i = 0; i < array.length; i++) {
    // look through the rest of the pile
    for (let j = i + 1; j < array.length; j++) {
      // check if it matches the first sock
      if (array[i] + array[j] == target) {
        checker = true;
      }
    }
  }
  return checker
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  take array and target number
  loop take each number
  add it to every other number
  if they add up to 25 return true
  otherwise return false by default
*/

/*
  Add written explanation of your solution here
  I made a variable thats set to false by default. then I made two loops
  that takes a number, then takes another number and adds them together.
  If the sum is equal to the target number, the variable becomes true, otherwise
  it remains unchanged.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
