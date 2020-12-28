

//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');
const movieContainer = document.querySelector('#movie-container');
const movieSec = document.getElementById("movieSec");
const singleMovieContainer = document.getElementById("sigleMovieContainerDiv");
const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieImage = document.getElementById("movieImage");

function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section';

    movies.map((movie) => {
        if (movie.poster_path){
            
            const mpage = document.createElement('a');
            mpage.setAttribute('href',"movie.html");
            mpage.setAttribute('class','clickToGetId');
            mpage.setAttribute('data-id',movie.id);

            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('data-movie-id',movie.id);

            mpage.appendChild(img);

            section.appendChild(mpage);
            
            
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
    console.log(data.results[0].id);
    console.log(data.results[0].overview);
}

function homeMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Movie";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    console.log(movies);
    console.log(movies.length);
    //let output = "";
    
    //output +=
    //    `<h2 id="movieMainTitle">Movie</h2>` + `<div class="card-columns">`;
    
    movies.map((movie) => {
        if(movie.poster_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-2');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"movie.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',movie.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + movie.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = movie.title;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
            
            
            
            /*
            output += 
                
                `<div class="card">` +
                `<a href="movie.html">` +
                `<img src="` +
                imageUrl + movie.poster_path +
                `" class="card-img-top" alt="` +
                movie.title +
                `"></a>` +
                `<div class="card-body">` +
                `<h5 class="card-title">` +
                movie.title +
                `</h5>`;
                
            
            if(movie.overview !=null) {
                output +=
                    `<p style="font-size: 12px;" class="card-text">` +
                    movie.overview +
                    `</p>`;
            }*/
        }
        
        
        })
    
    //output += `</div>`;
    
    //movieSec.innerHTML=output;
    movieSec.appendChild(header);
}

function singleMovie(data,movieId) {
    //const movies = data.results;
    /*
    movieImage = imageUrl + data.poster_path;

    const img = document.createElement('img');
    img.src = movieImage;
    img.setAttribute('class','card-img-top');
    img.alt = data.title;
    */

    var z = document.createElement('p'); // is a node
    z.innerHTML = 'test satu dua tiga';
   
    singleMovieContainer.appendChild(z);

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



function newMovie(m){
    //location.replace("movie.html");
    console.log(m);
    console.log(m.title);
    
    //movieName.innerHTML = m.title;
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
    //event.preventDefault();
    /*
    if (target.tagName.toLowerCase() === 'img'){
    //if(target.classList.contains(clickme)){
        //console.log('works!');
        const movieId = target.dataset.movieId;
        //console.log(target);
        //console.log(target.dataset);
        //console.log(target.dataset);
        //console.log(movieId);

        const path =`/movie/${movieId}`;
        const url = generateUrl(path);
        fetch(url)
            .then((res) => res.json())
            .then(newMovie)
            .catch(() => {
                console.log('Error: ',error);
            })

        

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

    //}
    

    //not works!!
    /*
    if (target.id === 'content-close'){
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
    */

    $(document).on('click','.clickToGetId',function(){
        id = $(this).attr('data-id');
        sessionStorage.setItem('movie-id',id);
    })
}
