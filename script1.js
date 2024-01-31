let date = new Date()
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12)

if (date1 > date2) {
  console.log('Вже був опівдень')
} else if (date < date2) {
  console.log('Ще не був опівдень')
}
