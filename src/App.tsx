import './App.css'
import TimeBlocksPage from './components/app/pages/TimeBlocksPage'
import LandingPage from './components/landing/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/app/login/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<TimeBlocksPage />} />
        <Route path="/app/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
