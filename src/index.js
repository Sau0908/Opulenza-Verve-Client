import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouteApp from "./Routes/RouteApp";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./Providers/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <RouteApp> </RouteApp>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
