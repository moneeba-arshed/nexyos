import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BottomFooter from "./components/BottomFooter";
import HeaderTwo from "./components/HeaderTwo";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import ColorInit from "./helper/ColorInit";
import Preloader from "./helper/Preloader";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />
      {/* ColorInit */}
      <ColorInit color={true} />
      {/* ScrollToTop */}
      <ScrollToTop smooth color="#FA6400" />
      <ToastContainer />
      {/* Preloader */}
      <Preloader />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BottomFooter />
    </BrowserRouter>
  );
}

export default App;
