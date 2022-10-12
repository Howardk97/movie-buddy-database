const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movTitle = document.getElementById('mov-title');
const movImg = document.getElementById('mov-img');
const movActors = document.getElementById('actors');
const movGenre = document.getElementById('genre');
const movYear = document.getElementById('year');
const movRated = document.getElementById('rated');
const movPlot = document.getElementById('plot');
const homeImgContainer = document.getElementById('home-img-container');
const movDirector = document.getElementById('director');
const movWriter = document.getElementById('writer');
const awardIcon = document.getElementById('award-icon');
const award = document.getElementById("award");
const mapIcon = document.getElementById('map-icon');
const country = document.getElementById('country');
const langIcon = document.getElementById('lang-icon');
const lang = document.getElementById('lang');
const typeIcon = document.getElementById('type-icon');
const type = document.getElementById('type');
const timeIcon = document.getElementById('time-icon');
const runtime = document.getElementById('runtime');
const reviewIcon = document.getElementById('review-icon');
const review = document.getElementById('review');

let movieTitle;

// searchInput.addEventListener("input", (e) => {
//     const inputValue = e.target.value;
//     movieTitle = inputValue;
//     console.log(movieTitle);
// })

function genInfo (e) {
    if(e.key === 'Enter') {
        homeImgContainer.style.display = 'none';
        const userInput = searchInput.value;
    e.preventDefault();
    const movieURL = "https://www.omdbapi.com/?t=" + userInput + "&apikey=4e92771";

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'bc83371589msh23bd20d358b99c1p105a91jsnd199196904df',
    //         'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    //     }
    // };
    
    if(movieURL) {
        fetch(movieURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            if(data.Title) {
                movTitle.textContent = data.Title;
            }

            if(data.Poster) {
                movImg.src = data.Poster;
            }

            if(data.Actors) {
                movActors.textContent = data.Actors;
            }
            
            if(data.Genre) {
                movGenre.textContent = data.Genre;
            }
            
            if(data.Rated) {
                movRated.textContent = data.Rated;
            }
            
            if(data.Year) {
                movYear.textContent = data.Year;
            }
            
            if(data.Plot) {
                movPlot.textContent = data.Plot;
            }
            
            if(data.Director) {
                movDirector.textContent = "Director: " + data.Director;
            }
            
            if(data.Writer) {
                movWriter.textContent = "Writer: " + data.Writer;
            }
            
            if(data.Awards) {
                awardIcon.textContent = "star";
                award.textContent = data.Awards;
            }

            if(data.Country) {
                mapIcon.textContent = "map";
                country.textContent = data.Country;
            }

            if(data.Language) {
                langIcon.textContent = "language";
                lang.textContent = data.Language;
            }

            if(data.Type) {
                if(data.Type === "movie") {
                    typeIcon.textContent = "movie";
                }
                if(data.Type === "series") {
                    typeIcon.textContent = "live_tv";
                }

                type.textContent = data.Type;
            }

            if(data.Runtime) {
                timeIcon.textContent = "access_time";
                runtime.textContent = data.Runtime;
            }

            if(data.imdbRating) {
                reviewIcon.textContent = "rate_review";
                review.textContent = "IMDB Rating: " + data.imdbRating + "/10";
            }

        })
        .catch(err => console.error(err)); 
    }
    } else {
        movTitle.textContent = "No movie with this title"
    }
}

searchInput.addEventListener("keypress", genInfo)