//Initial value
const apikey = '5a6524ebb7458c68806548b48e1b9f61';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=5a6524ebb7458c68806548b48e1b9f61';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

function generateUrl(path) {
    const url = `https://api.themoviedb.org/3${path}?api_key=5a6524ebb7458c68806548b48e1b9f61`;
    return url;
}

function handleError() {
    console.log("Error: ",error);
}

function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}

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

function printRes(data){
    console.log(data);
}

function movieTrend() {
    const path = '/trending/movie/week';
    const url = generateUrl(path);
    
    requestMovies(url, trendMov, handleError);
}

function searchActor(value) {
    const path = '/search/person';
    const url = generateUrl(path) + '&query=' + value;

    requestMovies(url, homeAct, handleError);
}

function latestActor() {
    const path = '/person/popular';
    const url = generateUrl(path);

    requestMovies(url, trendAct, handleError);
}

function searchTv(value) {
    const path = '/search/tv';
    const url = generateUrl(path) + '&query=' + value;

    requestMovies(url, homeTv, handleError);
}

function tvTrend() {
    const path = '/trending/tv/week';
    const url = generateUrl(path);
    
    requestMovies(url, trendTv, handleError);
}

function getUpcomingMovies() {
    const path = '/movie/upcoming';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Upcoming Movies'});
    requestMovies(url, render, handleError);
}

function getTopRatedMovies() {
    const path = '/movie/top_rated';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Top Rated Movies'});
    requestMovies(url, render, handleError);
}

function getPopularMovies() {
    const path = '/movie/popular';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Popular Movies'});
    requestMovies(url, render, handleError);
}

function nowPlayingMovies() {
    const path = '/movie/now_playing';
    const url = generateUrl(path);
    const render = renderMovies.bind({tittle: 'Now Playing Movies'});
    requestMovies(url, render, handleError);
}


function getVideosById(movieId){
    const url = generateUrl(`/movie/${movieId}/videos`);
    //const render = createVideoTemplate(data);
    requestMovies(url,createVideoTemplate,handleError);
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

function getVideosById2(movieId){
    const url = generateUrl(`/movie/${movieId}/videos`);
    //const render = createVideoTemplate(data);
    requestMovies(url,createVideo,handleError);
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

function getVideosTv(id){
    const url = generateUrl(`/tv/${id}/videos`);
    //const render = createVideoTemplate(data);
    requestMovies(url,createVideoTemplate,handleError);
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

function getVideosTv2(id){
    const url = generateUrl(`/tv/${id}/videos`);
    requestMovies(url,createVideo,handleError);
}


