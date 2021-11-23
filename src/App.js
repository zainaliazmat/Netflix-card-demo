import React from "react";
import "./App.css";
import { MovieForm } from "./components/add-movie-form/movieform";
import { MovieCard } from "./components/card";
import { useState } from "react";
import data from "./components/data";

function App() {
  console.log(data);
  let dummy = [
    {
      id: "",
      title: "",
      URL: "",
      releaseDate: "",
      timeDuration: "",
      gener: "",
      age: "",
    },
  ];

  const [movieData, setMovieData] = useState(data);
  const [editMovie, setEditMovie] = useState();
  const [show, setShow] = useState(false);

  const addMovie = () => {
    setEditMovie(dummy);
    setShow(true);
  };

  const eidtMovie = (movieId) => {
    setEditMovie(
      movieData.filter((movie) => {
        return movie.id === movieId;
      })
    );
    setShow(true);
  };

  const deleteMovie = (movieId) => {
    setMovieData(
      movieData.filter((movie) => {
        return movie.id !== movieId;
      })
    );
  };

  const newMovie = (Movie, addMovie) => {
    if (addMovie) {
    } else {
      let notReplace = true;
      let temp = [];
      movieData.map((movie) => {
        if (movie.id === Movie.id) {
          notReplace = false;
          return temp.push(Movie);
        } else {
          return temp.push(movie);
        }
      });
      if (notReplace) {
        temp.push(Movie);
      }
      setMovieData(temp);
    }
  };

  const closeForm = (show) => {
    setShow(show);
  };

  return (
    <div className="App">
      {show ? (
        <div className="movie-form-area">
          <div className="movie-form">
            {editMovie.map((movie) => (
              <MovieForm
                id={movie.id}
                title={movie.title}
                URL={movie.URL}
                releaseDate={movie.releaseDate}
                timeDuration={movie.timeDuration}
                gener={movie.gener}
                age={movie.age}
                newMovieInfo={newMovie}
                show={closeForm}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="header">
        <button className="header-add-movie-btn" onClick={addMovie}>
          Add Movie
        </button>
      </div>

      <div className="moviecard-display">
        {movieData.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title}
            URL={movie.URL}
            releaseDate={movie.releaseDate}
            timeDuration={movie.timeDuration}
            gener={movie.gener}
            age={movie.age}
            delete={deleteMovie}
            edit={eidtMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
