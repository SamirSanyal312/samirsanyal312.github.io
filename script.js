document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    let themeButton = document.getElementById("dark-mode-toggle");
    themeButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Animated Hero Text
const textArray = ["Cloud Engineer", "DevOps Specialist", "Software Developer"];
let textIndex = 0;

function animateText() {
    document.getElementById("animated-text").innerText = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(animateText, 2000);
}

animateText();
