let button = document.querySelector('#button')
button.addEventListener('click', func)

function func() {
  if (button.value >= 10) {
    this.removeEventListener('click', func)
  }
  button.textContent = button.value++
}