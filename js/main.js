let mask = document.querySelector(".mask")
window.addEventListener('load', () => {
    mask.classList.add("hide")
    setTimeout(() => {
        mask.remove()
    }, 600);
})

const burger = document.querySelector(".navbar-burger")
burger.onclick = () => {
    document.querySelector(".header-items__right").classList.toggle("is-active")
}