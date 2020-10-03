// Only works on sorted arrays
// Divide and conquer algorithm
// Time: O(log n)
// Space: O(1)

// Iterative
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === array[mid]) {
      return array[mid];
    } else if (target > array[mid]) {
      start = mid + 1;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      return false;
    }
  }
  return false
}

// Recursive
// Create a new array to not edit original
// setup initial values
// setup base case, null case
// setup recursive case

// test = [10, 20, 30, 40]
function binarySearch(arr, target, min, max) {
  let subArray = arr.slice();
  if (min === undefined) { min = 0 }
  if (max === undefined) { max = arr.length - 1 }

  let mid = Math.floor(((max - min) / 2) + min);

  if (max <= min && subArray[mid] !== target) return null;
  else if (subArray[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearch(subArray, target, mid + 1, max)
  else return binarySearch(subArray, target, min, mid -1)
}

module.exports = binarySearch;