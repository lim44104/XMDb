const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const singleMovieContainer = document.getElementById("sigleMovieContainerDiv");

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

function handleError() {
    console.log("Error: ",error);
}

document.onclick = function(event) {

    const target = event.target;
    if (target.tagName.toLowerCase() === 'img'){
        console.log('works!');
        const movieId = target.dataset.movieId;
        //console.log(target);
        //console.log(target.dataset);
        console.log(movieId);

        const path =`/movie/${movieId}`;
        const url = generateUrl(path);
        fetch(url)
            .then((res) => res.json())
            //.then((data) => singleMovie(data,movieId))
            .then((data) => console.log(data.title))
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

    }

    //not works!!
    /*
    if (target.id === 'content-close'){
        const content = target.parentElement;
        content.classList.remove('content-display');
    }
    */
}