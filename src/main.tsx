import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Formulaire from "./components/Formulaire.tsx";
//import './index.css'

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
        element: <Formulaire />,
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
