function* func(num) {
  while (num >= 0) {
    yield num
    num -= 2
  }
}

let generator = func(8)

for (let value of generator) {
  console.log(value)
}
