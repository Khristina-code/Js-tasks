let input = document.querySelector('.inp');

input.addEventListener('blur', function () {
  let sum = 0 
  let numbers = input.value.split('')
  sum = Number(numbers[0]) + Number(numbers[1])
  console.log(sum)
});
