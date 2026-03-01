import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/app/login/Login";
import Registration from "./components/app/login/Registration";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Homepage from "./components/app/pages/Homepage";
import HistoryPage from "./components/app/pages/HistoryPage";
import AnalyticsPage from "./components/app/pages/AnalyticsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/login" element={<Login />} />
        <Route path="/app/register/*" element={<Registration />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/analytics"
          element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
