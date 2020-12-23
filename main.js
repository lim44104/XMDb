//Initial value
const apikey = '5a6524ebb7458c68806548b48e1b9f61';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=5a6524ebb7458c68806548b48e1b9f61';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');

function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=5a6524ebb7458c68806548b48e1b9f61`;
    return url;
}

function movieSection(movies) {
    return movies.map((movie) => {
        if (movie.poster_path){
            return `<img 
                src=${imageUrl + movie.poster_path} 
                data-movie-id=${movie.id}
            />`;
        }
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const movieTemplate = `
        <section class="section" id="movieSec">
            ${movieSection(movies)}
        <section>
        <div class="content">
            <p id="content-close"></p>
        <div>`;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

function renderSearchMovies(data) {
    movieSearchable.innerHTML = '';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ',data);
}

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    const path = '/search/movie';
    const newUrl = generateUrl(path) + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch(() => {
            console.log('Error: ',error);
        });

    inputElement.value = '';
    console.log('Value: ',value);
}

function singleMovie() {
    let output = "";
    output += '<a href="movie.html"></a>';
    document.getElementById("movieSec").innerHTML = output;

}

function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}

//Event Delegation
document.onclick = function(event) {

    const target = event.target;
    if (target.tagName.toLowerCase() === 'img'){
        console.log('works!');
        const movieId = target.dataset.movieId;
        console.log(movieId);
        const section = target.parentElement; //section
        const content = document.getElementById("content-close"); //content
        //content.classList.add('content-display');

        const path =`/movie/${movieId}/videos`;
        const url = generateUrl(path);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("Videos: ",data);
                const videos = data.results;
                const length = videos.length > 2 ? 2 : videos.length;
                const iframeContainer = document.createElement('div');

                for (let i = 0; i < length; i++){
                    const video = videos[i];//video
                    const iframe = createIframe(video);
                    iframeContainer.appendChild(iframe);
                    document.getElementById("testing").innerHTML = iframeContainer;
                }
            })
            .catch(() => {
                console.log('Error: ',error);
            });

    }

    //not works!!
    /*
    if (target.id === 'content-close'){
        const content = target.parentElement;
        content.classList.add('content-display');
    }
    */
}