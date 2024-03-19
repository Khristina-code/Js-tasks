let years = document.querySelectorAll('.years li')
let sum = 0
for (let i = 0; i < years.length; i++) {
  let year = years[i].textContent
  let resultSum = 0

  for (let j = 0; j < year.length; j++) {
    resultSum += Number(year[j])
  }

  if (resultSum === 6) {
    sum += Number(year)
  }
}
console.log(sum)