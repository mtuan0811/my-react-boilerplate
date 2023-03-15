import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./app/layout/appLayout";
import { AuthLayout } from "./app/layout/authLayout";
import { NotAuthLayout } from "./app/layout/notAuthLayout";
import { AboutPage } from "./app/pages/About";
import { HomePage } from "./app/pages/Home/loadable";
import LoginPage  from "./app/pages/Login";
import { NotFoundPage } from "./app/pages/NotFound";
import { ProfilePage } from "./app/pages/Profile";
import { ProtectedRoute } from "./hooks/auth/protectedRoute";

const mainRoute = () => {
  return (
    <Route element={<AuthLayout />}>
      {/* login, logout */}
      <Route element={<NotAuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* auth route */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* not found */}
      <Route path="*" element={<NotFoundPage code="404" />} />
    </Route>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(mainRoute())
);
