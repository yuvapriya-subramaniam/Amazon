import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={routerConfig} />
    </Provider>
  </StrictMode>
);
