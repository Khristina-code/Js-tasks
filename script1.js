function lastDayOfMonth(month, year) {
  let firstDay = new Date(year, month, 1)
  let lastDay = new Date(firstDay - 1)
  return lastDay
}

let month = 3
let year = 2020

let lastDay = lastDayOfMonth(month, year)
console.log(lastDay)




