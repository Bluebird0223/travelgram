import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import { ProtectedRoute } from "./router/AppRouter";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Profile />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Messages />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        {/* Catch-all route - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;