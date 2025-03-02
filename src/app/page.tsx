// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutPage from "./components/About";
import ProcessPage from "./components/Process";
import PortfolioPage from "./components/Portfolio";
import TestimonialsPage from "./components/Testimonials";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[72px]">
                <Hero />
                <section id="services" className="bg-bg text-text py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <Services />
                    </div>
                </section>
                <section id="about" className="bg-gradient-to-r from-gray-800 to-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <AboutPage/>
                    </div>
                </section>
                <section id="process" className="bg-white text-text py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <ProcessPage />
                    </div>
                </section>
               {/* <section id="portfolio" className="bg-white text-text py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <PortfolioPage />
                    </div>
                </section>*/}
                <section id="testimonials" className="bg-white text-text py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <TestimonialsPage />
                    </div>
                </section>
                <section id="contact" className="bg-gradient-to-r from-gray-800 to-blue-900 text-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <ContactPage />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
