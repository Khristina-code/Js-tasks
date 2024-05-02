let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

func.apply(elem, ['John', 'Smit']);

func = func.bind(elem)
func('Eric', 'Luis')
