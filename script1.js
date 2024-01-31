function findPreviousLeapYear(currentYear) {
  let year = currentYear - 1

  while (!isLeap(year)) {
    year--;
  }

  return year
}

function isLeap(year) {
  return new Date(year - 1, 1, 29).getDate() === 29
}

let currentYear = new Date().getFullYear()

console.log(findPreviousLeapYear(currentYear))

