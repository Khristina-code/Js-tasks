let input1 = document.querySelector('.this');
let inputs = document.querySelectorAll('.another')


input1.addEventListener('blur', function () {
  let full = input1.value
  
    let components = full.split(' ')

    inputs[0].value = components[0]
    inputs[1].value = components[1]
    inputs[2].value = components[2] 
});
