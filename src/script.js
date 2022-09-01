

function fetchcars() {
    // To pass the tests, don't forget to return your fetch!
    let response = fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos')
    .then(resp => resp.json())
    .then(data => rendercars(data));
    return response;
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerHTML = book.name;
      main.appendChild(h2);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchcars();
  });