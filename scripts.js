const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    const slider = document.querySelector('.slider-container');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
