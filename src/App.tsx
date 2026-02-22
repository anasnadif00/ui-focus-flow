import "./App.css";
import TimeBlocksPage from "./components/app/pages/TimeBlocksPage";
import LandingPage from "./components/landing/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/app/login/Login";
import Registration from "./components/app/login/Registration";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Homepage from "./components/app/pages/Homepage";

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
              <Homepage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
