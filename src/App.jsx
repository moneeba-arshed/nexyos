import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import './index.css'
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
import Header1 from "./components/Header1";
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
import Testing from "./components/Testing";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
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
      {/* <Header1/> */}
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<ProductPage/>}/>
          <Route path="/category/:id" element={<CategoryPage />} />
        <Route exact path="/slider" element={<Slider />} />
        <Route exact path="/success" element={<SuccessStories />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/channel" element={<ChannelPage />} />
        <Route exact path="/PartnerProgram" element={<PartnerProgram />} />
        <Route
          exact
          path="/ProjectRegistration"
          element={<ProjectRegistration />}
        />
        <Route exact path="/Iot" element={<Iot />} />
                <Route exact path="/About" element={<About />} />
        <Route exact path="/Brand" element={<Brand />} />
        <Route exact path="/Events" element={<Events />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route exact path="/demo" element={<DemoPage />} />
      </Routes>
      <Footer />
      <BottomFooter />
    </BrowserRouter>
  );
}

export default App;
