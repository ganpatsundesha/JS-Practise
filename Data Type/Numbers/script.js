// 1. Write a function that takes two numbers as arguments and returns their sum.

function sum(num1, num2) {
    return num1 + num2
}

// console.log(sum(25,45))


// 2. Write a function that takes a number as an argument and prints out its multiplication table up to 10.

function tabel(num) {
    for (i = 1; i < 11; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
    return
}

// console.log(tabel(5))


// 3. Write a function that takes a number as an argument and returns whether it's even or odd.

function evenOdd(num) {
    if (num % 2 == 0) {
        return true
    }
    return false
}

// console.log(evenOdd(11))


// 4. Write a function that takes a number as an argument and returns true if it's a prime number, false otherwise

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return true
        }
        return false
    }
}

// console.log(isPrime(7))


// 5. Write a function that takes a number n as an argument and prints the first n numbers of the Fibonacci sequence.


// 6. Write a function that takes a number as an argument and returns its factorial


// 7. Write a function that takes a number as an argument and returns true if it's an Armstrong number, false otherwise. (An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.)


// 8. Write a function that takes a number as an argument and returns true if it's a perfect number, false otherwise. (A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.)


// 9. Write a function that takes a number as an argument and returns an approximation of its square root.


// 10. Write a function that takes a number as an argument and returns true if it's a triangular number, false otherwise. (A triangular number is the sum of the first n natural numbers.) 