document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn) {
        mobileBtn.addEventListener("click", function () {
            navLinks.style.display =
                navLinks.style.display === "flex" ? "none" : "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.background = "white";
            navLinks.style.position = "absolute";
            navLinks.style.top = "60px";
            navLinks.style.right = "20px";
            navLinks.style.padding = "20px";
            navLinks.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
        });
    }

    // Hero Slider
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(function () {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 5000);
    }

});
