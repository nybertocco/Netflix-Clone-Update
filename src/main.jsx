import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";
import Home from "./home/index.jsx";
import Series from "./series/index.jsx";
import MinhaLista from "./minhalista/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/minhalista",
    element: <MinhaLista />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
