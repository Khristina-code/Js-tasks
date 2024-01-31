function countFriday13() {
  let date1 = new Date()
  let year = date1.getFullYear()
  let count = 0

  for (let month = 0; month < 12; month++) {
    let date2 = new Date(year, month, 13)
    if (date2.getDay() === 5) {
      count++
    }
  }
  return count
}

console.log(countFriday13())