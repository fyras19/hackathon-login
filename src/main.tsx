import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import EventsPage from "./pages/EventsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "aboutus",
        element: (
          <>
            <h1>About us</h1>
          </>
        ),
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/login",
        element: (
          <>
            <h1>Se connecter</h1>
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <h1>Créer un compte</h1>
          </>
        ),
      },
      {
        path: "/myevents",
        element: (
          <>
            <h1>Mes évènements</h1>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
