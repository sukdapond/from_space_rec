import './App.css';
import LandingPage from "./pages/LandingPage";
import "./input.css";
import { Routes, Route } from "react-router-dom";
import DetailsPage from './pages/DetailsPage';
import Navbar from './components/Navbar';
function App ()  {
  return  (
      <div className="bg-gradient-to-b from-[#1a1a1a] to-[#288f51] h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/details" element={<DetailsPage />} />
          </Routes>
      </div>
 );
}
export default App; 