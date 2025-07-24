

const anchor = document.querySelectorAll("a");

window.addEventListener("DOMContentLoaded", (e) => {
    anchor.forEach((a) => {
        a.classList.remove("active");
        a.addEventListener("click", e => {
            e.target.siblings
        });
        a.firstElementChild.click()
    })
})