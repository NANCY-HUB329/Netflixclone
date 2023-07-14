import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w300";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //a snippet of code which runs based on a specific condition
  useEffect(() => {
    //if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + fetchUrl
      );
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
      //"https://api.themoviedb.org.3/discover/tv?api_key=${API_KEY}&witg_network=213",
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  //console.table(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row_posters">
        {/*several row_poster(s) */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

      {/* container -> posters*/}
      {/** */}
    </div>
  );
}

export default Row;
