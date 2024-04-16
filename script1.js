let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
       if (this.classList.contains('colored')) {
            this.classList.remove('colored');
        } else {
            this.classList.add('colored');
        }	
    });
}
