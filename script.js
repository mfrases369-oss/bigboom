let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// autoplay
setInterval(() => {
    next.click();
}, 5000);
