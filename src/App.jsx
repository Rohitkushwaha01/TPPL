import Slider from "./components/Slider";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Slider> */}
        <Hero />
        <AboutSection/>
        <QuoteSection/>
        <Testimonials/>
        <Footer/>
      {/* </Slider> */}
    </>
  );
}
