import CustomError from "../../types/custom-error";
import { Movie, SearchMovieType } from "../../types/types";

export const searchMovies = async (searchData: SearchMovieType) => {
  if (searchData.searchTerm === undefined) {
    return;
  }
  const url =
    "https://api.themoviedb.org/3/search/movie?query=" + searchData.searchTerm;

  const response = await fetch(url, {
    signal: searchData.signal,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYzM2NjMzcxOGQ0Zjg5ZWU3NzY3N2QxNmU3OGIwYSIsIm5iZiI6MTczMTQ4ODY0NC4yNjUyODM2LCJzdWIiOiI2NzM0NmE4NTc2YWYzYWU3YjYzOGJhZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NHQjdB0VbFRCIlsB71YD0FOwL1c9Kl3_wHPzkHLOEcQ`,
    },
  });

  const data = await response.json();

  //   console.log("Response data: ", data);
  if (!response.ok) {
    const error = new CustomError(
      response.status,
      "An error occurred while fetching products",
      response.status === 500
        ? { message: "An error occured. Please try again later" }
        : await data
    );

    throw error;
  } else {
    const parsedMovies = data.results.map((movie: any) => {
      return {
        id: movie.id,
        backdropPath: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        title: movie.title,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
      };
    }) as Movie[];

    console.log("Data results: ", data.results);
    return parsedMovies;
  }
};
