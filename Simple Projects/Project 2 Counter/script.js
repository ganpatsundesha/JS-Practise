let number = document.getElementById("number")
const decrementButton = document.getElementById("decrement")
const resetButton = document.getElementById("reset")
const incrementButton = document.getElementById("increment")

decrementButton.addEventListener("click", () => {
    number.innerText--
    if (number.innerText < 0) {
        number.style.color = "red";
    }
    else if (number.innerText == 0) {
        number.style.color = "blue";
    }
    else {
        number.style.color = "white";
    }
})
resetButton.addEventListener("click", () => {
    number.innerText = 0
    if (number.innerText < 0) {
        number.style.color = "red";
    }
    else if (number.innerText == 0) {
        number.style.color = "blue";
    }
    else {
        number.style.color = "white";
    }
})
incrementButton.addEventListener("click", () => {
    number.innerText++
    if (number.innerText < 0) {
        number.style.color = "red";
    }
    else if (number.innerText == 0) {
        number.style.color = "blue";
    }
    else {
        number.style.color = "white";
    }
})