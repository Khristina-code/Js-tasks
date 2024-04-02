let elems = document.querySelectorAll('div')

for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('click', function () {
        this.textContent += this.dataset.num
    }) 
 }