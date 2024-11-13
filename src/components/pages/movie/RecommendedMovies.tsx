import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { fetchRecommendedMovies } from "../../../utils/http/movies.http";
import LoadingIndicator from "../../ui/LoadingIndicator";
import styles from "./RecommendedMovies.module.css";
import ErrorBlock from "../../ui/ErrorBlock";
import { Link } from "react-router-dom";

const RecommendedMovies = (props: { id: string | undefined }) => {
  const { id } = props;

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["events", "recommended movies", { id }],
    queryFn: ({ signal }) => fetchRecommendedMovies({ signal, id }),
    enabled: id !== undefined,
  });

  return (
    <div className={styles.wrapper}>
      <h2> Similer Movies</h2>

      {isLoading && <LoadingIndicator />}

      {error && (
        <ErrorBlock
          title={"An error occured"}
          message={"Error fetching recommended movies"}
        />
      )}
      <li className={styles.list}>
        {data &&
          data.slice(0, 6).map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className={styles.link}
            >
              <div className={styles.movie}>
                <img
                  className={styles["rec-img"]}
                  src={movie.posterPath}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </div>
            </Link>
          ))}
      </li>
    </div>
  );
};

export default RecommendedMovies;
