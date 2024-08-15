const API_KEY = "api_key=8933da0a385140d9190e85f029ae43b5";
const BASE_URL = "https://api.themoviedb.org/3/";
const MOVIE_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const SEARCHMOVIE_URL = `${BASE_URL}search/movie?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// const fetchMovies = (url) =>{ // this is promise
//       fetch(url)
//     .then((reponse)=> reponse.json())
//     .then((data)=>{
//         console.log(data)
//     })
// };

// fetchMovies(MOVIE_URL)
 
const fetchMovies = async (url)=>{
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: $(response.status)`)
        };
        const data = await response.json(); 
        showMovies(data.results);
        console.log(data.results);
    } catch (error) {
        console.log(error);
    };
};


// const showMovies = (movies)=>{
//     movies.forEach((movie) =>{
//         console.log(movie)
//     });
// }

fetchMovies(MOVIE_URL) 

const movieContainer = document.querySelector('.movieContainer');

const showMovies = (movies) => {
   

    movies.forEach((movie) => { 
        const {title, overview, vote_average, poster_path} = movie;
        console.log(movie)
    const divTag = document.createElement('div');
    divTag.classList.add('movieBox');
    divTag.innerHTML = 
    `<div class="image">
        <img src="${IMAGE_URL}${poster_path}" alt="${title}">
    </div>
        <div class="titleAndRating">
        <p>${title}</p>
        <p>${vote_average}</p>
    </div>
        <div class="movieDescription">
    <p>${overview}</p>
    </div>`

    movieContainer.appendChild(divTag);
    })
}

function createInnerHTML(movieDetails) {
    <p>$(overview)</p>
    ;
}

const searchMovieForm = document.querySelector('.searchInput')

const inputText = document.querySelector('.search')
console.log(inputText)

const inputText = document.querySelector('.search')
const searchMovieForm.addEventListener('keyup',(e)=>{
    e.preventDefault();
    const searchValue = inputText.ariaValueMax;
    if(searchValue){
        fetch(SEARCHMOVIE_URL);
    }
    else{
        fetchMovies(MOVIE_URL)
    }
  
})

