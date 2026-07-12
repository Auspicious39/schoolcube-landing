import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FeaturesPage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/features" element={<><FeaturesPage /><Footer /></>} />
        <Route path="/pricing" element={<><PricingPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}
