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
