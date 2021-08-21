import './App.css';
import {useState, useEffect} from 'react'

function App() {

  let [movie, changeMovie] = useState("");
  let [title, changeTitle] = useState("Avengers Infinity War");

  useEffect(() => {callAPI()}, [])

    function readTitle(title)
    {
      changeTitle(title);
    }

    function callAPI()
    {
      let URL = `https://www.omdbapi.com/?t=${title}&apikey=a6326b75`;
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          changeMovie(data);
        })
        .catch((err) => console.log(err));
    }

  return (
    <div className="App">
      
      <h1 className="title">Movie Data Search</h1>

      <div className="search-container">
        <input type="search" placeholder="Enter Film Name" onChange={(event) => {readTitle(event.target.value)}} className="search-bar"/>
        <button className="search-btn" onClick={callAPI()}>Search</button>  
      </div>
      

      <div className="movie-container">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster"/>
        <div className="movie-details">
          <h2 className="movie-title">{movie.Title}</h2>
          <p className="movie-data"><strong>Genre: </strong>{movie.Genre}</p>
          <p className="movie-data"><strong>Release: </strong>{movie.Released}</p>
          <p className="movie-data"><strong>Director: </strong>{movie.Director}</p>
          <p className="movie-data"><strong>Writers: </strong>{movie.Writer}</p>
          <p className="movie-data"><strong>Actors: </strong>{movie.Actors}</p>
          <p className="movie-data"><strong>Awards: </strong>{movie.Awards}</p>
          <p className="movie-data"><strong>IMDb Rating: </strong>{movie.imdbRating}</p>
          <p className="movie-data"><strong>Box Office: </strong>{movie.BoxOffice}</p>
          <p className="movie-data"><strong>Production: </strong>{movie.Production}</p>
          <p className="movie-plot"><strong>Plot</strong><br/> {movie.Plot}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
