const button1 = document.getElementById('button1')
var tom 
button1.addEventListener('click' , () => {
  
  fetch('/chutiyap')
    .then((response) => response.json())
    .then((data) => {
         tom = data
         console.log(tom)
       } )
    .catch(error => console.log(error))
  
})

