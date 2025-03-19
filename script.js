// Theme Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    let themeButton = document.getElementById("dark-mode-toggle");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Animated Hero Text Effect
const textArray = ["Cloud Engineer", "DevOps Specialist", "Software Developer"];
let textIndex = 0;

function animateText() {
    document.getElementById("animated-text").innerText = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(animateText, 2000);
}

animateText();

// Smooth Scrolling for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
// Function to reveal elements on scroll
const scrollElements = document.querySelectorAll(".hidden");

const scrollReveal = () => {
    scrollElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        } else {
            element.classList.remove("show");
        }
    });
};

// Run scrollReveal function when scrolling
window.addEventListener("scroll", scrollReveal);
