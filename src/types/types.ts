export type SearchMovieType = {
  signal: AbortSignal;
  searchTerm: string | undefined;
};

export type Movie = {
  id: string;
  backdropPath: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
};
