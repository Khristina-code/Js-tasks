let button1 = document.querySelector('#button1')
button1.addEventListener('click', func1)
let button2 = document.querySelector('#button2')
button2.addEventListener('click', func2)
let image1 = document.querySelector('#image1')
let image2 = document.querySelector('#image2')
let src1 = "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1292351815.1709596800&semt=ais"
let src2 = "https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg"

function func1() {
 image1.src = src1
}

function func2() {
 image2.src = src2
}