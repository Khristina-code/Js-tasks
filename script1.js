function isLeap(year) {
  return new Date(year, 1, 29).getDate() === 29
}

let year = 2024
console.log(isLeap(year))