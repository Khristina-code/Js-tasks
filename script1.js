let elem = document.querySelector('#elem')
elem.addEventListener('click', function() {
    elem.textContent += elem.dataset.text
})