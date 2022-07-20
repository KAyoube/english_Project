// Initate variables//

const joaquim = document.getElementById("joaquim")
const ayoube = document.getElementById("ayoube")
const thomas = document.getElementById("thomas")
const jeff = document.getElementById("jeff")





// Create functions//









// Make listener//

joaquim.addEventListener("click", () => {
    ayoube.classList.toggle("test")
    thomas.classList.toggle("test")
    jeff.classList.toggle("test")
})
ayoube.addEventListener("click", () => {
    joaquim.classList.toggle("test")
    thomas.classList.toggle("test")
    jeff.classList.toggle("test")
})
thomas.addEventListener("click", () => {
    ayoube.classList.toggle("test")
    joaquim.classList.toggle("test")
    jeff.classList.toggle("test")
})
jeff.addEventListener("click", () => {
    ayoube.classList.toggle("test")
    thomas.classList.toggle("test")
    joaquim.classList.toggle("test")
})

// Call the main()



