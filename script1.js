let button = document.querySelector('#button')
button.addEventListener('click', func)
	
let link = document.querySelector('.link')

function func() {
  link.textContent += `(${link.href})`
  this.removeEventListener('click', func)
}