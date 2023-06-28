//1.assingment
function AO(num1, num2) {
  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  console.log("Sum:", sum);
  console.log("Difference:", difference);
  console.log("Product:", product);
  console.log("Quotient:", quotient);
}
AO(10, 5);

//2.assingment
function findLargestNumber(numbers) {
  var largestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }

  return largestNumber;
}

const numbers = [5, 10, 3, 8, 15];
const largestNumber = findLargestNumber(numbers);
console.log("Largest number:", largestNumber);

//3.assingment
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even.");
  } else {
    console.log(number + " is odd.");
  }
}

checkEvenOrOdd(7);

//4.assingment

function countVowels(str) {
  var vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (var char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  console.log("Number of vowels:", vowelCount);
}

countVowels("Hello World");

//5.assingment

function countWordsStartingWithVowel(sentence) {
  var wordCount = 0;
  var words = sentence.split(" ");

  for (let word of words) {
    var firstChar = word[0].toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(firstChar)) {
      wordCount++;
    }
  }

  console.log("Number of words starting with a vowel:", wordCount);
}

countWordsStartingWithVowel("Apples are awesome and oranges are orange.");

//6.assingment

function checkPalindrome(str) {
  var reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    console.log(str + " is a palindrome.");
  } else {
    console.log(str + " is not a palindrome.");
  }
}

checkPalindrome("madam");

//7.assingment

function calculatePower(base, exponent) {
  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  console.log(base + " raised to the power of " + exponent + " is " + result);
}

calculatePower(2, 3);

//8.assingment

function reverseString(str) {
  var reversedStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const reversed = reverseString("Hello World");
console.log("Reversed string:", reversed);

//9.assingment

function removeVowels(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";

  for (var char of sentence) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  console.log("Result:", result);
}

removeVowels("This is a sample sentence.");
