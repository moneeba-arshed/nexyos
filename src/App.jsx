import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import './index.css';

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
import DemoPage from "./components/DemoPage";
import Header from "./components/Header";
import ChannelPage from "./components/Channel/FindChannel/ChannelPage";
import PartnerProgram from "./components/Channel/FindChannel/ChannelPartner";
import ProjectRegistration from "./components/Channel/FindChannel/ProjectRegistration";
import Iot from "./components/Channel/FindChannel/Iot";
import About from "./components/Company/About";
import Brand from "./components/Company/Brand";
import Events from "./components/Company/Events";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetailPage from "./components/Blog/BlogDetailPage";
import NewsPage from "./components/Company/News";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categorycall from "./components/categorycall";
import Productcall from "./components/Productcall";


function App() {
  const location = useLocation();

  // Determine whether to show header/footer
const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";


  return (
    <>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ColorInit color={true} />
      <ScrollToTop smooth color="#FA6400" className="p-0 justify-center items-center flex" />
      <ToastContainer />
      <Preloader />

      {/* Conditionally show Header */}
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/products" element={<ProductPage />} /> */}
           <Route path="/productdetails/:id" element={<Productcall/>} />
        <Route path="/category/:categoryName" element={<Categorycall />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/success" element={<SuccessStories />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/channel" element={<ChannelPage />} />
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
