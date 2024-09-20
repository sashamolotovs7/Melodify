import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // Add Navigate to handle default redirection
import "./index.css";

import App from "./App";
import Error from "./pages/ErrorPage";
import Login from "./pages/Login";  // Start at login
import Playlist from "./pages/Playlist";
import Home from "./pages/Home";
import { DataLayer } from "./DataLayer";
import reducer, { initialState} from "./components/Reducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,  // Redirect to /login by default
      },
      {
        path: "/login",
        element: <Login />,  // Direct /login route
      },
      {
        path: "/playlist",
        element: <Playlist />,
      },
      {
        path: "/home",
        element: <Home />,
      }
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
  <DataLayer initialState={initialState} reducer={reducer}>
  <RouterProvider router={router} />
  </DataLayer>
  );
}
