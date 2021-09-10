const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elbtn = document.querySelector('#btn');
const elTitle = document.querySelector('#title');


elForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let number = elInput.value - 0

    if(!isNaN(number)){
        if(number % 15 === 0){
            elTitle.textContent = 'FizzBuzz'
        }else{
            if(number % 5 === 0){
                elTitle.textContent = 'Buzz'
            }else{
                if(number % 3 === 0){
                    elTitle.textContent = 'Fizz'
                }else{
                    elTitle.textContent = number
                }
            }
        }
    }else{
        elTitle.textContent = 'Raqam kiriting'
    }

    elInput.value = ''
})