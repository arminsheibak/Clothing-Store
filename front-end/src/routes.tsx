import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/confirmation", element: <Confirmation /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;