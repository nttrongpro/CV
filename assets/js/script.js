// Initialize AOS
AOS.init({
  once: true,
  duration: 1000,
});

// Typing effect
const texts = [
  "Xây dựng những sản phẩm tuyệt vời.",
  "Đam mê code và sáng tạo.",
  "Luôn học hỏi mỗi ngày.",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
      setTimeout(type, 1500);
    }, 2000);
  } else {
    setTimeout(type, 60);
  }
}
window.onload = () => type();

// Animate skill bars
function animateSkills() {
  const progressBars = document.querySelectorAll(".skill-progress");
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
}

// Trigger skill animation when in view
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateSkills();
    }
  },
  { threshold: 0.5 },
);

observer.observe(skillsSection);

// Download CV function
function downloadCV() {
  alert(
    "✅ CV đã được tải xuống (demo). Bạn có thể chỉnh sửa file HTML này để tạo CV thật của mình!",
  );
  // In real project: window.print() or generate PDF
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Keyboard shortcut: Press "D" to download
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d") {
    downloadCV();
  }
});
