document.querySelector("button").addEventListener("click", () => {
    let input = document.querySelector("input").value
    let random = Math.floor(Math.random() * 10)
    if (random == input) {
        let div = document.querySelector("div").innerHTML = "Rätt"
    }
    else {
        let div = document.querySelector("div").innerHTML = "Fel"
    }
})



