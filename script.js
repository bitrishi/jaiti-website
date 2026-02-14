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
});// Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');

if (galleryItems.length > 0 && lightbox) {
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    const images = [];
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push(img);
            item.addEventListener('click', () => {
                currentIndex = index;
                openLightbox();
            });
        }
    });

    function openLightbox() {
        if (images[currentIndex]) {
            lightboxImage.src = images[currentIndex].src;
            lightboxImage.alt = images[currentIndex].alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        if (images[currentIndex]) {
            lightboxImage.src = images[currentIndex].src;
            lightboxImage.alt = images[currentIndex].alt;
        }
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        if (images[currentIndex]) {
            lightboxImage.src = images[currentIndex].src;
            lightboxImage.alt = images[currentIndex].alt;
        }
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        }
        if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
        if (e.key === 'ArrowRight') {
            showNextImage();
        }
    });
}
