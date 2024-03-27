let input = document.querySelector('.words');


input.addEventListener('blur', function () {
  let words = input.value
  let wordsArray = words.split(' ')
  let wordsCount = wordsArray.length
  console.log(wordsCount)
});
