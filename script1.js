let list = document.querySelector('.numbers')
let button = document.querySelector('#button')
button.addEventListener('click', function () {
    let listValue = list.querySelectorAll('li')
    for (let i = 0; i < listValue.length; i++) {
        listValue[i].style.float = 'left'
    }
})