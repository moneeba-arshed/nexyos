import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/Home";
import BottomFooter from "./components/BottomFooter";
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
import DemoPage from "./pages/DemoPage";
import Header from "./components/Header";
import ChannelPage from "./pages/Partner/ChannelPage";
import PartnerProgram from "./pages/Partner/ChannelPartner";
import ProjectRegistration from "./pages/Partner/ProjectRegistration";
import Iot from "./pages/Partner/Iot";
import About from "./pages/Company/About";
import Brand from "./pages/Company/Brand";
import Events from "./pages/Company/Events";
import BlogPage from "./pages/Company/BlogPage";
import BlogDetailPage from "./components/Blog/BlogDetailPage";
import NewsPage from "./pages/Company/News";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categorycall from "./components/Categorycall";
import ProCamera from "./components/ProCamera";
import Solution from "./pages/Solution/index";
import SubCategoryPage from "./components/SubCategoryPage";
import SpaceOccupancy from "./pages/Solution/SpaceOccupancy";
import People_Counting from "./pages/Solution/People_Counting";

function App() {
  const location = useLocation();

  // Determine whether to show header/footer
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/signup";


useEffect(() => {
  AOS.init({
    once: false,      // animation triggers only once
    duration: 500,   // animation duration in ms
    easing: 'ease-in-out',
  });
}, []);


  return (
    <>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ColorInit color={true} />
      <ScrollToTop
        smooth
        color="#FA6400"
        className="p-0 justify-center items-center flex"
      />
      <ToastContainer />
      <Preloader />

      {/* Conditionally show Header */}
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/category/:categoryName" element={<Categorycall />} />
         <Route path="/sub-category/:id" element={<SubCategoryPage />} />
        <Route path="/product/" element={<ProCamera/>} />
         <Route path="/PeopleCounting" element={<People_Counting/>} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/success" element={<SuccessStories />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/channel" element={<ChannelPage />} />
        <Route path="/Solution/SpaceOccupancy" element={<SpaceOccupancy/>} />
        <Route path="/PartnerProgram" element={<PartnerProgram />} />
        <Route path="/ProjectRegistration" element={<ProjectRegistration />} />
        <Route path="/Iot" element={<Iot />} />
        <Route path="/About" element={<About />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>

      {/* Conditionally show Footer */}
      {!hideHeaderFooter && <Footer />}
      {!hideHeaderFooter && <BottomFooter />}
    </>
  );
}

export default App;
