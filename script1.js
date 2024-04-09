let elem = document.querySelector('#elem')
elem.addEventListener('click', function () {
    elem.textContent += elem.dataset.productPrice * elem.dataset.productAmount
})