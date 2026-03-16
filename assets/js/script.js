const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  icon.textContent = "☀️";
}

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");

  toggle.classList.add("rotate");

  setTimeout(() => toggle.classList.remove("rotate"), 300);

  if (document.body.classList.contains("light-mode")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
};
