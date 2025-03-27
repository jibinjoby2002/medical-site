// JavaScript for the Slider Functionality
function moveSlide(direction, sliderId) {
    const slider = document.querySelector(`#${sliderId} .slider`);
    const slides = slider.querySelectorAll('img');
    const slideWidth = slides[0].clientWidth;

    // Get current transform value
    const currentTransform = getComputedStyle(slider).transform;
    let currentTranslateX = currentTransform !== 'none' 
        ? parseInt(currentTransform.split(',')[4]) 
        : 0;

    // Calculate new position
    let newTranslateX = currentTranslateX + (direction * slideWidth);

    // Looping the slides
    if (newTranslateX < -(slideWidth * (slides.length - 1))) {
        newTranslateX = 0;
    } else if (newTranslateX > 0) {
        newTranslateX = -(slideWidth * (slides.length - 1));
    }

    // Apply the transform
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${newTranslateX}px)`;
}
