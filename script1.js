let button = document.querySelector('#button')
button.addEventListener('click', func)
	
let link = document.querySelector('.link')

function func() {
  link.textContent += '(' + 'href' + ')'
  this.removeEventListener('click', func)
}