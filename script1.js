let date = new Date();
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

let time = date2.getTime() - date1.getTime()
let hours = time / (1000 * 60 * 60)

console.log(hours)
