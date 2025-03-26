// Inject reusable navbar
document.addEventListener('DOMContentLoaded', () => {
    fetch('components/navbar.html')  // Path to your navbar component
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));









});

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

