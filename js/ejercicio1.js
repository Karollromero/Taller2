const palabra = ["Manzana", "Banana", "Cereza", "Durazno", "Mango", "Papaya", "Pera", "Sandía", "Uva", "Kiwi"]

function addRamdomPalabra() {
    const ul = document.getElementById("palabra")
    const li = document.createElement("li")
    const randomIndex = Math.floor(Math.random() * palabra.length)
    li.textContent = palabra[randomIndex]
    document.body.appendChild(li)
}
