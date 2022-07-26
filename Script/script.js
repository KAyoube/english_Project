// Initate variables//

const joaquim = document.getElementById("joaquim")
const ayoube = document.getElementById("ayoube")
const thomas = document.getElementById("thomas")
const jeff = document.getElementById("jeff")
const infoJoaquim = document.getElementById("infoJoaquim")
const infoAyoube = document.getElementById("infoAyoube")
const infoJeff = document.getElementById("infoJeff")
const infoThomas = document.getElementById("infoThomas")





// Create functions//

function toggleText(name){
    if (name.style.display === "none") {
        name.style.display = "block";
    }
    else {
        name.style.display = "none";
    }
  }







// Make listener//

joaquim.addEventListener("click", (e) => {
    toggleText(infoJoaquim)
    ayoube.classList.toggle("test")
    thomas.classList.toggle("test")
    jeff.classList.toggle("test")

})
ayoube.addEventListener("click", (e) => {
    toggleText(infoAyoube)
    joaquim.classList.toggle("test")
    thomas.classList.toggle("test")
    jeff.classList.toggle("test")
})
thomas.addEventListener("click", (e) => {
    toggleText(infoThomas)
    ayoube.classList.toggle("test")
    joaquim.classList.toggle("test")
    jeff.classList.toggle("test")
})
jeff.addEventListener("click", (e) => {
    toggleText(infoJeff)
    ayoube.classList.toggle("test")
    thomas.classList.toggle("test")
    joaquim.classList.toggle("test")
})

// Call the main()



