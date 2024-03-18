let numbers = document.querySelectorAll('.numbers li')
for (let number of numbers) {
  number.addEventListener('click', func)
}

function func() {
  if (this.textContent < 10) {
     this.textContent++
  }
  this.removeEventListener('click', func)
}