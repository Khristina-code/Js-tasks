let elem = document.querySelector('#elem');
let nextSibling = elem.nextElementSibling
let nextNextSibling = nextSibling.nextElementSibling

if (nextNextSibling) {
  nextNextSibling.textContent += '!'
}
