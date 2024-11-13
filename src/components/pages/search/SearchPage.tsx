import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../../../utils/http/movies.http";
import ErrorBlock from "../../ui/ErrorBlock";
import LoadingIndicator from "../../ui/LoadingIndicator";
import SearchMovie from "../../search-page-components/SearchMovie";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({ signal }) => searchMovies({ signal, searchTerm }),
    enabled: searchTerm !== undefined,
  });

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const keyword = formData.get("keyword");
    console.log(keyword);
    if (!keyword) {
      return;
    }
    const editedKeyword = keyword?.toString().trim().split(" ").join("+");
    setSearchTerm(editedKeyword);
  };

  let content = (
    <p className={styles["no-search-text"]}>
      Please enter a search term and to find events.
    </p>
  );

  if (isLoading) content = <LoadingIndicator />;

  if (isError)
    content = (
      <ErrorBlock
        title="an error occured"
        message={error.message || "Failed to search movie"}
      />
    );

  console.log("Data: ", data);

  if (data) {
    content = (
      <ul className={styles["movie-list"]}>
        {data.map((movie) => (
          <li key={movie.id}>
            <SearchMovie movie={movie} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="movieTitle">
          Enter the title or keyword of your favourite movie to search for it.
        </label>
        <input id="movieTitle" type="search" name="keyword" />
        <button type="submit">Search Movie</button>
      </form>
      <div className={styles["movies-wrapper"]}>{content}</div>
    </div>
  );
};

export default SearchPage;
