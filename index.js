// ✅ 1. Typing Text Animation
const typingText = document.getElementById("typing-text");
const text = "Khushi Meenia | CSE Student | Intern at SkillTect";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed
  }
}
typeEffect();

// ✅ 2. Dynamic Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// ✅ 3. Dark/Light Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});
