let select = document.querySelector('#select');
let paragraph = document.querySelector('p')
let button = document.querySelector('button')

button.addEventListener('click', function () {
    paragraph.textContent = select.value
})

