document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".videoPlayer video");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");

    playButton.addEventListener("click", () => {
        video.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    });

    pauseButton.addEventListener("click", () => {
        video.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    });

    video.addEventListener("mouseleave", () => {
        if (!video.paused) {
            playButton.style.display = "none";
            pauseButton.style.display = "none";
        }
    });

    video.addEventListener("mouseover", () => {
        if (!video.paused) {
            pauseButton.style.display = "block";
        } else {
            playButton.style.display = "block";
        }
    });

    video.addEventListener("ended", () => {
        playButton.style.display = "block";
        pauseButton.style.display = "none";
    });
});
