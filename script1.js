"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
  square(this)

	function square(param) {
		return param.value * param.value;
  }
  console.log(square(this))
}
