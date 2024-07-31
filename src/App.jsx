import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import ArtisanPage from "./pages/ArtisanPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/Search", element: <SearchResultPage /> },
  { path: "/artisan/:id", element: <ArtisanPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
