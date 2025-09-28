import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createHashRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";
import AppsPage from "./components/CatsPage";
import Admin from "./components/Admin";
import Weather from "./components/Weather";
import Tasks from "./components/Tasks";
import { AuthProvider, useAuth } from "./components/tasks/AuthContext";

/** Guard component: redirects to /login if no valid token */
const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
};


import AdminLogin from "./components/AdminLogin";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "apps", element: <AppsPage /> },
      { path: "weather", element: <Weather /> },
      { path: "tasks", element: <Tasks /> },
      {
        path: "tasks/admin",
        element: (
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        ),
      },
      { path: "login", element: <AdminLogin /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
