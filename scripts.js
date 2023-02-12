const mainContainer = document.querySelector(".main-container");
const tyContainer = document.querySelector(".ty-container");
const submitButton = document.querySelector(".btn-submit");
const rating = document.getElementById("rating");
const points = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    tyContainer.classList.remove("hidden")
  })
points.forEach((point) => {
    point.addEventListener("click", () => {
        rating.innerHTML = point.innerHTML
    })
})