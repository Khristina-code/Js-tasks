let elems = document.querySelectorAll('.elem')
for (let elem of elems) {
	elem.addEventListener('click', func);
}
function func() {
 this.textContent = Number(this.textContent) ** 2;
}