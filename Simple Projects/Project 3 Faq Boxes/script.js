const accordionBox = document.querySelectorAll(".accordionBox")

accordionBox.forEach(accordion => {

    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active")
        accordionBox.forEach(item => {
            if (item !== accordion && item.classList.contains("active")) {
                item.classList.remove("active")
            }
        })
    })
})