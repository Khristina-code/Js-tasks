let numbers = document.querySelectorAll('.numbers li')
for (let number of numbers) {
  number.addEventListener('click', func)
}

function func() {
  this.textContent++
  this.removeEventListener('click', func)
}