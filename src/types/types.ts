export type SearchMovieType = {
  signal: AbortSignal;
  searchTerm: string | undefined;
};


export type FetchMovieType = {
  signal: AbortSignal;
  id: string | undefined;
};

export type Movie = {
  id: string;
  backdropPath: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
};

type DMovie = {
  plotSummary: string;
  castCrew: string;
  trailerId: string;
};

export type DetailedMovie = Movie & DMovie;