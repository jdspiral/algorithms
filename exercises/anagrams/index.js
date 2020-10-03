// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Time complexity: O(nlogn).
// Space complexity: O(n).

// We are using split() method to create the characters array which will take O(n).
// Then sorting the array will take O(nlogn) and to form the string again with join()
// will take O(n), so Time complexity is O(n + nlogn + n) = O(nlogn).

// We are creating the character array from the given string which will take O(n + n),
// so Space complexity is O(n).

function anagrams(stringA, stringB) {
  function cleanAnagram(string) {
    return string // O(n) - space because of array
        .toLowerCase() // O(n)
        .replace(/[^\w]/g, '') // O(n)
        .split('') // O(n)
        .sort() // O(n log n)
        .join('');  // O(n)
  }
  return cleanAnagram(stringA) === cleanAnagram(stringB);
}

// Char map
function anagrams(strA, strB) {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false; // O(n + n)

  for (const char in charMapA) { // O(n)
   if (charMapA[char] !== charMapB[char]) {
     return false;
   }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap;
}




module.exports = anagrams;
