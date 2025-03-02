import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-[80vh] overflow-hidden"
        >
            {/* Static background image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero.png" // ensure your image is in the public folder
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Overlay to blend with the navbar and create a consistent feel */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply opacity-60"></div>
            </div>
            <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeIn">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                    Empower Your Digital Future
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 drop-shadow">
                    We provide website development, web application solutions, Shopify setups, and SEO management.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#services"
                        className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition transform hover:scale-105 animate-bounce"
                    >
                        Discover Our Services
                    </a>
                    <a
                        href="#contact"
                        className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
