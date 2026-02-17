import "./App.css";
import TimeBlocksPage from "./components/app/pages/TimeBlocksPage";
import LandingPage from "./components/landing/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/app/login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app/login" element={<Login />} />

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <TimeBlocksPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/blocks"
            element={
              <ProtectedRoute>
                <TimeBlocksPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
