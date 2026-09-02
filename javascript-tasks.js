// ========== Задания на работу со строками ==========

function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

function truncateText(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

function removeSpaces(str) {
  return str.split(' ').join('');
}

// ========== Задания на работу с массивами ==========

function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function flattenArray(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      for (const inner of item) {
        result.push(inner);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

function uniqueValues(arr) {
  return Array.from(new Set(arr));
}

// ========== Задания на работу с циклами ==========

function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function generateMultiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

function sumOfDigits(num) {
  let sum = 0;
  const digits = String(num).split('');
  
  for (let digit of digits) {
      sum += Number(digit);
  }
  
  return sum;
}

function repeatString(str, count) {
  let result = '';
  for (let i = 0; i < count; i++) {
      result += str;
  }
  return result;
}
