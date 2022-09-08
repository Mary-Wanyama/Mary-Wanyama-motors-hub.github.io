document.addEventListener('DOMContentLoaded', function(event) {

    event.preventDefault()
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(res => res.json())
    .then(data => {
        data.forEach(marcas => {
            const li = `<li id="li"><h4>${marcas.nome}</h4><span class="stars">★<span><span class="stars">★<span><span class="stars">★<span><span class="stars">★
            <span><span class="stars">★<span>
            </br>
            &nbsp;<button class="btn">♥</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="order">order</button>
            </li>`
  

            document.querySelector('#ul').insertAdjacentHTML('beforeend', li)
        });
    })

       document.getElementsByClassName('order').forEach(addEventListener('click', function(e) {
        e.preventDefault()
        if (document.getElementById('p').innerHTML === 'paragraph') {
            document.getElementById('p').innerHTML = 'I will share the link next time'
            document.getElementById('p').style.color ='blue'

            
        } else if(document.getElementById('p').innerHTML === 'I will share the link next time'){
            document.getElementById('p').innerHTML = 'paragraph'
            document.getElementById('p').style.color ='red'
        }
           
           console.log(event.target.value)
       }))

    //    document.getElementById('select').addEventListener('change', function (e) {
    //     e.preventDefault()
    //     let pick = document.getElementById('select').value
    //     let displayed = document.getElementsByTagName('h4').innerHTML
    //     if  (displayed[0]= pick) {
    //         this.displayed.setAttribute('class', 'display')
    //     } 
    //     else {
            
    //     }
    //    })
       const form = document.querySelector('#form')
       form.addEventListener('submit', function(e) {
            e.preventDefault()
            
            const cars = new FormData(form)
            console.log([...cars])
            fetch('http://localhost:3000/cars', {
                method : 'POST',
                body : cars
            })
            .then(res => res.json())
            .then(data => console.log(data))
       })

})

        

