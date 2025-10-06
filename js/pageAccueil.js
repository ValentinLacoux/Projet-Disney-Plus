"use strict";

// Envoie l'utilisateur à la section "oeuvre originale" quand il clique sur la flèche
document.querySelector("#fleche").addEventListener("click", () => {
  const section = document.querySelector("#oeuvre-originale");
  section.scrollIntoView({ behavior: "smooth" });
});

// Ouvre la question quand on appuie sur le bouton question (FAQ)
const questions = document.querySelectorAll(".question");

questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.icone');

    if (answer.classList.contains("open")) {
      answer.style.maxHeight = null;
      answer.classList.remove("open");
      icon.textContent = '+';
    } else {
      answer.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = '-';
    }
  });
})


// Définitions des constantes pour les suffixes des noms de fichiers
const FR_PAGE_SUFFIX = ".html";
const EN_PAGE_SUFFIX = "-en.html";

// --- REDIRECTION POUR LE CHANGEMENT DE LANGUE ---

document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('selecteur-langue-input');
  const selectedLangSpan = document.getElementById('langue-selectionnee');

  // Vérifie le nom du fichier actuel pour déterminer la langue courante
  const currentFileName = window.location.pathname.split('/').pop() || 'index.html'; // Utiliser 'index.html' comme fallback
  const isEnglishPage = currentFileName.includes(EN_PAGE_SUFFIX);
  const langToSelect = isEnglishPage ? 'en' : 'fr';

  if (langSelector) {
    // 1. GESTION DE LA PRÉ-SÉLECTION DE LA LANGUE AU CHARGEMENT
    langSelector.value = langToSelect;
    if (selectedLangSpan) {
      // Met à jour le texte du <span> visuel au chargement
      selectedLangSpan.textContent = langToSelect === 'en' ? 'English' : 'Français';
    }

    // 2. GESTION DU CHANGEMENT DE LANGUE (REDIRECTION)
    langSelector.addEventListener('change', (event) => {
      const selectedLang = event.target.value;
      let newUrl = '';

      if (selectedLang === 'en' && !isEnglishPage) {
        // Va de FR vers EN (ex: page.html -> page-en.html)
        newUrl = currentFileName.replace(FR_PAGE_SUFFIX, EN_PAGE_SUFFIX);

      } else if (selectedLang === 'fr' && isEnglishPage) {
        // Va de EN vers FR (ex: page-en.html -> page.html)
        newUrl = currentFileName.replace(EN_PAGE_SUFFIX, FR_PAGE_SUFFIX);
      }

      if (newUrl && newUrl !== currentFileName) {
        // Effectue la redirection vers l'autre page HTML
        window.location.href = newUrl;
      }
    });

    // 3. GESTION DU CLIC SUR LE CONTENEUR PERSONNALISÉ (si vous l'utilisez)
    const selecteurConteneur = document.querySelector('.selecteur-langue-personnalise');
    if (selecteurConteneur) {
      selecteurConteneur.addEventListener('click', () => {
        langSelector.focus();
        // Simule un clic pour ouvrir le menu déroulant (fonctionne mieux dans certains navigateurs)
        const event = new MouseEvent('mousedown', { bubbles: true });
        langSelector.dispatchEvent(event);
      });
    }
  }
});


