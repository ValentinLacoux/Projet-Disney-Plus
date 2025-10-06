"use strict";


// Envoie l'utilisateur à la section "oeuvre originale" quand il clique sur la flèche
document.querySelector("#fleche").addEventListener("click", () => {
  const section = document.querySelector("#oeuvre-originale");
  section.scrollIntoView({ behavior: "smooth" });
});

// Ouvre la question quand on appuie sur le bouton question
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



// On récupère le span et le select
const selectPersonnalise = document.querySelector('.select-personnalise');
const selectLangue = document.querySelector('.select-langue');

// Quand on clique sur le span, on déclenche le menu déroulant du select
selectPersonnalise.addEventListener('click', () => {
  selectLangue.focus();   // met le select en focus
  selectLangue.click();   // ouvre le menu déroulant
});

// On peut aussi écouter le changement de valeur
selectLangue.addEventListener('change', (event) => {
  console.log("Langue choisie :", event.target.value);
  // ici tu peux ajouter ton code pour changer la langue
});
