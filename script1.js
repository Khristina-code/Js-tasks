let elem = document.querySelector('#elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func.apply(elem, ['John', 'Smit']);
