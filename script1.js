let elem = document.querySelector('#elem');

elem.addEventListener('change', function () {
  if (elem.value.length < 5) {
    elem.classList.remove('border-red')
    elem.classList.add('border-green')
  } else {
    elem.classList.remove('border-green')
    elem.classList.add('border-red')
  }
});


