let date = new Date()
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
let date2 = new Date(date.getFullYear(), date.getMonth(), 15)

if (date1 > date2) {
  console.log('Минула половина місяця')
} else if (date < date2) {
  console.log('Ще не минула половина місяця')
}
