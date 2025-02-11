let url = "https://www.omdbapi.com/?i=tt3896198&apikey=c3ecf803&t=";
let searchField = document.getElementById("searchField");
let searchBtn = document.getElementById("searchBtn");
let title = document.getElementById("title");
let genre = document.getElementById("genre");
let released = document.getElementById("released");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let plot = document.getElementById("plot");
let language = document.getElementById("language");
let writer = document.getElementById("writer");
let imdb = document.getElementById("imdb");
let awards = document.getElementById("awards");
let poster = document.getElementById("poster");
let suggestion = document.getElementById("suggestion");
let sugcont = document.getElementById("suggestion-container");
let container = document.getElementById("content-container");
let err = document.getElementById("errors");

search = () => {
    
    let apiurl = url + searchField.value;
    // console.log("hii");
    fetch(apiurl).then(data => data.json()).then((data) => {
       
        if (data.Error === "Movie not found!") {
            err.classList.remove("hidden");
            container.classList.add("hidden");
        } else {
            container.classList.remove("hidden");
            err.classList.add("hidden");
            title.textContent = "  "+data.Title;
            released.innerText = "  "+data.Released;
            genre.innerText = "  "+data.Genre;
            director.innerText = "  "+data.Director;
            actors.innerText = "  "+data.Actors;
            plot.innerText = "  "+data.Plot;
            language.innerText = "  "+data.Language;
            imdb.innerText = "  "+data.imdbRating;
            writer.innerText = "  "+data.Writer;
            awards.innerText = "  " + data.Awards;
            poster.src = data.Poster;
            if (data.imdbRating >= 7) {
                console.log("hii");
                suggestion.innerText = "Must Watch";
                sugcont.classList.add("must-watch");
                }
                else if (data.imdbRating >= 4) {
                    suggestion.textContent = "You can watch";
                    sugcont.classList.add("ok-watch");
                } else{
                    suggestion.textContent = "time waste";
                    sugcont.classList.add("boring");
            }

        }

              console.log(data);
    } );
    
    searchField.value = "";
    
}

