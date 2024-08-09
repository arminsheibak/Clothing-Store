import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products/:id", element: <ProductDetail /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
