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