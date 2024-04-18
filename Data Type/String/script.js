
//1.  Write a function that takes a string as input and returns the string reversed.

const newStr = "My Name Is Ganpat";
const reverseStr = newStr.split("").reverse().join("")
// console.log(reverseStr);

function reverseString(str) {
    const reverseStr = str.split('').reverse().join('');
    console.log(reverseStr);
}

// reverseString("My Name Is Ganpat")
// reverseString("Borrow or Rob")

// 2.  Write a function that takes a string as input and returns true if it's a palindrome (reads the same forwards and backwards), false otherwise.

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



// 3.  Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
function vowelsNumber(str) {
    const vowels = "aAeEiIOoUu"
    return str.split("").reduce((count, char) => {
        return (vowels.indexOf(char) !== -1 ? count + 1 : count)
    }, 0)
}
// console.log(vowelsNumber("aeiou"));



//  4. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizes(str) {
    const capital = str.split(" ");
    for (let i = 0; i < capital.length; i++) {
        capital[i] = capital[i][0].toUpperCase() + capital[i].substr(1)
    }
    console.log(capital);
}

// capitalizes("freeCodeCamp is an awesome resource")


// 5. Write a function that takes two strings as input and returns true if they are anagrams of each other, false otherwise

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




// 6.  Write a function that takes a string as input and returns the longest word in the string.

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



// 7.  Write a function that takes a string as input and removes any duplicate characters.

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



// 8.  Write a function that takes two strings as input and returns true if the first string contains the second string as a substring, false otherwise.
function subString(str1, str2) {
    return str1.includes(str2)
}
// console.log(subString("name", "name"));


//  9. Write a function that takes two strings as input and returns true if one string is a rotation of the other (e.g., 'waterbottle' is a rotation of 'erbottlewat')
function rotationString(str1, str2) {
    const mainString = str1.toLowerCase() + str1.toLowerCase()
    return mainString.includes(str2)
}

// console.log(rotationString("waterbottle", "erbottlewat"));
// console.log(rotationString("waterbottle", "testMatch"));


// 10. Write a function that takes a string as an argument and returns true if it's a palindrome (reads the same forwards and backwards), false otherwise.


function palindrom(str) {
    let reverseWord = str.split("").reverse().join("")
    if (reverseWord == str) {
        return true
    }
    return false
}

// console.log(palindrom("kayak"))
// console.log(palindrom("name"))


// 11. Write a function that takes a string as an argument and returns the number of words in the string.

function numString(str) {
    return str.split('').length
}

// console.log(numString("myname"))


// 12. Write a function that takes a string as an argument and returns the same string with each word capitalized.

function capitalizeWord(str) {
    let words = str.split(" ")
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        let letter = words[i].split('')
        letter.unshift(letter[0].toUpperCase())
        letter.splice(1, 1)
        newWords.push(letter.join(''))
    }

    return newWords.join(' ')
}

console.log(capitalizeWord("your name is"))


// 13. Write a function that takes a string as an argument and returns the longest word in the string. If there are multiple longest words, return the first one.


function LongestWord(str) {
    let allWords = str.split(" ")
    let longestWord = allWords[0]
    for (let i = 0; i < allWords.length; i++) {
        if (allWords[i].length > longestWord.length) {
            longestWord = allWords[i]
        }
    }
    return longestWord
}

console.log(LongestWord("you are the best one myFriend myFrien2"))