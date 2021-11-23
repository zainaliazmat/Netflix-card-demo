import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./movieform.css";

export const MovieForm = (props) => {
  const { id, title, URL, releaseDate, timeDuration, gener, age } = props;

  const [ID, setID] = useState(id);
  const [Title, setTitle] = useState(title);
  const [ReleaseDate, setReleaseDate] = useState(releaseDate);
  const [TimeDuration, setTimeDuration] = useState(timeDuration);
  const [Gener, setGener] = useState(gener);
  const [Age, setAge] = useState(age);
  const [ImageURL, setImageURL] = useState(URL);

  if (ID === "") {
    setID(Date.now());
  }

  const movieInfo = {
    id: ID,
    title: Title,
    releaseDate: ReleaseDate,
    timeDuration: TimeDuration,
    gener: Gener,
    age: Age,
    URL: ImageURL,
  };

  const isFieldsEmpty = () => {
    if (
      Title === "" ||
      ReleaseDate === "" ||
      TimeDuration === "" ||
      Gener === "" ||
      Age === "" ||
      ImageURL === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="Movie-Form">
      <AiOutlineClose
        className="form-close"
        onClick={() => props.show(false)}
      />
      <h1 className="form-name">Add Movie</h1>
      <form action="" className="movie-info">
        <div className="movie-title info">
          <span>Title</span>
          <input
            type="text"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter movie name..."
          />
        </div>

        <div className="movie-release-date info">
          <span>Release Date</span>
          <input
            type="text"
            value={ReleaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            placeholder="dd-mmm-yyyy"
          />
        </div>
        <div className="movie-time info">
          <span>Time Duration</span>
          <input
            type="text"
            value={TimeDuration}
            onChange={(e) => setTimeDuration(e.target.value)}
            placeholder="00h 00m"
          />
        </div>
        <div className="movie-gener info">
          <span>Gener</span>
          <input
            type="text"
            value={Gener}
            onChange={(e) => setGener(e.target.value)}
            placeholder="Movie gener..."
          />
        </div>

        <div className="movie-age info">
          <span>Age Limit</span>
          <input
            type="text"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age+"
          />
        </div>

        <div className="movie-image-url info">
          <span>Image URL</span>
          <input
            type="text"
            value={ImageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter movie image url..."
          />
        </div>
      </form>
      <div className="add-movie-btn">
        <button
          onClick={() => {
            props.newMovieInfo(movieInfo, isFieldsEmpty());
            props.show(isFieldsEmpty());
          }}
        >
          <span>ADD MOVIE</span>
        </button>
      </div>
    </div>
  );
};
