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
  let level = [root];
  const result = [];

  while (level.length) {
    result.push(level.length);

    level = level.reduce((acc, node) => acc.concat(...node.children), []);
  }

  return result;
}

module.exports = levelWidth;


class Node {
  constructor(value) {

  }
}