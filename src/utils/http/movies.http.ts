import CustomError from "../../types/custom-error";
import {
  DetailedMovie,
  FetchMovieType,
  Movie,
  SearchMovieType,
} from "../../types/types";

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

  if (!response.ok) {
    const error = new CustomError(
      response.status,
      "An error occurred while searching products",
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

    // console.log("Data results: ", data.results);
    return parsedMovies;
  }
};

export const fetchMovie = async (movieData: FetchMovieType) => {
  if (movieData.id === undefined) {
    new CustomError(400, "invalid id provided");
  }
  const url = `https://api.themoviedb.org/3/movie/${movieData.id}?language=en-US`;

  const response = await fetch(url, {
    signal: movieData.signal,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYzM2NjMzcxOGQ0Zjg5ZWU3NzY3N2QxNmU3OGIwYSIsIm5iZiI6MTczMTQ4ODY0NC4yNjUyODM2LCJzdWIiOiI2NzM0NmE4NTc2YWYzYWU3YjYzOGJhZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NHQjdB0VbFRCIlsB71YD0FOwL1c9Kl3_wHPzkHLOEcQ`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new CustomError(
      response.status,
      "An error occurred while fetching movie",
      response.status === 500
        ? { message: "An error occured. Please try again later" }
        : await data
    );

    throw error;
  } else {
    const parsedMovie = {
      id: data.id,
      backdropPath: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
      title: data.title,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      plotSummary: data.overview,
      trailerId: "string",
    } as DetailedMovie;

    console.log("Data results: ", data);
    return parsedMovie;
  }
};

export const fetchMovieTrailer = async (movieData: FetchMovieType) => {
  if (movieData.id === undefined) {
    new CustomError(400, "invalid id provided");
  }
  const url = `https://api.themoviedb.org/3/movie/${movieData.id}/videos`;

  const response = await fetch(url, {
    signal: movieData.signal,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYzM2NjMzcxOGQ0Zjg5ZWU3NzY3N2QxNmU3OGIwYSIsIm5iZiI6MTczMTQ4ODY0NC4yNjUyODM2LCJzdWIiOiI2NzM0NmE4NTc2YWYzYWU3YjYzOGJhZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NHQjdB0VbFRCIlsB71YD0FOwL1c9Kl3_wHPzkHLOEcQ`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new CustomError(
      response.status,
      "An error occurred while fetching movie trailer",
      response.status === 500
        ? { message: "An error occured. Please try again later" }
        : await data
    );

    throw error;
  } else {
    return data.results[0].key;
  }
};

export const fetchRecommendedMovies = async (movieData: FetchMovieType) => {
  if (movieData.id === undefined) {
    new CustomError(400, "invalid id provided");
  }
  const url = `https://api.themoviedb.org/3/movie/${movieData.id}/recommendations?language=en-US&page=1`;

  const response = await fetch(url, {
    signal: movieData.signal,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODYzM2NjMzcxOGQ0Zjg5ZWU3NzY3N2QxNmU3OGIwYSIsIm5iZiI6MTczMTQ4ODY0NC4yNjUyODM2LCJzdWIiOiI2NzM0NmE4NTc2YWYzYWU3YjYzOGJhZDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NHQjdB0VbFRCIlsB71YD0FOwL1c9Kl3_wHPzkHLOEcQ`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = new CustomError(
      response.status,
      "An error occurred while fetching movie",
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
        posterPath: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
      };
    }) as Movie[];

    // console.log("Data results: ", data.results);
    return parsedMovies;
  }
};