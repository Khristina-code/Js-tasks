let inp = document.querySelector('#inp');
let paragraph = document.querySelector('.paragraph')

inp.addEventListener('blur', function() {
paragraph.textContent += inp.value
});
