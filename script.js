document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn) {
        mobileBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

    // HERO SLIDER
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    if (slides.length > 0) {

        function showNextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }

        setInterval(showNextSlide, 5000);
    }

});
