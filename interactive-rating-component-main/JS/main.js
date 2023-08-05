const container = document.querySelector(".container")
const thankscontainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const  rateAgain = document.getElementById("rate-Again")
const  rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () =>{
  thankscontainer.classList.remove("hidden")
  container.style.display = "none"
})
rateAgain.addEventListener("click", () =>{
  thankscontainer.classList.add("hidden")
  container.style.display = "block"
})

rates.forEach((rate) =>{
  rate.addEventListener("click", () =>{
    rating.innerHTML = rate.innerHTML
  })
})