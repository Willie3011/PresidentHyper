const menuBtn = document.getElementById("menu-btn");
const menuIcon = menuBtn.querySelector("i");
const mobileNav = document.querySelector(".mobile-nav");
const navLinks = mobileNav.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
})

navLinks.forEach(Link => {
    Link.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        menuIcon.classList.toggle("bx-x")
    })
})
