let elem = document.querySelector('#elem');

elem.addEventListener('input', function() {
  if (elem.value.length >= 5) {
    console.log('довжина досягла 5')
  }
});


