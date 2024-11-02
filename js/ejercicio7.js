document.addEventListener('keydown', function(event) {
    const caracter = event.key
    const codigo = event.keyCode
    document.getElementById('caracter').textContent = caracter
    document.getElementById('codigo').textContent = codigo
})
