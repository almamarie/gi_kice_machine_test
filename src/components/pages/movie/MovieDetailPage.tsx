import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovie, fetchMovieTrailer } from "../../../utils/http/movies.http";
import LoadingIndicator from "../../ui/LoadingIndicator";
import ErrorBlock from "../../ui/ErrorBlock";
import styles from "./MovieDetailPage.module.css";
import RecommendedMovies from "./RecommendedMovies";
import { Link } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchMovie({ signal, id }),
    enabled: id !== undefined,
  });
  const { data: trailerId } = useQuery({
    queryKey: ["events", "trailor ID", { id }],
    queryFn: ({ signal }) => fetchMovieTrailer({ signal, id }),
    enabled: id !== undefined,
  });
  console.log(`https://www.youtube.com/watch?v=${trailerId}`);
  return (
    <>
      <div className={styles.wrapper}>
        {isLoading && <LoadingIndicator />}
        {isError && (
          <ErrorBlock
            title={"Error fetching data"}
            message={"Please check the movie ID and try again"}
          />
        )}
        {data && (
          <article className={styles.article}>
            <p className={styles["home-link"]}>
              <Link to={`/`} className={styles["back-link"]}>
                Back to Search
              </Link>
            </p>
            <header>
              <h1 className={styles.title}>{`${data.title} (${
                data.releaseDate.split("-")[0]
              })`}</h1>
            </header>

            <img
              className={styles.backdrop}
              alt={data.title}
              src={data.backdropPath}
            />

            <div className={styles.summary}>
              <h3>Summary</h3>
              <p>{data.plotSummary}</p>
            </div>
            <div className={styles.averages}>
              <h3>Reviews</h3>
              <p className={styles["reviews"]}>
                <span className={styles["reviews-title"]}>Vote Count: </span>
                <span>{data.voteCount}</span>
              </p>

              <p className={styles["reviews"]}>
                <span className={styles["reviews-title"]}>Vote Average: </span>
                <span>{data.voteAverage}</span>
              </p>
            </div>

            <div className={styles["trailer-player"]}>
              <iframe
                className="trailer-player"
                width="100%" /* Adjust the width as needed */
                height="auto" /* Adjust the height as needed */
                src={`https://www.youtube.com/embed/${trailerId}`}
                title={`trailer of ${data.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </article>
        )}
      </div>
      <RecommendedMovies id={id} />
    </>
  );
};

export default MovieDetailPage;
