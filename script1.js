let elem = document.querySelector('#elem');
let previousSibling = elem.previousElementSibling;
let nextSibling = elem.nextElementSibling;

if (previousSibling && nextSibling) {
    let previous = previousSibling.textContent;
    previousSibling.textContent = nextSibling.textContent;
    nextSibling.textContent = previous;
}
