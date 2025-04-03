// JavaScript for the Slider Functionality
function moveSlide(direction, sliderId) {
  const slider = document.querySelector(`#${sliderId} .slider`);
  const slides = slider.querySelectorAll("img");
  const slideWidth = slides[0].clientWidth;

  // Get current transform value
  const currentTransform = getComputedStyle(slider).transform;
  let currentTranslateX =
    currentTransform !== "none" ? parseInt(currentTransform.split(",")[4]) : 0;

  // Calculate new position
  let newTranslateX = currentTranslateX + direction * slideWidth;

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


gsap.registerPlugin(ScrollTrigger); 
window.addEventListener("load", () => {
  const tl = gsap.timeline();

  // GSAP stagger animation for navbar links
  gsap.from("nav a", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });

  tl.fromTo(
    ".top-right-circle",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power2.out",
    }
  )
  gsap.fromTo(".about-top-right-circle", {
    opacity: 0,
    y: 100,
  },{
    opacity:1,
    y:0
  });

  gsap.fromTo('.mail,.mail-head',{
    opacity:0,
    x:-50
  },
{
    opacity:1,
    x:0
})

gsap.fromTo('.home-content h1,.home-content p',{
    opacity:0,
    y:50
},{
    opacity:1,
    y:0,
    duration:1,
    ease:"power2.out"
})
});



// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Slider functionality
function moveSlide(direction, sliderId) {
  const slider = document.querySelector(`#${sliderId} .slider`);
  const slides = document.querySelectorAll(`#${sliderId} .slider img`);
  const slideWidth = slides[0].clientWidth;
  const currentPosition = parseInt(slider.style.transform?.replace('translateX(', '')?.replace('px)', '')) || 0;
  
  let newPosition = currentPosition + (direction * slideWidth);
  
  // Don't scroll beyond first or last slide
  if (newPosition > 0) newPosition = 0;
  if (newPosition < -(slideWidth * (slides.length - 1))) newPosition = -(slideWidth * (slides.length - 1));
  
  slider.style.transform = `translateX(${newPosition}px)`;
}

// Initialize sliders
document.querySelectorAll('.slider').forEach(slider => {
  slider.style.transform = 'translateX(0px)';
});

function toggleWhatsApp() {
  document.querySelector(".whatsapp-container").classList.toggle("active");
}
