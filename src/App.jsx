import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import './index.css'
import Home from "./pages/Home";
import BottomFooter from "./components/BottomFooter";
import HeaderTwo from "./components/HeaderTwo";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import ColorInit from "./helper/ColorInit";
import Preloader from "./helper/Preloader";
import Slider from "./pages/Slider";
import Footer from "./components/Footer";
import SuccessStories from "./components/SuccessStories";
import ContactPage from "./pages/ContactPage";
import DemoPage from "./components/DemoPage";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      {/* ColorInit */}
      <ColorInit color={true} />
      {/* ScrollToTop */}
      <ScrollToTop
        smooth
        color="#FA6400"
        className="p-0 justify-center items-center flex"
      />
      <ToastContainer />
      {/* Preloader */}
      <Preloader />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/slider" element={<Slider />} />
        <Route exact path="/success" element={<SuccessStories />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/demo" element={<DemoPage />} /> */}
      </Routes>
      {/* <Footer />
      <BottomFooter /> */}
    </BrowserRouter>
  );
}

export default App;
