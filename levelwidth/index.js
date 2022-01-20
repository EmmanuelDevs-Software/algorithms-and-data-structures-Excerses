// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [root, "stopper"]; // this array is using for the queue; 'stopper' is using for simulate the end of the row
  let counters = [0]; // array eventually return the final array;

  while (arr.length > 1) {  // great than 1 for confirm than is items inside the node. and prevent the infinite loop
    const node = arr.shift();

    if (node === "stopper") { 
      counters.push(0);
      arr.push("stopper");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++; //increment the last element inside counters and increment in 1
    }
  }
  console.log(counters)
  return counters;
}

module.exports = levelWidth;
