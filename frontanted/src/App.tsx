import { Route, Routes } from 'react-router-dom';
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/HomePage";
import PicturesEnhancer from './Tools/PicturesEnhancer';
import ImageToPdfConverter from './Tools/ImageToPdfConverter';
import ToolsSection from './Tools/ToolsSection';
import PricingPage from './Pricingpage/PricingPage';
import Pricing from './pages/Tools';
import ContactHub from './pages/ContactHub';
import Documentation from './pages/Documentation';



const App = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<Pricing />} />
            <Route path="/image-enhancer" element={<PicturesEnhancer />} />
            <Route path="/pdf-converter" element={<ImageToPdfConverter />} />
            <Route path="/show-alltools" element={<ToolsSection />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact-us" element={<ContactHub />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
