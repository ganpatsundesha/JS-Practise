
// Write a function that takes a string as input and returns the string reversed.

// const newStr = "My Name Is Ganpat";
// const reverseStr = newStr.split("").reverse().join("")
// console.log(reverseStr);

function reverseString(str) {
    const reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
}

// reverseString("My Name Is Ganpat")
// reverseString("Borrow or Rob")

// Write a function that takes a string as input and returns true if it's a palindrome (reads the same forwards and backwards), false otherwise.

function palindrome(str) {
    const reverseStr = str.split("").reverse().join("")
    if (reverseStr === str) {
        return true
    }
    else {
        return false
    }
}
// console.log(palindrome("name"));
// console.log(palindrome("rotator"));
// console.log(palindrome("borrow or rob"));
// console.log(palindrome("lived as a devil"));



// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
function vowelsNumber(str) {
    const vowels = "aAeEiIOoUu"
    return str.split("").reduce((count, char) => {
        return (vowels.indexOf(char) !== -1 ? count + 1 : count)
    }, 0)
}
// console.log(vowelsNumber("aeiou"));



// Write a function that capitalizes the first letter of each word in a sentence.
function capitalizes(str) {
    const capital = str.split(" ");
    for (let i = 0; i < capital.length; i++) {
        capital[i] = capital[i][0].toUpperCase() + capital[i].substr(1)
    }
    console.log(capital);
}

// capitalizes("freeCodeCamp is an awesome resource")


// Write a function that takes a string and compresses it, replacing repeated characters with a number indicating the frequency of repetition


// Write a function that takes two strings as input and returns true if they are anagrams of each other, false otherwise

function anagrams(str1, str2) {
    const strString1 = str1.split('')
    const strString2 = str2.split('')
    let trueWords = 0;

    if (strString1.length !== strString2.length) {
        return false
    }

    for (let i = 0; i < strString1.length; i++) {
        if (strString2.includes(strString1[i])) {
            trueWords++
        }
    }
    if (trueWords === strString1.length) {
        return true
    }
    else {
        return false
    }
}
// console.log(anagrams("ganpat", "ganpap"));




// Write a function that takes a string as input and returns the longest word in the string.

function longestWord(str) {
    const strArr = str.split(" ");
    let largestWord = '';

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > largestWord.length) {
            largestWord = strArr[i]
        }
    }
    return largestWord
}
// console.log(longestWord('method returns a string with array values separated by commas.'));



// Write a function that takes a string as input and removes any duplicate characters.

// not solve 

function duplicate(str) {
    const strString = str.split('')
    let duplicateChar = []

    for (let i = 0; i < strString.length; i++) {
        if (strString.includes(strString[i])) {
            duplicateChar.push(strString[i])
        }
    }

    console.log(duplicateChar);
}
// duplicate('name')






// Write a function that takes two strings as input and returns true if the first string contains the second string as a substring, false otherwise.
function subString(str1, str2) {
    return str1.includes(str2)
}
// console.log(subString("name", "name"));




// Write a function that takes two strings as input and returns true if one string is a rotation of the other (e.g., 'waterbottle' is a rotation of 'erbottlewat')
function rotationString(str1, str2) {
    const mainString = str1.toLowerCase() + str1.toLowerCase()
    return mainString.includes(str2)
}

// console.log(rotationString("waterbottle", "erbottlewat"));
// console.log(rotationString("waterbottle", "testMatch"));




/* *************************  Date and Time Questions **********************************/



// 1. Write a function to get the current date in the format "YYYY-MM-DD".

const date = new Date()

function getDate() {
    console.log(date.toISOString().slice(0, 10));
}
// getDate()



// 2.  Write a function to get the current time in the format "HH:MM:SS".

function curTime() {
    const hour = date.getHours()
    const amPm = hour >= 12 ? 'PM' : "AM"
    const hours12 = hour % 12 || 12;
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${String(hours12).padStart(2, "0")}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, "0")} ${amPm}`
}

// console.log(curTime());



// 3. Create a function that takes a date string in the format "YYYY-MM-DD" and returns the day of the week (e.g., Monday, Tuesday, etc.).

function takeDate(newDate) {
    const date = new Date(newDate).getDay()
    if (date === 0) {
        return "Sunday"
    }
}

// console.log(takeDate("2024-03-03"));

// 4. Create a function to calculate the difference in days between two given dates.

function diffDate(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)
    const diff = d2.getTime() - d1.getTime()
    return diff / (1000 * 3600 * 24)
}

// console.log(diffDate("3/12/2024", "3/15/2024"));









/******************************************************************Array Questions***********************************************************************/



// 1  Write a function to find the maximum element in an array.

function arrayLength(arr) {
    return arr.length
}

// console.log(arrayLength(["NAME", "Youe name", 25, true]));


// 2.  Create a function to calculate the sum of all elements in an array.

function sumArry(arr) {
    let sum = 0;
    arr.reduce((accumulator, currentValue) => sum = accumulator + currentValue, 0)
    return sum
}

// console.log(sumArry([1, 2, 3, 4, 5]));



// 3. Get diffrent beetwen 2 array 


function arrayDiff(a, b) {
    let difference = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) === -1) {
            difference.push(a[i]);
        }
    }
    return difference;
};

// console.log(arrayDiff(["205", "251", "256", "334", "907", "480", "520"], ["878", "901", "903", "904", "906", "907",]));





// 4. Write a function to remove duplicates from an array.

function removeDeplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

// console.log(removeDeplicates(["apple", "mango", "apple", "orange", "mango", "mango"]));


// 5. Implement a function to reverse an array.

function reverseArray(arr) {
    return arr.reverse()
}

// console.log(reverseArray(["apple", "mango", "orange"]));




// 6. Write a function to check if an array is sorted in ascending order.

isAscending = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            console.log(arr);
            return false
        }

    }
    console.log(arr);
    return true
}

// console.log(isAscending(["mango", "apple", "orange"]));
// console.log(isAscending([1, 2, 5, 7, 9]));



// 7. Create a function to find the average of all elements in an array.

average = (arr) => {
    let sum = 0;
    arr.reduce((acc, cur) => sum = acc + cur, 0)
    return Math.floor(sum / arr.length)
}

// console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 40, 50]));


// 8. Implement a function to merge two sorted arrays into a single sorted array.

function sortArray(arr1, arr2) {
    return arr1.concat(arr2)
}

// console.log(sortArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 40, 50]));



// 9. Write a function to find the index of a specific element in an array.

function findIndex(arr, index) {
    return arr.indexOf(index)
}

// console.log(findIndex([1, 2, 3, 4, 5], 1));


// 10 Create a function to remove a specific element from an array.
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function removeElement(arr, element) {
    let part1 = arr.slice(0, element)
    let part2 = arr.slice(element + 1, arr.length)
    return part1.concat(part2)
}

// console.log(removeElement(newArray, 80));





// 11 Implement a function to rotate an array to the right by a given number of steps.



// 12 Write a function to sort an array in ascending order using bubble sort algorithm.

function bubbleFunc() {

}

// 13 Create a function to sort an array in descending order using selection sort algorithm.


// 14 Implement a function to check if two arrays are equal (contain the same elements in the same order).

function checkArray(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

// console.log(checkArray([1, 2, 3, 4], [1, 2, 3, 4]));


// 15 Write a function to find the second largest element in an array.

function secLargestElem(arr) {
    let sort = arr.sort((a, b) => a - b)
    return sort[sort.length - 2]
}

// console.log(secLargestElem([5, 4, 2, 3, 1, 8, 45, 96, 78]));



// 16 Create a function to find the median of an array.

function midianNumber(arr) {
    if (arr.length % 2 === 0) {
        return arr[arr.length / 2]
    }
    else {
        return arr[Math.floor(arr.length / 2)]
    }
}

// console.log(midianNumber([1, 2, 3, 4, 5, 65, 45, 78, 89, 85]));


// 17 Implement a function to find the mode (most frequent element) in an array.

function mostFrequentElem(arr) {
    let freq = []
}


// 18 Write a function to find the intersection of two arrays.
// 19 Create a function to find the union of two arrays.
// 20 Implement a function to find the difference between two arrays.
// 21 Write a function to shuffle the elements of an array randomly.
// 22 Create a function to flatten a nested array.
// 23 Implement a function to split an array into chunks of a specified size.
// 24 Write a function to find the index of the first negative number in an array.
// 25 Create a function to check if an array contains only unique elements.


// 26 Write a function to find the largest element in an array.

function largetsNumber(arr) {
    const sort = arr.sort((a, b) => a - b)

    return sort[sort.length - 1]
}

// console.log(largetsNumber([4, 8, 6, 78, 45]));


// 27 Write a function to reduce 10% from price of array

function more(arr) {
    let newArray = []
    for (const array of arr) {
        newArray.push(array - (array / 10))
    }
    return newArray
}

// console.log(more([50, 100, 150, 200]));











/****************************************************  Object  ***********************************************************/

// 1. Create an object representing a person with properties name, age, and city. Print out the person's name.

const name = {
    myName: "Ganpat",
    age: 20,
    city: "Deesa",
}

// console.log(name.myName)
// console.log(name.age)
// console.log(name.city)


// 2. Create a function that takes an object as a parameter and returns the number of properties in the object.

function returnProprties(obj) {
    return Object.getOwnPropertyNames(obj)
    // return Object.keys(obj)
}

console.log(returnProprties(name));


// 3. Write a function that takes two objects as parameters and returns a new object that contains only the properties that are common to both objects.

const obj1 = {
    age: 20,
    city: "Deesa",
}

const names = {
    myName: "Ganpat",
    age: 20,
    city: "Deesa",
}

function returnSameProparty(obj1, obj2) {

    console.log(obj1, obj2)
}

returnSameProparty(obj1, names)