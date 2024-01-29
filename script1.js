let date  = new Date();
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12);

let time = date1.getTime() - date2.getTime()
let hours = time / (1000 * 60 * 60)

console.log(hours)
