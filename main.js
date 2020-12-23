//Initial value
const apikey = '5a6524ebb7458c68806548b48e1b9f61';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=5a6524ebb7458c68806548b48e1b9f61';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');

function movieSection(movies) {
    return movies.map((movie) => {
        return `
            <img src=${imageUrl + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const movieTemplate = `
        <section class="section">
            ${movieSection(movies)}
        <section>
        <div class="content">
            <p id="content-close"></p>
        <div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            const movies = data.results;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);
            console.log('Data: ',data);
        })
        .catch(() => {
            console.log('Error: ',error);
        });
    console.log('Value: ',value);
}