import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: "#fff",
          color: "#000",
          padding: "16px",
        },
      }}
    />
    <RouterProvider router={router} />
  </Provider>
);
