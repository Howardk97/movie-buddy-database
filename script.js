const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const movTitle = document.getElementById('mov-title');
const movImg = document.getElementById('mov-img');
const movActors = document.getElementById('actors');
const movGenre = document.getElementById('genre');
const movYear = document.getElementById('year');
const movRated = document.getElementById('rated');
const movPlot = document.getElementById('plot');

let movieTitle;

// searchInput.addEventListener("input", (e) => {
//     const inputValue = e.target.value;
//     movieTitle = inputValue;
//     console.log(movieTitle);
// })

function genInfo (e) {
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
            movTitle.textContent = data.Title;
            movImg.src = data.Poster;
            movActors.textContent = data.Actors;
            movGenre.textContent = data.Genre;
            movRated.textContent = data.Rated;
            movYear.textContent = data.Year;
            movPlot.textContent = data.Plot;
        })
        .catch(err => console.error(err)); 
    }
}


searchBtn.addEventListener("click", genInfo)