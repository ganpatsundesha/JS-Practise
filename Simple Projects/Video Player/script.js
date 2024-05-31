const video = document.querySelector(".videoPlayer video")
const playButton = document.getElementById("play")
const pauseButton = document.getElementById("pause")

playButton.addEventListener("click", () => {
    video.play()
    playButton.style.display = "none";
    pauseButton.style.display = "block"
})

pauseButton.addEventListener("click", () => {
    video.pause()
    pauseButton.style.display = "none"
    playButton.style.display = "block"
})

video.onplaying = function () {
    video.addEventListener("mouseleave", () => {
        console.log("leave");
        pauseButton.style.display = "none"
        playButton.style.display = "none"
    })

    video.addEventListener("mouseover", () => {
        console.log("enter");
        if (video.onplaying) {
            pauseButton.style.display = "block"
        }
        else {
            playButton.style.display = "block"
        }
    })
}


// video.addEventListener("mouseleave", () => {
//     pauseButton.style.display = "none"
// })

// if (video.ended) {
//     console.log("emd");
// }