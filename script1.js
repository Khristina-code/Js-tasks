let elem = document.querySelector('#elem')
elem.addEventListener('focus', func1)
elem.addEventListener('blur', func2)

function func1() {
console.log(this.value = 1)
}

function func2() {
  console.log(this.value = 2)
}
	
