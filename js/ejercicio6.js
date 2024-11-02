document.addEventListener('mousemove', function(event) {
    const posicion = `X: ${event.clientX}, Y: ${event.clientY}`
    const posicionElemento = document.getElementById('posicion')
    posicionElemento.textContent = posicion
    posicionElemento.style.position = 'absolute'
    posicionElemento.style.left = `${event.clientX + 10}px`
    posicionElemento.style.top = `${event.clientY + 10}px`
})
