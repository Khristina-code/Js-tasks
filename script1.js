let date1 = new Date(2024, 0, 1);
let date2 = new Date(2024, 8, 10);

let time = date2.getTime() - date1.getTime();
let days = time / (1000 * 60 * 60 * 24)

console.log(days)



