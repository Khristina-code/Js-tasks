let input = document.querySelector('.smallLetter');


input.addEventListener('blur', function () {
  let full = input.value
  
    let components = full.split(' ')

  for (let i = 0; i < components.length; i++) {
    components[i] = components[i].charAt(0).toUpperCase() + components[i].slice(1)
  } 
  input.value = components.join(' ')
});
