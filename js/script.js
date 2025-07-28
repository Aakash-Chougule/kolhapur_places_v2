const languageSwitcher = document.getElementById("languageSwitcher");

async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const t = await res.json();
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
}
loadLanguage("en");
languageSwitcher.addEventListener("change", e => loadLanguage(e.target.value));
