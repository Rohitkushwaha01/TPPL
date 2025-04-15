import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutSection />
            <QuoteSection />
            <Testimonials />
            <Footer />
        </div>
    )
}
