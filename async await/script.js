// Note:- 
// 1. async function alaways return a Promise
// 2. JS is Synchronous Language
// 3. Single Threaded
// 4. async and await combo are use to hendle Promises



async function getData() {
    return "ganpat"
}

const dataPromise = getData()

// console.log(dataPromise);

dataPromise.then((res) => console.log(res))


// How to create Promise (Example)

const p = new Promise((resolve, reject) => {
    resolve("Promise Resolved Value!")
})



// On click Start Interval and on click stop interval


const sayName = function () {
    console.log("Ganpat");
}

let intervalID;

document.querySelector("#start").addEventListener("click", () => intervalID = setInterval(sayName, 1000))

document.querySelector("#stop").addEventListener("click", () => clearInterval(intervalID))
