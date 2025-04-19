// src/AppContent.tsx
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppInitializer } from "./AppInitializer";
import { AppRoutes } from "./AppRoutes";
import { Layout } from "./Layout";

export const AppContent = () => (
  <AppInitializer>
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </AppInitializer>
);
