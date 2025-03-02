import { FaLightbulb, FaMedal, FaHandshake } from "react-icons/fa";

export const metadata = {
    title: "About | Novel TechWorks",
    description: "Learn more about our company and mission."
};

export default function AboutPage() {
    return (
        <section
            id="about"
            className="w-full py-16"
        >
            {/* Full width container; content is padded */}
            <div className="w-full px-6">
                <h1 className="text-4xl font-bold mb-8 text-center animate-fadeInUp">
                    About Us
                </h1>
                <div className="space-y-4 text-lg text-gray-200 animate-fadeInUp delay-200">
                    <p>
                        Novel TechWorks is a leading digital agency specializing in website development, Shopify solutions, and SEO management. Our mission is to empower businesses with modern, scalable digital products that drive growth and success.
                    </p>
                    <p>
                        Founded on the principles of innovation and excellence, our team is passionate about delivering high-quality digital solutions that combine cutting-edge technology with creative design. We build lasting relationships with our clients by offering tailored strategies and exceptional customer service.
                    </p>
                    <p>
                        Whether you need a responsive website, a robust web application, a custom Shopify store, or effective SEO management, Novel TechWorks is your trusted partner in the digital space.
                    </p>
                </div>

                {/* Our Values Section */}
                <div className="mt-12 border-t border-gray-600 pt-8">
                    <h2 className="text-2xl font-semibold mb-6 text-center animate-fadeInUp delay-400">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-4 transition transform hover:scale-105 animate-fadeInUp delay-500">
                            <FaLightbulb className="text-primary w-12 h-12 mb-4" />
                            <span className="font-bold text-xl mb-2">Innovation</span>
                            <p className="text-gray-300">
                                We constantly push boundaries to deliver state-of-the-art solutions.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 transition transform hover:scale-105 animate-fadeInUp delay-600">
                            <FaMedal className="text-primary w-12 h-12 mb-4" />
                            <span className="font-bold text-xl mb-2">Quality</span>
                            <p className="text-gray-300">
                                Every project is built with the highest standards in mind.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 transition transform hover:scale-105 animate-fadeInUp delay-700">
                            <FaHandshake className="text-primary w-12 h-12 mb-4" />
                            <span className="font-bold text-xl mb-2">Integrity</span>
                            <p className="text-gray-300">
                                We prioritize honesty and transparency in all our endeavors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
