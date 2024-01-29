function checkDate(year, month, day) {
  let date = new Date(year, month, day)
  if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
	return true
} else {
	return false
}
}

let year = 2024
let month = 12
let day = 12

console.log(checkDate(year, month, day))




