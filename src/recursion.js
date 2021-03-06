/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

  if (n < 0) return null;

  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }

};
//edge case for negative integers
//declare a result variable
//base case for n equalling 0, return 1
//the result becomes the current value of n multiplied by the product of all numbers between n and 1.
//return the result after it is filled




// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

  if (array.length === 0) return 0;
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + sum(array.slice(1));

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  if (array.length === 0) return 0;
  if (array.length === 1 && (!Array.isArray(array[0]))) {
    return array[0];
  } else {
  if (!Array.isArray(array[0])) {
      return (array[0] + arraySum(array.slice(1)));
    } else {
      return (arraySum(array[0]) + arraySum(array.slice(1)));
    }
  }

};

// 4. Check if a number is even.
var isEven = function(n) {

  n = Math.abs(n);
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n - 2);
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return ((n - 1) + sumBelow(n - 1));
  } else {
    return ((n + 1) + sumBelow(n + 1));
  }

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {

  var result = [];
  if (y - x === 0 || y - x === 1) {
    return [];
  } else if ((x > y) && x - y === 1 || x - y === 0) {
    return [];
  } else {
    if (x < y) {
      result.push(x + 1);
      return result.concat(range(x + 1, y));
    } else {
      result.push(x - 1);
      return result.concat(range(x - 1, y))
    }
  }

};
//declare a result array
//Base Case
//if y - x is 1 or 0
//return an empty array
//Recursive Case (there are numbers between x and y)
//if x is less than y
//put x + 1 into the result array
//return the result with anymore numbers between x + 1 and y with a recursive call of range




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    exp = 0 - exp;
    return 1 / (base * exponent(base, exp - 1));
  }

  if (exp % 2 === 0) {
    var halveThisExp = exponent(base, exp / 2)
    return  halveThisExp * halveThisExp;
  } else {
    return base * exponent(base, exp - 1);
  }

};
//base case
//if exponent is 0, the result is always 1
//recursive case
//return the base multiplied by the recursive call of (base, exp - 1)



// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

  if (n === 1) return true;
  if (n === 0 || (n > 1 && n < 2)) return false;
  return powerOfTwo(n / 2);

};
//edge case of n equalling 0
//base case
//if n equals 1, then its true (power of two)
//if number is between 1 and 2, then false (not power of two)
//recursive case
//return powerOfTwo with half of n

// 9. Write a function that reverses a string.
var reverse = function(string) {

  if (string.length === 0) return "";
  if (string.length === 1) {
    return string;
  }
  return string[string.length - 1] + reverse(string.substring(0, string.length - 1));

};
//edge case for empty string
//return empty string
//base case
//if the length of string is one letter
//return the string
//recusive case
//take the last letter out, then add the recursive call of reverse of the remaining letters




// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

  string = string.toLowerCase();
  if (string.length < 2) return true;
  if (string.charAt(0) === string.charAt(string.length - 1)) {
    return palindrome(string.substring(1, string.length - 1))
  }
  return false;

};
//edge case - lowercase the entire string before getting started
//base case
//returns true if the length of the string is less than 2
//recursive case
//checks the first and last letters of the string to see if they match
//if so, find out if the middle letters are a palindrome
  //if they don't, it's not a palindrome and return false




// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) return NaN;
  if (x < 0) {
    return -modulo(-x, y);
  }
  if (y < 0) {
    return modulo(x, -y);
  }
  if (y > x) {
    return x;
  }
  return modulo(x - y, y);

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (x === 0 || y === 0) {
    return 0;
  }

  if (y > x) {
    var newNum = y;
    y = x;
    x = newNum;
  }

  if (y < 0 && x > 0) {
    y = 0 - y;
    return -(x + multiply(x, y - 1));

  } else if (y < 0 && x < 0) {
    y = 0 - y;
    x = 0 - x;
  }

  return x + multiply(x, y - 1);

};
//base case
//if either number is zero, the answer is zero
//set the lowest number to y
//recursive case
//add x to the recursive call of multiply with x and y - 1
//when y hits 0, all numbers should add the amount of times
//return



// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

  if (y === 0) {
    return NaN;
  }

  if (x < 0 && y > 0) {
    x = 0 - x;
      if (x < y) {
        return 0;
      }
    return -(1 + divide(x - y, y));
  }

  if (x > 0 && y < 0) {
    y = 0 - y;
      if (x < y) {
        return 0;
      }
    return -(1 + divide(x - y, y));
  }

  if (x < 0 && y < 0) {
    x = 0 - x;
    y = 0 - y;
  }

  if (x < y) {
    return 0;
  }

  return 1 + divide(x - y, y);

};
//basecase
//if x is less than y, return 0
//recursive case
//return 1 plus divide(x - y, y)
//the 1 will add up over time, giving us the amount of iterations we did



// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

  if (x < 0 || y < 0) return null;
  if (x === 0) return y;
  if (y === 0) return x;
  return gcd(y, x % y);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if (str1.length === 0 && str2.length > 0) {
    return false;
  }
  if (str2.length === 0 && str1.length > 0) {
    return false;
  }
  if (str1.charAt(0) !== str2.charAt(0)) {
    return false;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  return compareStr(str1.slice(1), str2.slice(1));

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  var result = [];
  if (str.length === 0) {
    return result;
  }
  result.push(str.charAt(0));
  return result.concat(createArray(str.slice(1)));

};

// 17. Reverse the order of an array
var reverseArr = function(array) {

  var result = [];
  if (array.length === 0) {
    return result;
  }
  result.push(array[array.length - 1]);
  return result.concat(reverseArr(array.slice(0, array.length - 1)));

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

  var result = [];
  if (length === 0) {
    return result;
  }
  result.push(value);
  return result.concat(buildList(value, length - 1));

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

    if (n === 1) {
      return [n.toString()];
    }

    var result = fizzBuzz(n - 1);
    if (n % 3 === 0 && n % 5 === 0) {
      n = 'FizzBuzz';
    }	else if (n % 3 === 0 && n % 5 !== 0) {
      n = 'Fizz';
    } else if (n % 3 !== 0 && n % 5 === 0) {
      n = 'Buzz';
    }

    result.push(n.toString());
    return result;

};



// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

  if (array.length === 0) {
    return 0;
  }

  if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  }

  return countOccurrence(array.slice(1), value);

};




// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

  var result = [];
  if (array.length === 0) {
    return result
  }

  var firstElem = array[0];
  result.push(callback(firstElem));

  return result.concat(rMap(array.slice(1), callback));

};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  var result = 0;

  for (var element in obj) {
    if (element === key) {
      result += 1;
    }

    if (typeof obj[element] === 'object') {
      result += countKeysInObj(obj[element], key);
    }
  }

  return result;

};



// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {

  var result = 0;

  for (var element in obj) {
    if (obj[element] === value) {
      result += 1;
    }

    if (typeof obj[element] === 'object') {
      result += countValuesInObj(obj[element], value);
    }
  }

  return result;

};



// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  var objArr = Object.keys(obj);

	objArr.forEach(element => {
		if (typeof obj[element] === 'object') {
			obj[element] = replaceKeysInObj(obj[element], oldKey, newKey);
    }

		if (element === oldKey) {
			obj[newKey] = obj[element];
			delete obj[element];
		}
  });

  return obj

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

  if (n <= 0) return null;
  if (n < 2) {
    return [0, 1];
  }
  if (n < 3) {
    return [0, 1, 1];
  }

  var previousFibArr = fibonacci(n - 1);
  previousFibArr.push(previousFibArr[n - 2] + previousFibArr[n - 1]);
  return previousFibArr

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

  if (n < 0) return null;
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return (nthFibo(n - 1) + nthFibo(n - 2));

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {

  var result = [];
  if (array.length === 0) {
    return result;
  }

  var capElem = array[0].toUpperCase();
  result.push(capElem);

  return result.concat(capitalizeWords(array.slice(1)));

};
//base case
//recursive case
//take the first element of the array
//capitalize it, then add it to the result array
//push it to the recursive call of array.slice(1)



// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {

  var result = [];
  if (array.length === 0) {
    return result;
  }

  var currentElem = array[0].toLowerCase();
  var firstLetter = currentElem.charAt(0).toUpperCase();
  var restOfWord = currentElem.slice(1);
  var properElem = firstLetter + restOfWord;

  result.push(properElem);
  return result.concat(capitalizeFirst(array.slice(1)));

};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

  var result = 0;
  for (var element in obj) {
    if (obj[element] % 2 === 0) {
      result += obj[element];
    }

    if (typeof obj[element] === 'object') {
      result += nestedEvenSum(obj[element]);
    }
  }

  return result;

};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
			var flattenedCurrentArray = flatten(array[i]);
			result = result.concat(flattenedCurrentArray)
		  }
		}
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

  if (str.length === 0) {
    return obj;
  }

  if (!obj[str.charAt(0)]) {
    obj[str.charAt(0)] = 1;
  } else {
    obj[str.charAt(0)]++
  }

  return letterTally(str.slice(1), obj);

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

  var result = [];
  if (list.length < 2) {
    return list;
  }

  if (list[0] === list[1]) {
    return compress(list.slice(1))
  }

  result.push(list[0]);
  return result.concat(compress(list.slice(1)))

};



// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

  var result = [];
  if (array.length === 0) {
    return result;
  }

	var newArray = array[0];
	newArray.push(aug);
  result.push(newArray);

  return result.concat(augmentElements(array.slice(1) , aug));

};


// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

  var result = [];
  if (array.length === 0) {
    return array;
  }

  if (array[0] === 0) {
    if (array[1] === 0) {
      return minimizeZeroes(array.slice(1));
    }
  }

  result.push(array[0]);
  return result.concat(minimizeZeroes(array.slice(1)));

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {

  var result = [];
  if (array.length === 0) {
    return result;
  }
  if (array.length === 1) {
    return [Math.abs(array[0])];
  }

  if (array[0] < 0) {
    array[0] = Math.abs(array[0]);
  }
  if (array[1] > 0) {
    array[1] = 0 - array[1];
  }

  result.push(array[0], array[1]);
  return result.concat(alternateSign(array.slice(2)));

}


// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {

  var numObj = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine'
  }

  var result = '';
  if (str.length === 0) {
    return result;
  }

  if (numObj[str.charAt(0)]) {
    result += numObj[str.charAt(0)];
  } else {
    result += str.charAt(0);
  }

  result += numToText(str.slice(1));
  return result;

};
//make an object with nine key/value pairs for numbers
//iterate through all the characters and add them to the result
//if a number appears on the search, replace it with its value in the obj
//return when there are no more characters in the string


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  if (!node) {
    node = document.body;
  }
  var result = 0;
  if (node.localName === tag) {
    result++;
  }
  if (node.childNodes) {
    (node.childNodes).forEach(child => {
      result += tagCount(tag, child);
    })
  }
  return result;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
