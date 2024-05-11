let paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
	let number = parseInt(paragraph.textContent)
	if (number % 2 === 0) {
		paragraph.classList.add('evenNumber')
	} else {
		paragraph.classList.add('oddNumber')
	}
}



