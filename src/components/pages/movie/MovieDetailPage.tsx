import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../../../utils/http/movies.http";
import LoadingIndicator from "../../ui/LoadingIndicator";
import ErrorBlock from "../../ui/ErrorBlock";
import styles from "./MovieDetailPage.module.css";
import RecommendedMovies from "./RecommendedMovies";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchMovie({ signal, id }),
    enabled: id !== undefined,
  });

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

            <div className={styles.trailer}>
              <video className={styles["trailer-player"]} controls>
                <source src={data.trailerId} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </article>
        )}
      </div>
      <RecommendedMovies id={id} />
    </>
  );
};

export default MovieDetailPage;
