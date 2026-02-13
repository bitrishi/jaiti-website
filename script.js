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

    // Lightbox functionality for the gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentIndex = 0;

    if (galleryItems.length > 0 && lightbox) {
        function showLightbox(index) {
            const imgSrc = galleryItems[index].querySelector('img').src;
            lightboxImage.src = imgSrc;
            currentIndex = index;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function hideLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            const imgSrc = galleryItems[currentIndex].querySelector('img').src;
            lightboxImage.src = imgSrc;
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            const imgSrc = galleryItems[currentIndex].querySelector('img').src;
            lightboxImage.src = imgSrc;
        }

        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => showLightbox(index));
        });

        lightboxClose.addEventListener('click', hideLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                hideLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') {
                    hideLightbox();
                } else if (e.key === 'ArrowLeft') {
                    showPrevImage();
                } else if (e.key === 'ArrowRight') {
                    showNextImage();
                }
            }
        });
    }
});