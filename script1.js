let select = document.querySelector('#select')

select.addEventListener('change', function () {
  if (this.value <= 5) {
    console.log('work day')
  } else {
    console.log('weekend')
  }
});

