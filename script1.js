function isLeap(year) {
  if (new Date(year, 1, 29).getDate() === 29) {
    return true
  } else {
    return false
  }
}

let year = 2024
console.log(isLeap(year))




