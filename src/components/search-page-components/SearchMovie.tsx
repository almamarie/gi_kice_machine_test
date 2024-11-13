import React from "react";
import styles from "./SearchMovie.module.css";
import { Movie } from "../../types/types";
import { Link } from "react-router-dom";

const SearchMovie = (props: { movie: Movie }) => {
  const { movie } = props;
  //   movie.backdropPath = `https://image.tmdb.org/t/p/original/${movie.backdropPath}`;
  console.log("Movie: kjdsfvdfkubfdsu idfb", movie);
  return (
    <article className={styles["movie-item"]}>
      <img src={movie.backdropPath} alt={movie.title} />
      <div className={styles["movie-item-content"]}>
        <div>
          <h2>{movie.title}</h2>
          <p className="movie-item-date">Title: {movie.releaseDate}</p>
          <p className="movie-item-location">
            Vote Average: {movie.voteAverage}
          </p>
          <p className="movie-item-location">VoteCount: {movie.voteCount}</p>
        </div>
        <p>
          <Link to={`/movie/${movie.id}`} className="button">
            View Details
          </Link>
        </p>
      </div>
    </article>
  );
};

export default SearchMovie;
