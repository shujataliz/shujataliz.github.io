function myFunctionTest(expected, func) {
    const result = func();
    if (JSON.stringify(expected) === JSON.stringify(result)) {
        return "TEST SUCCEEDED";
    } else {
        return `TEST FAILED. Expected ${expected}, but found ${result}`;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function multiply(numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of max(20,10) is 20 and " + myFunctionTest(20, function() {
    return max(20, 10);
}));
console.assert(max(20, 10) === 20, "TEST FAILED");

console.log("Expected output of maxOfThree(5,4,44) is 44 and " + myFunctionTest(44, function() {
    return maxOfThree(5, 4, 44);
}));
console.assert(maxOfThree(5, 4, 44) === 44, "TEST FAILED");

console.log("Expected output of maxOfThree(55,4,44) is 55 and " + myFunctionTest(55, function() {
    return maxOfThree(55, 4, 44);
}));
console.assert(maxOfThree(55, 4, 44) === 55, "TEST FAILED");

console.log("Expected output of isVowel('a') is true and " + myFunctionTest(true, function() {
    return isVowel('a');
}));
console.assert(isVowel('a') === true, "TEST FAILED");

console.log("Expected output of isVowel('b') is false and " + myFunctionTest(false, function() {
    return isVowel('b');
}));
console.assert(isVowel('b') === false, "TEST FAILED");

console.log("Expected output of sum([1,2,3,4]) is 10 and " + myFunctionTest(10, function() {
    return sum([1, 2, 3, 4]);
}));
console.assert(sum([1, 2, 3, 4]) === 10, "TEST FAILED");

console.log("Expected output of multiply([1,2,3,4]) is 24 and " + myFunctionTest(24, function() {
    return multiply([1, 2, 3, 4]);
}));
console.assert(multiply([1, 2, 3, 4]) === 24, "TEST FAILED");

console.log("Expected output of reverse('big') is 'gib' and " + myFunctionTest("gib", function() {
    return reverse("big");
}));
console.assert(reverse("big") === "gib", "TEST FAILED");

console.log("Expected output of findLongestWord(['one', 'three', 'seven']) is 5 and " + myFunctionTest(5, function() {
    return findLongestWord(['one', 'three', 'seven']);
}));
console.assert(findLongestWord(['one', 'three', 'seven']) === 5, "TEST FAILED");

console.log("Expected output of filterLongWords(['apple', 'orange', 'pear'], 4) is ['apple', 'orange'] and " + myFunctionTest(['apple', 'orange'], function() {
    return filterLongWords(['apple', 'orange', 'pear'], 4);
}));
console.assert(JSON.stringify(filterLongWords(['apple', 'orange', 'pear'], 4)) === JSON.stringify(['apple', 'orange']), "TEST FAILED");

const array = [1, 2, 3, 4, 5];

const multiplied = array.map(elem => elem * 10);
console.log("Expected output of array.map(elem => elem * 10) is [10, 20, 30, 40, 50] and " + myFunctionTest([10, 20, 30, 40, 50], function() { return multiplied; }));

const allEqualThree = array.map(() => 3);
console.log("Expected output of array.map(() => 3) is [3, 3, 3, 3, 3] and " + myFunctionTest([3, 3, 3, 3, 3], function() { return allEqualThree; }));

const productOfElements = array.reduce((prev, curr) => prev * curr);
console.log("Expected output of array.reduce((prev, curr) => prev * curr) is 120 and " + myFunctionTest(120, function() { return productOfElements; }));
