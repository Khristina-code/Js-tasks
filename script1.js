function* func() {
  let prev = 0
  let curr = 1
  yield prev;
  yield curr;
  while (true) {
    let next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
  }
}

let generator = func()

for (let i = 0; i < 10; i++) {
  console.log(generator.next().value)
}