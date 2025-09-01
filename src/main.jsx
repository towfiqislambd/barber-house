import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./provider/AuthProvider";
const queryClient = new QueryClient();
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TranslationProvider } from "./provider/TranslationContext";

createRoot(document.getElementById("root")).render(
  <TranslationProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GoogleOAuthProvider
          clientId={`${import.meta.env.VITE_GOOGLE_AUTH_ID}`}
          redirectUri="https://dev.myhealthneeds.co.uk/auth/signup"
        >
          <Provider store={store}>
            <div id="google_translate_element" />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
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
  </TranslationProvider>
);

// For Favicon
const fetchSiteSettings = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_SITE_URL}/api/site-settings`
    );
    const formattedData = await res.json();
    if (formattedData?.data) {
      const { favicon } = formattedData.data;
      const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = `${import.meta.env.VITE_SITE_URL}/${favicon}`;
      document.head.appendChild(link);
    }
  } catch (err) {
    console.error("Error fetching site settings:", err);
  }
};

fetchSiteSettings();
