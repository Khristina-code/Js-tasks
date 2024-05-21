let elems = document.querySelectorAll('.elem')

let map = new Map;

for (let elem of elems) {
	map.set(elem, []);
}

for (let elem of elems) {
	elem.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      let value = parseFloat(this.value);
    if (!isNaN(value)) {
       map.get(this).push(value);
       this.value = ''; 
    }
		}
	});

            
  elem.addEventListener('blur', function() {
		console.log(map.get(this));
  });
}
