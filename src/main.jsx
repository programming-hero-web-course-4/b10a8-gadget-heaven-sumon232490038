import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DashBoard from "./components/DashBoard/DashBoard";
import Statistics from "./components/Statistics/Statistics";
import ContactUs from "./components/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "products/:product_id",
        loader: () => fetch("/prodectsData.json"),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard",
        loader: () => fetch("/prodectsData.json"),
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/Statistics",
        loader: () => fetch("/prodectsData.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/ContactUs",
        // loader: () => fetch("/prodectsData.json"),
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
