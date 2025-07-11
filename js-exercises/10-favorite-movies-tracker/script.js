const movies = [];

function updateMovieList() {
  const list = document.getElementById('movieList');
  list.innerHTML = '';
  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.textContent = `${movie} is my #${index + 1} movie!`;
    list.appendChild(li);
  });
}

function addMovie() {
  const input = document.getElementById('movieInput');
  const title = input.value.trim();
  if (title) {
    movies.push(title);
    updateMovieList();
    input.value = '';
    input.focus();
  }
}

document.getElementById('addMovieButton').addEventListener('click', addMovie);

