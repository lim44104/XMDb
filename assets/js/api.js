/*jshint esversion: 6 */
//From line 5 to 34 in api.js and line 23 to 100 in main2.js refer to: 
//https://www.youtube.com/watch?v=mWg2udweauY&t=3471s
//Initial value
const apikey = '5a6524ebb7458c68806548b48e1b9f61';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=5a6524ebb7458c68806548b48e1b9f61';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

//function to generate URL, make movie path dynamic
function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=5a6524ebb7458c68806548b48e1b9f61`;
    return url;
}

//function to handle error
function handleError() {
    alert("Failed connection. Please Try Again.");//alert user and tell them to try again 
    console.log("Error: ",error);
}

//function to fetch, run function and handle error
function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())//convert response to json
        .then(onComplete)//oncomplete run function
        .catch(onError);//onerror handle error
}

//function to search movie
function searchMovie(value) {
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleError);
}

function searchMovie2(value) {
    const path = '/search/movie';
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, homeMov, handleError);
}

//function to display trending movie
function movieTrend() {
    const path = '/trending/movie/week';
    const url = generateUrl(path);
    requestMovies(url, trendMov, handleError);
}

//function to search actor
function searchActor(value) {
    const path = '/search/person';
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, homeAct, handleError);
}

//function to display trending actor
function latestActor() {
    const path = '/person/popular';
    const url = generateUrl(path);
    requestMovies(url, trendAct, handleError);
}

//function to search tv show
function searchTv(value) {
    const path = '/search/tv';
    const url = generateUrl(path) + '&query=' + value;
    requestMovies(url, homeTv, handleError);
}

//function to display trending tv shows
function tvTrend() {
    const path = '/trending/tv/week';
    const url = generateUrl(path);   
    requestMovies(url, trendTv, handleError);
}

//function to display upcoming movies
function getUpcomingMovies() {
    const path = '/movie/upcoming';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Upcoming Movies'});
    requestMovies(url, render, handleError);
}

//function to display top rated movies
function getTopRatedMovies() {
    const path = '/movie/top_rated';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Top Rated Movies'});
    requestMovies(url, render, handleError);
}

//function to display slideshow of the popular movies
function slideShowMovies() {
    const path = '/movie/popular';
    const url = generateUrl(path);

    requestMovies(url, slideShowMov, handleError);
}

//function to display popular movies
function getPopularMovies() {
    const path = '/movie/popular';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Popular Movies'});
    requestMovies(url, render, handleError);
}

//function to display now playing movies
function nowPlayingMovies() {
    const path = '/movie/now_playing';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Now Playing Movies'});
    requestMovies(url, render, handleError);
}

//function to get movie's videos
function getVideosById(movieId){
    const url = generateUrl(`/movie/${movieId}/videos`);
    requestMovies(url,createVideoTemplate,handleError);
}

function getVideosById2(movieId){
    const url = generateUrl(`/movie/${movieId}/videos`);
    requestMovies(url,createVideo,handleError);
}

//function to get tv show's videos
function getVideosTv(id){
    const url = generateUrl(`/tv/${id}/videos`);
    requestMovies(url,createVideoTemplate,handleError);
}

function getVideosTv2(id){
    const url = generateUrl(`/tv/${id}/videos`);
    requestMovies(url,createVideo,handleError);
}


