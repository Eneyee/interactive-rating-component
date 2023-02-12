const mainContainer = document.querySelector(".main-container");
const tyContainer = document.querySelector(".ty-container");
const submitButton = document.querySelector(".btn-submit");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    tyContainer.classList.remove("hidden")
  })