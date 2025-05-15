import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/categorie/:category" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);