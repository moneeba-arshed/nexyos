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
// import DemoPage from "./components/DemoPage";
import Header from "./components/Header";
import ChannelPage from "./pages/Partner/ChannelPage";
import PartnerProgram from "./pages/Partner/ChannelPartner";
import ProjectRegistration from "./pages/Partner/ProjectRegistration";
import Iot from "./pages/Partner/Iot";
import About from "./pages/Company/About";
import Brand from "./pages/Company/Brand";
import Events from "./pages/Company/Events";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetailPage from "./components/Blog/BlogDetailPage";
import NewsPage from "./components/Company/News";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import ProductDetail from "./components/ProductDetail";
import SalesInquiry from "./components/SalesInquiry";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categorycall from "./components/Categorycall";
import ProCamera from "./components/ProCamera";
import Solution from "./pages/Solution/index";

import SubCategoryPage from "./components/SubCategoryPage";
import SmartSpaces from "./pages/Solution/SmartSpaces";
import Hotel from "./pages/Solution/Hotel";
import Video_Surveillance from "./pages/Solution/Video_Surveillance";

function App() {
  return (
    <>
      <RouteScrollToTop />
      <PhosphorIconInit />
      <ColorInit color={true} />
      <ScrollToTop smooth color="#FA6400" className="p-0 justify-center items-center flex" />
      <ToastContainer />
      <Preloader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/category/:id" element={<Productcall />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/solution" element={<Solution/>} />
        <Route path="/Solution/SmartSpaces" element={<SmartSpaces/>} />
        <Route path="/Solution/Video_Surveillance" element={<Video_Surveillance/>} />
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
        {/* <Route path="/demo" element={<DemoPage />} /> */}
      </Routes>
      <Footer />
      <BottomFooter />
    </>
  );
}

export default App;
