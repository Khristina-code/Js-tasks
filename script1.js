let input = document.querySelector('#inp');

input.addEventListener('blur', function () {
  let sum = 0 
  let numbers = input.value.split('')
  for (let digits of numbers) {
    sum += Number(digits)
  }
  console.log(sum)
});
