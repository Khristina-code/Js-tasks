let elem = document.querySelector('#button')
elem.addEventListener('click', func1)

function func1() {
console.log(this.value++)
}
	
