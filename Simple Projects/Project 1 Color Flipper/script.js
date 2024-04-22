const chnageButton = document.getElementById("button");
const mainBackground = document.getElementById("main")
const colorText = document.getElementById("color-box")

function generateColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

chnageButton.addEventListener("click", function () {
    let colorCode = generateColor()
    mainBackground.style.backgroundColor = colorCode
    colorText.innerHTML = `Your Color code:-  ${colorCode.slice(1)}`
})