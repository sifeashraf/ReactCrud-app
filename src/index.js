//import hooks
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import css

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import module
import { Provider } from "react-redux";
import store from "./global-state/store";
//import components
import { RootLayout } from "./pages/RootLayout";
import App from "./pages/App";

let ErrorPage = lazy(() => import("./pages/ErrorPage"));
let Add = lazy(() => import("./pages/Add"));
let Edit = lazy(() => import("./pages/Edit"));
let Details = lazy(() => import("./pages/Details"));

let postparms = ({ params }) => {
  if (isNaN(params.id)) {
    throw new Response("bad request", {
      statusText: "error enter valid ID Type please",
      status: 400,
    });
  }
  //  else {
  //   throw new Response("bad request", {
  //     status: 400,
  //   });
  // }
  return null;
};
let RootElment = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      {
        path: "posts/add",
        element: (
          <Suspense>
            <Add />
          </Suspense>
        ),
      },
      {
        path: "posts/edit/:id",
        element: (
          <Suspense>
            <Edit />
          </Suspense>
        ),
        loader: postparms,
      },
      {
        path: "posts/post/:id",
        element: (
          <Suspense>
            <Details />
          </Suspense>
        ),
        loader: postparms,
      },
      //there is tow ways to make make guard
      // for some components first wrap them in one component children like the RootLayout and put
      //that component in Authguard (easy way but not level my logic so will try the other way )
      //using hoc(higher order components) // harder and more code but level my logic
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={RootElment} />
  </Provider>
);
