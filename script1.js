let select = document.querySelector('#select');

select.addEventListener('change', function () {
  let year = select.value
    if (new Date(year, 1, 29).getDate() === 29) {
      console.log('це високосний рік') 
    } else {
        console.log('не високосний рік')
      }
    
})

