let date1  = new Date(2005, 11, 14);
let date2 = new Date();

let res = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());
console.log(res);



