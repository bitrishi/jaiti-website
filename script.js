/* ==========================================
   JAITI NGO - Clean JavaScript
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       MOBILE NAVIGATION TOGGLE
    =============================== */

    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    /* ===============================
       HERO IMAGE SLIDER
    =============================== */

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
