import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http/http";
import PageNotFound from "./components/pages/ui/not-found/PageNotFound";
import SearchPage from "./components/pages/search/SearchPage";

function App() {
  const router = createBrowserRouter([
    /**
     * Search
     *  - Title
     *  - Keyword
     * Movie detail
     *  - Plot summary
     *  - Cast and crew
     *  - Reviews and ratings
     *  - Trailer (if available)
     *  - Recommendations
     */
    {
      path: "/",
      children: [
        {
          index: true,
          element: <SearchPage />,
        },
      ],
    },

    {
      path: "*",
      children: [
        {
          index: true,
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
