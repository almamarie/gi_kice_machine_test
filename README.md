
## LoumarFlix Documentation

### Overview

**LoumarFlix** is a front-end-only movie recommendation platform built using React with TypeScript and CSS modules. The application leverages the TMDB API to fetch movie data, providing users with a seamless experience for discovering, viewing, and exploring movie recommendations. LoumarFlix is designed to be fast, responsive, and intuitive.

### Prerequisites

1. **Node.js** (v14 or later)
2. **NPM** (v6 or later) or **Yarn** for dependency management
3. **TMDB API Key**: Register on [The Movie Database (TMDB) website](https://www.themoviedb.org/) and generate an API key.

### Installation

1. **Clone the Repository**

   ```
   git clone <repository_url>
   cd <project_directory>
   ```
2. **Install Dependencies**

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```
3. **Set Up Environment Variables**Create a `.env` file in the project root and add your TMDB API key:

   ```
   REACT_APP_TMDB_API_KEY=<your_tmdb_api_key>
   ```
4. **Run the Application**

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

The application should now be running locally at `http://localhost:3000`.

---

### Core Functionalities

#### 1. **Movie Search**

- **Feature**: Users can search for movies by title or keyword.
- **Implementation**:
  - Fetch movie data from the TMDB search endpoint based on user input.
  - Display results with each movie's poster, title, release date, and rating.
  - Handle edge cases, such as empty results or network errors.

#### 2. **Movie Details**

- **Feature**: Display detailed information for selected movies.
- **Implementation**:
  - Show plot summary, cast and crew, reviews, ratings, and trailers.
  - Use the TMDB API to fetch detailed movie information, including cast/crew and video trailers (if available).

#### 3. **Movie Recommendations**

- **Feature**: Recommend similar movies.
- **Implementation**:
  - Fetch and display recommended movies using the TMDB recommendation endpoint.
  - Show similar movie data, including posters, titles, and ratings.

---

### Technical Requirements

#### 1. **Frontend Framework**

- The project is built with **React** and **TypeScript**, providing a strongly-typed, scalable codebase.

#### 2. **State Management**

- **Redux** or **React Context API** is used for state management.
- **State Scope**:
  - User’s search input and results
  - Selected movie details
  - Similar movie recommendations

#### 3. **Styling**

- CSS modules are used for modular, component-specific styling, ensuring styles are scoped locally to each component.

#### 4. **API Integration**

- The **TMDB API** is used for fetching movie data.
- Endpoints include:
  - **Search Endpoint**: To search for movies by title or keyword.
  - **Movie Details Endpoint**: To retrieve detailed information about a selected movie.
  - **Recommendations Endpoint**: To fetch movie recommendations based on the selected movie.

---

### Project Structure

The project is organized as follows:

```
src/
│
├── components/
│   ├── MovieSearch.tsx      // Handles search input and search results display
│   ├── MovieDetails.tsx     // Displays detailed movie info and recommendations
│   └── MovieRecommendations.tsx // Shows recommended movies
│
├── store/                  // State management (Redux or Context API)
│   ├── actions.ts          // Defines actions for fetching and managing data
│   └── reducers.ts         // Handles state updates
│
├── styles/                 // CSS modules
│   ├── global.module.css   // Global styles
│   └── movie.module.css    // Movie-specific styles
│
├── App.tsx                 // Main application component
└── index.tsx               // Entry point
```

---

### API Configuration

All requests to the TMDB API require an API key and must be appended as a query parameter (`api_key=<your_tmdb_api_key>`). Example requests include:

- **Search Movies**: `https://api.themoviedb.org/3/search/movie?api_key=<api_key>&query=<movie_title>`
- **Movie Details**: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<api_key>`
- **Recommendations**: `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<api_key>`

---

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

### Troubleshooting

- **API Key Issues**: Ensure the API key is set correctly in the `.env` file.
- **CORS Issues**: Use a CORS proxy if needed during development, as the TMDB API may have CORS restrictions.
- **Styling Conflicts**: Use CSS modules for isolated styling.
