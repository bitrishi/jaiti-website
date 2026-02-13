document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu toggle
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            const isExpanded = navLinks.classList.contains("active");
            mobileBtn.setAttribute("aria-expanded", isExpanded);
        });
    }

    // Hero slider
    const slides = document.querySelectorAll(".slide");
    if (slides.length > 1) {           // only run if more than 1 slide
        let currentSlide = 0;

        function showNextSlide() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }

        setInterval(showNextSlide, 5500); // slightly slower transition feels more calm
    }
});