import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import ArtisanPage from "./pages/ArtisanPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/search", element: <SearchResultPage /> },
  { path: "/artisan/:id", element: <ArtisanPage /> },
  { path:"/categorie/:category", element: <CategoryPage />},
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
