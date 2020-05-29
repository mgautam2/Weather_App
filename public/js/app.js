console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const message1 = document.querySelector('#p1')
const message2 = document.querySelector('#p2')


// window.addEventListener('load' , () => search.focus())



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    
    message1.textContent = 'Loading!!!'
    message2.textContent = ''

    fetch('/weather?address=' + location)
      .then((response) => response.json())
      .then((data) => {
            if (data.error) {
                console.log(data.error)
                message1.textContent = 'Wrong Input. Try Again!'
                message2.textContent = ''
            } else {
                console.log(data.location)
                console.log(data.forecast)
                
                message1.textContent = data.location
                message2.textContent = data.forecast
            }
        })
      })
      
      

      

      
      
  

