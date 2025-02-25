import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Products = lazy(() => import("../pages/prodcuts"));
const Categories = lazy(() => import("../pages/categories"));
const Orders = lazy(() => import("../pages/orders"));
const PageNotFound = lazy(() => import("../pages/pageNotFound"));
const ErrorPage = lazy(() => import("../pages/errorPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/orders",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Orders />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
    errorElement: <ErrorPage />,
  },
]);

export default AppRouter;
