

//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');
const movieContainer = document.querySelector('#movie-container');

function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section';

    movies.map((movie) => {
        if (movie.poster_path){
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('data-movie-id',movie.id);

            section.appendChild(img);
            
            
            /*
            return `<img 
                src=${imageUrl + movie.poster_path} 
                data-movie-id=${movie.id}
            />`;
            */
            
        }
    })
    return section;
}

function movieSecSec(movies) {
    //const section = document.createElement('section');
    //section.classList = 'section';
    const movieSec = document.getElementById("movieSec");

    movies.map((movie) => {
        if (movie.poster_path){
            let output = "";
            output +=
                '<h2 id="movieMainTitle">Movie</h2>' + '<div class="card-columns">';
            for (const i in movies){
                const movie = movies[i];
                output += 
                    '<div class="card">' +
                    '<a href="movie.html">' +
                    '<img src="' +
                    imageUrl + movie.poster_path +
                    '" class="card-img-top" alt="' +
                    movie.title +
                    '"></a>' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' +
                    movie.title +
                    "</h5>";
                if(movie.overview !=null) {
                    output +=
                        '<p style="font-size: 12px;" class="card-text">' +
                        movie.overview +
                        "</p>";
                }
                output +=
                    "</div>" +
                    '<div class="card-footer">' +
                    '<small style="line-height: 1;" class="text-muted">' +
                    results["attributionText"] +
                    "</small>" +
                    "</div>" +
                    "</div>";

            }
            /*
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('data-movie-id',movie.id);

            section.appendChild(img);
            */
            /*
            return `<img 
                src=${imageUrl + movie.poster_path} 
                data-movie-id=${movie.id}
            />`;
            */
        }
        output += "</div>";
        movieSec.innerHTML = output;
    })

    //return section;
}

function createMovieContainer(movies,tittle = '') {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const header =document.createElement('h2');
    header.innerHTML = tittle;

    /*
    const content = document.createElement('div');
    content.classList = 'content';
    const contentClose = `<p id="content-close">X</p>`

    content.innerHTML = contentClose;
    */
    const section = movieSection(movies);

    /*
    const movieTemplate = `
        <h2>${tittle}</h2>
        <section class="section" id="movieSec">
            ${movieSection(movies)}
        <section>`
        +
        `<div class="content">
            <p id="content-close">X</p>
        <div>`;
    */

    //movieElement.innerHTML = movieTemplate;
    movieElement.appendChild(header);
    movieElement.appendChild(section);
    //movieElement.appendChild(content);
    return movieElement;
}

function renderSearchMovies(data) {
    movieSearchable.innerHTML = '';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    movieSearchable.appendChild(movieBlock);
    console.log('Data: ',data);
}

function renderSearchSec(data) {
    const movies = data.results;
    movieSecSec(movies);
}

/*
function homeMovie(data){
    const movies = data.results;
    movieSection = document.getElementById("movieSection");
    console.log('Movies: ',movies);

}
*/

function renderMovies(data) {
    const movies = data.results;
    const movieBlock = createMovieContainer(movies, this.tittle);
    movieContainer.appendChild(movieBlock);
    console.log('Data: ',data);
}

function handleError() {
    console.log("Error: ",error);
}

buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    //searchMovie(value);
    //singMovie(value);

    inputElement.value = '';
    console.log('Value: ',value);
}



/*
function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}
*/

/*
function createVideoTemplate(data) {
    //const content = this.content;
    //document.getElementById("testing").innerHTML = '<div id="testing"></div>'
    console.log("Videos: ",data);
    //content.innerHTML = '<p id="content-close">X</p>';
    const videos = data.results;
    const length = videos.length > 1 ? 1 : videos.length;
    const iframeContainer = document.createElement('div');

    for (let i = 0; i < length; i++){
        const video = videos[i];//video
        const iframe = createIframe(video);
        iframeContainer.appendChild(iframe);
        document.getElementById("testing").appendChild(iframeContainer);
    }
*/

//Event Delegation
document.onclick = function(event) {

    const target = event.target;
    if (target.tagName.toLowerCase() === 'img'){
        console.log('works!');
        const movieId = target.dataset.movieId;
        //console.log(target);
        //console.log(target.dataset);
        console.log(movieId);
        //const section = target.parentElement; //section
        //const content = section.nextElementSibling; //content
        //content.classList.add('content-display');

        /*
        //movie trailer
        const path =`/movie/${movieId}/videos`;
        const url = generateUrl(path);
        fetch(url)
            .then((res) => res.json())
            .then((data) => createVideoTemplate(data))
            .catch(() => {
                console.log('Error: ',error);
            });
        */

    }

    //not works!!
    /*
    if (target.id === 'content-close'){
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
    */
}
searchMovie('spiderman');
getUpcomingMovies();
getTopRatedMovies();
getPopularMovies();
