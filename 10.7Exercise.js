// *************************
// Maps and Sets Exercise
// *************************

// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]);
// returns: {1,2,3,4}

// ================================
// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
// returns: {'ref'}

// ================================
// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// 0:{Array(3) => true}
// 1:{Array(3) => false}

// ================================
// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// hasDuplicate([1, 3, 2, 1]); // true
// hasDuplicate([1, 5, -1, 4]); // false

// ================================
// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

// SPRINGBOARD SOLUTION: (never would have gotten this)
function isVowel(char) {
	return 'aeiou'.includes(char);
} // returns true of false if character is a vowel.

function vowelCount(str) {
	const vowelMap = new Map(); // creates a new empty Map
	let lowerStr = str.toLowerCase(); // converts string to lowercase
	for (let char of lowerStr) {
		// iterates through characters in lowerStr
		if (isVowel(char)) {// if 'isVowel' is true for character:
			if (vowelMap.has(char)) {// and if the Map already contains that character:
				vowelMap.set(char, vowelMap.get(char) + 1); // add 1 to count.
			} else {// otherwise
				vowelMap.set(char, 1); // add character to Map and set value to 1.
			}
		}
	}
	return vowelMap;
}
