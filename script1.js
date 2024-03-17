let paragraphs = document.querySelectorAll('.elem')
for (let elem of paragraphs) {
  elem.addEventListener('click', func)
}

function func() {
  this.textContent = this.textContent + '!'
  this.removeEventListener('click', func)
}