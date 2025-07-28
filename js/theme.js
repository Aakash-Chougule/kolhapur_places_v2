// File: js/theme.js
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", darkToggle.checked);
    localStorage.setItem("darkMode", darkToggle.checked);
  });

  const isDark = localStorage.getItem("darkMode") === "true";
  darkToggle.checked = isDark;
  document.body.classList.toggle("dark", isDark);
}
