//select elements from the DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');
const movieContainer = document.querySelector('#movie-container');
const movieSec = document.getElementById("movieSec");
const trendSec = document.getElementById("trendSec");
const singleMovieContainer = document.getElementById("sigleMovieContainerDiv");
const movieName = document.getElementById("movieName");
const movieDescription = document.getElementById("movieDescription");
const movieImage = document.getElementById("movieImage");
const actorName = document.getElementById("actorName");
const actorDescription = document.getElementById("actorDescription");
const actorImage = document.getElementById("actorImage");
const tvName = document.getElementById("tvName");
const tvDescription = document.getElementById("tvDescription");
const tvImage = document.getElementById("tvImage");

function movieSection(movies) {
    const section = document.createElement('section');
    section.classList = 'section';

    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    section.appendChild(cardColumn);
    
    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);

    movies.map((movie) => {
        if (movie.poster_path){
            
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

            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
            
            
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

            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function similarMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Similar Movie";
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

            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendMov(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Trending";
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

            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function testTest(data){
    const tvs = data.results;
    console.log(tvs);
}

function homeAct(data){
    movieSec.innerHTML = '';
    const actors = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Actor";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    //console.log(movies);
    //console.log(movies.length);
    //let output = "";
    
    //output +=
    //    `<h2 id="movieMainTitle">Movie</h2>` + `<div class="card-columns">`;
    
    actors.map((actor) => {
        if(actor.profile_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-2');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"actor.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',actor.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + actor.profile_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = actor.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = actor.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendAct(data){
    movieSec.innerHTML = '';
    const actors = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Trending";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    //console.log(movies);
    //console.log(movies.length);
    //let output = "";
    
    //output +=
    //    `<h2 id="movieMainTitle">Movie</h2>` + `<div class="card-columns">`;
    
    actors.map((actor) => {
        if(actor.profile_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-2');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"actor.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',actor.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + actor.profile_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = actor.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = actor.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function homeTv(data){
    movieSec.innerHTML = '';
    const tvs = data.results;
    console.log(tvs);

    const header =document.createElement('h2');
    header.innerHTML = "TV";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    //console.log(movies);
    //console.log(movies.length);
    //let output = "";
    
    //output +=
    //    `<h2 id="movieMainTitle">Movie</h2>` + `<div class="card-columns">`;
    
    tvs.map((tv) => {
        if(tv.poster_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-2');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"tv.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',tv.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + tv.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = tv.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h5');
            rating.innerHTML = tv.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = tv.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function trendTv(data){
    movieSec.innerHTML = '';
    const tvs = data.results;
    console.log(tvs);

    const header =document.createElement('h2');
    header.innerHTML = "Trending";
    const cardColumn = document.createElement('div');
    cardColumn.setAttribute('class','card-group');
    header.appendChild(cardColumn);

    const cardRow = document.createElement('div');
    cardRow.setAttribute('class','row flex-row flex-nowrap');
    cardColumn.appendChild(cardRow);
    //console.log(movies);
    //console.log(movies.length);
    //let output = "";
    
    //output +=
    //    `<h2 id="movieMainTitle">Movie</h2>` + `<div class="card-columns">`;
    
    tvs.map((tv) => {
        if(tv.poster_path){
            //const movie = movies[i];
            const cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','col-2');
            cardRow.appendChild(cardDiv);

            const movieBox = document.createElement('div');
            movieBox.setAttribute('class','card');
            cardDiv.appendChild(movieBox);
            
            const moviePage = document.createElement('a');
            moviePage.setAttribute('href',"tv.html");
            moviePage.setAttribute('class','clickToGetId');
            moviePage.setAttribute('data-id',tv.id);
            movieBox.appendChild(moviePage);
            
            const img = document.createElement('img');
            img.src = imageUrl + tv.poster_path;
            img.setAttribute('class','card-img-top clickme');
            img.alt = tv.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);

            const rating = document.createElement('h5');
            rating.innerHTML = tv.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = tv.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}


function renderMovies(data) {
    const movies = data.results;
    const movieBlock = createMovieContainer(movies, this.tittle);
    movieContainer.appendChild(movieBlock);
    console.log('Data: ',data);
}

function creditMov(data){
    movieSec.innerHTML = '';
    const movies = data.cast;

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

            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.title;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}

function similarTv(data){
    movieSec.innerHTML = '';
    const movies = data.results;

    const header =document.createElement('h2');
    header.innerHTML = "Similar Shows";
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
            img.alt = movie.name;
            moviePage.appendChild(img);
            
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class','card-body');
            movieBox.appendChild(cardBody);
            
            const rating = document.createElement('h5');
            rating.innerHTML = movie.vote_average;
            cardBody.appendChild(rating);
            
            const bodyTittle = document.createElement('h5');
            bodyTittle.setAttribute('class','card-tittle');
            bodyTittle.innerHTML = movie.name;
            cardBody.appendChild(bodyTittle);
        }
        
        
        })
    
    movieSec.appendChild(header);
}


function createIframe(video) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('class','col-3');
    iframe.src = `https://www.youtube.com/embed/${video.key}`;
    iframe.width = 360;
    iframe.height = 315;
    iframe.allowFullscreen = true;

    return iframe;
}



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
}

function createVideo(data) {
    //const content = this.content;
    //document.getElementById("testing").innerHTML = '<div id="testing"></div>'
    //console.log("Videos: ",data);
    //content.innerHTML = '<p id="content-close">X</p>';
    const videos = data.results;
    const length = videos.length > 10 ? 10 : videos.length;
    const iframeContainer = document.createElement('div');
    iframeContainer.setAttribute('class','card-group');

    const iframeRow = document.createElement('div');
    iframeRow.setAttribute('class','row flex-row flex-nowrap');
    iframeContainer.appendChild(iframeRow);


    for (let i = 0; i < length; i++){
        const video = videos[i];//video
        const iframe = createIframe(video);
        iframeRow.appendChild(iframe);
        document.getElementById("testing2").appendChild(iframeContainer);
    }
}

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
        sessionStorage.setItem('id',id);
    })
}
