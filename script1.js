function weekendDays() {
  let count = 0
  let date1 = 2000
  let date2 = new Date().getFullYear();

  for (let year = date1; year <= date2; year++) {
    let day = new Date(year, 0, 1).getDay()
    if (day === 0 || day === 1) {
      count++
    }
  }
  return count
}

console.log(weekendDays())