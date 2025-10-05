"use strict";

document.querySelector("#fleche").addEventListener("click", () => {
  const section = document.querySelector("#oeuvre-originale");
  section.scrollIntoView({ behavior: "smooth" });
});