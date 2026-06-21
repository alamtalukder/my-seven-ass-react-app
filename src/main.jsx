import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";
import { router } from "./routes/Router.jsx";
import TimelineContextProvider from "./context/TimelineProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineContextProvider>
  </StrictMode>,
);
