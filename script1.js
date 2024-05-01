"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
  console.log(this.value * this.value)

	let square = () => {
		return this.value;
  }
  square()
}
