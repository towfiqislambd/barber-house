import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./provider/AuthProvider";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <GoogleOAuthProvider
        clientId={`${import.meta.env.VITE_GOOGLE_AUTH_ID}`}
        redirectUri="https://dev.myhealthneeds.co.uk/auth/signup"
      >
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
      </GoogleOAuthProvider>
    </AuthProvider>
  </QueryClientProvider>
);
