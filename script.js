const toggle = document.querySelector(".lang-toggle");
const label = document.querySelector("[data-lang-label]");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-es][data-en]").forEach((node) => {
    node.textContent = node.dataset[lang];
  });
  if (label) {
    label.textContent = lang === "es" ? "English" : "Español";
  }
  localStorage.setItem("gupr-language", lang);
}

const savedLanguage = localStorage.getItem("gupr-language") || "es";
setLanguage(savedLanguage);

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(nextLanguage);
  });
}
