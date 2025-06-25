import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_GOOGLE_AUTH_ID": "345179655785-u3a2gti31iv9b4ljag12iaa0vllohl63.apps.googleusercontent.com", "VITE_GOOGLE_MAP_API": "AIzaSyDl7ias7CMBPanjqPisVXwhXXVth21Cl5Y", "VITE_GOOGLE_URL": "https://www.googleapis.com", "VITE_SITE_URL": "https://waleedbinsalma.softvencefsd.xyz"};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=e0397316"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=e0397316"; const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];
import "/src/index.css?t=1750832270868";
import { RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=e0397316";
import { router } from "/src/routes/Router.jsx?t=1750832270868";
import { Toaster } from "/node_modules/.vite/deps/react-hot-toast.js?v=e0397316";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=e0397316";
import store from "/src/redux/store.js";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=e0397316";
import { GoogleOAuthProvider } from "/node_modules/.vite/deps/@react-oauth_google.js?v=e0397316";
import AuthProvider from "/src/provider/AuthProvider.jsx";
const queryClient = new QueryClient();
import { ToastContainer } from "/node_modules/.vite/deps/react-toastify.js?v=e0397316";
import "/node_modules/react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(AuthProvider, { children: /* @__PURE__ */ jsxDEV(
    GoogleOAuthProvider,
    {
      clientId: `${import.meta.env.VITE_GOOGLE_AUTH_ID}`,
      redirectUri: "https://dev.myhealthneeds.co.uk/auth/signup",
      children: /* @__PURE__ */ jsxDEV(Provider, { store, children: [
        /* @__PURE__ */ jsxDEV(
          ToastContainer,
          {
            position: "top-right",
            autoClose: 3e3,
            hideProgressBar: false,
            newestOnTop: true,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            theme: "light"
          },
          void 0,
          false,
          {
            fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          Toaster,
          {
            position: "top-center",
            reverseOrder: false,
            toastOptions: {
              duration: 3e3,
              style: {
                background: "#fff",
                color: "#000",
                padding: "16px"
              }
            }
          },
          void 0,
          false,
          {
            fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
            lineNumber: 33,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
          fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    },
    void 0,
    false,
    {
      fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "D:/naymur/waleed-bin-salma-frontend-woman/src/main.jsx",
    lineNumber: 15,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBcUJVO0FBckJWLFNBQVNBLGtCQUFrQjtBQUMzQixPQUFPO0FBQ1AsU0FBU0Msc0JBQXNCO0FBQy9CLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsZUFBZTtBQUN4QixTQUFTQyxnQkFBZ0I7QUFDekIsT0FBT0MsV0FBVztBQUNsQixTQUFTQyxhQUFhQywyQkFBMkI7QUFDakQsU0FBU0MsMkJBQTJCO0FBQ3BDLE9BQU9DLGtCQUFrQjtBQUN6QixNQUFNQyxjQUFjLElBQUlKLFlBQVk7QUFDcEMsU0FBU0ssc0JBQXNCO0FBQy9CLE9BQU87QUFDUFgsV0FBV1ksU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDMUMsdUJBQUMsdUJBQW9CLFFBQVFKLGFBQzNCLGlDQUFDLGdCQUNDO0FBQUEsSUFBQztBQUFBO0FBQUEsTUFDQyxVQUFVLEdBQUdLLFlBQVlDLElBQUlDLG1CQUFtQjtBQUFBLE1BQ2hELGFBQVk7QUFBQSxNQUVaLGlDQUFDLFlBQVMsT0FDUjtBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDQyxVQUFTO0FBQUEsWUFDVCxXQUFXO0FBQUEsWUFDWCxpQkFBaUI7QUFBQSxZQUNqQixhQUFhO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0EsT0FBTTtBQUFBO0FBQUEsVUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFTZ0I7QUFBQSxRQUVoQjtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0MsVUFBUztBQUFBLFlBQ1QsY0FBYztBQUFBLFlBQ2QsY0FBYztBQUFBLGNBQ1pDLFVBQVU7QUFBQSxjQUNWQyxPQUFPO0FBQUEsZ0JBQ0xDLFlBQVk7QUFBQSxnQkFDWkMsT0FBTztBQUFBLGdCQUNQQyxTQUFTO0FBQUEsY0FDWDtBQUFBLFlBQ0Y7QUFBQTtBQUFBLFVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVUk7QUFBQSxRQUVKLHVCQUFDLGtCQUFlLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBK0I7QUFBQSxXQXhCakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXlCQTtBQUFBO0FBQUEsSUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBOEJBLEtBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQ0EsS0FqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQWtDQTtBQUNGIiwibmFtZXMiOlsiY3JlYXRlUm9vdCIsIlJvdXRlclByb3ZpZGVyIiwicm91dGVyIiwiVG9hc3RlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJHb29nbGVPQXV0aFByb3ZpZGVyIiwiQXV0aFByb3ZpZGVyIiwicXVlcnlDbGllbnQiLCJUb2FzdENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJpbXBvcnQiLCJlbnYiLCJWSVRFX0dPT0dMRV9BVVRIX0lEIiwiZHVyYXRpb24iLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsInBhZGRpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsibWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcbmltcG9ydCB7IFJvdXRlclByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vcm91dGVzL1JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IEdvb2dsZU9BdXRoUHJvdmlkZXIgfSBmcm9tIFwiQHJlYWN0LW9hdXRoL2dvb2dsZVwiO1xyXG5pbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuL3Byb3ZpZGVyL0F1dGhQcm92aWRlclwiO1xyXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXHJcbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICA8QXV0aFByb3ZpZGVyPlxyXG4gICAgICA8R29vZ2xlT0F1dGhQcm92aWRlclxyXG4gICAgICAgIGNsaWVudElkPXtgJHtpbXBvcnQubWV0YS5lbnYuVklURV9HT09HTEVfQVVUSF9JRH1gfVxyXG4gICAgICAgIHJlZGlyZWN0VXJpPVwiaHR0cHM6Ly9kZXYubXloZWFsdGhuZWVkcy5jby51ay9hdXRoL3NpZ251cFwiXHJcbiAgICAgID5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxUb2FzdENvbnRhaW5lclxyXG4gICAgICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiIC8vIPCfkYggY2hhbmdlIHBvc2l0aW9uIGhlcmVcclxuICAgICAgICAgICAgYXV0b0Nsb3NlPXszMDAwfVxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICBuZXdlc3RPblRvcD17dHJ1ZX1cclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrXHJcbiAgICAgICAgICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlclxyXG4gICAgICAgICAgICB0aGVtZT1cImxpZ2h0XCIgLy8gb3IgXCJkYXJrXCIgaWYgeW91ciBzaXRlIGlzIGRhcmstdGhlbWVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRvYXN0ZXJcclxuICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AtY2VudGVyXCJcclxuICAgICAgICAgICAgcmV2ZXJzZU9yZGVyPXtmYWxzZX1cclxuICAgICAgICAgICAgdG9hc3RPcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgPC9Hb29nbGVPQXV0aFByb3ZpZGVyPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxyXG4pO1xyXG4iXSwiZmlsZSI6IkQ6L25heW11ci93YWxlZWQtYmluLXNhbG1hLWZyb250ZW5kLXdvbWFuL3NyYy9tYWluLmpzeCJ9