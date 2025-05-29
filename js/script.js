const words = ["curieux", "autonome", "rigoureux"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Vitesse de frappe
const delayBetweenWords = 2000; // Délai avant de changer de mot
const textElement = document.getElementById("animated-text");

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let nextSpeed = speed;

    if (!isDeleting && charIndex === currentWord.length) {
        nextSpeed = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        nextSpeed = speed;
    }

    setTimeout(typeEffect, nextSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("active");
});
