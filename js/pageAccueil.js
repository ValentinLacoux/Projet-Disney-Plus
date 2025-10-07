"use strict";
// ================================================================================== 
// Envoie l'utilisateur à la section "oeuvre originale" quand il clique sur la flèche 
// ==================================================================================

// Sélectionne l'icône flèche (ID 'fleche') dans la section Hero
document.querySelector("#fleche").addEventListener("click", () => {
  // Cible la section de destination.
  const section = document.querySelector("#oeuvre-originale");
  // Déclenche le défilement et assure un mouvement doux.
  section.scrollIntoView({ behavior: "smooth" });
});

// ================================================================================== 
//       Ouvre les réponses lors du clic sur les questions dans la section FAQ
// ==================================================================================

// Sélectionne tous les boutons/questions de la section FAQ
const questions = document.querySelectorAll(".question");

// Ajoute un écouteur d'événement 'click' à chaque bouton/question
questions.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Cible la réponse
    const answer = btn.nextElementSibling;
    // Cible l'icône de l'état + ou -
    const icon = btn.querySelector('.icone');

    // VÉRIFICATION : Si la réponse est déjà ouverte
    if (answer.classList.contains("open")) {
      // CAS 1 : Fermeture de la réponse
      answer.style.maxHeight = null;
      // Retire la classe pour marquer l'élément comme fermé
      answer.classList.remove("open");
      // Change l'icône pour afficher le signe +
      icon.textContent = '+';
    } else {
      // CAS 2 : Ouverture de la réponse
      // Ajoute la classe pour marquer l'élément comme ouvert
      answer.classList.add("open");
      // Définit la hauteur maximale sur la hauteur réelle du contenu
      answer.style.maxHeight = answer.scrollHeight + "px";
      // Change l'icône pour afficher le signe -
      icon.textContent = '-';
    }
  });
})

// ================================================================================== 
//            Change la langue de la page avec redirection FR <-> EN
// ==================================================================================

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
        // Va de FR vers EN (page.html -> page-en.html)
        newUrl = currentFileName.replace(FR_PAGE_SUFFIX, EN_PAGE_SUFFIX);

      } else if (selectedLang === 'fr' && isEnglishPage) {
        // Va de EN vers FR (page-en.html -> page.html)
        newUrl = currentFileName.replace(EN_PAGE_SUFFIX, FR_PAGE_SUFFIX);
      }

      if (newUrl && newUrl !== currentFileName) {
        // Effectue la redirection vers l'autre page HTML
        window.location.href = newUrl;
      }
    });

    // 3. GESTION DU CLIC SUR LE CONTENEUR PERSONNALISÉ
    const selecteurConteneur = document.querySelector('.selecteur-langue-personnalise');
    if (selecteurConteneur) {
      selecteurConteneur.addEventListener('click', () => {
        langSelector.focus();
        // Simule un clic pour ouvrir le menu déroulant
        const event = new MouseEvent('mousedown', { bubbles: true });
        langSelector.dispatchEvent(event);
      });
    }
  }
});


