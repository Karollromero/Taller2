document.querySelectorAll('.ocultar').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault()
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        targetElement.style.display = targetElement.style.display === 'none' ? 'block' : 'none'
    })
})


