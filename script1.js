let input = document.querySelector('#input');

input.addEventListener('blur', function () {
  let number = input.value
  
   if (number.includes('3')) {
        console.log('Число містить цифру 3.')
    } else {
        console.log('Число не містить цифру 3.')
    }
})
