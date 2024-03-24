let inp = document.querySelectorAll('.inp');
let paragraph = document.querySelector('.paragraph')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
  let sum = 0
  for (let i = 0; i < inp.length; i++) {
    sum += Number(inp[i].value)
  paragraph.textContent = sum
}
});
