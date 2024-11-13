import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/http/http";
import PageNotFound from "./components/pages/ui/not-found/PageNotFound";
import HomePage from "./components/pages/home/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <HomePage />,
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
