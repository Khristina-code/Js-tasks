let paragraphs = document.querySelectorAll('.paragraph')
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('data-num', i+1)
}