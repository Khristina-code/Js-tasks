let elem = document.querySelector('#elem')
let min = Number(elem.getAttribute('data-min'))
let max = Number(elem.getAttribute('data-max'))
elem.addEventListener('blur', function () {
    let myValue = elem.value
    if (myValue.length < min || myValue.length > max) {
        console.log('кількість введених символів не збігається із заданим')
    }
        else {
            console.log('одинакова кількість')
        }
    })