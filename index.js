function fetchBooks() {
  const response = fetch('https://anapioficeandfire.com/api/books')
  .then(function(rps){
    return rps.json();
  })
  .then(function(json){
    renderBooks(json);
  });
  return response;
};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})



