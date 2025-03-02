"use client";

import {JSX, useState} from "react";
import {
    ComputerDesktopIcon,
    CodeBracketIcon,
    ShoppingBagIcon,
    ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

interface Service {
    title: string;
    icon: JSX.Element;
    description: string;
    details: string;
    link: string;
}

export const metadata = {
    title: "Services | Novel TechWorks",
    description: "Explore our comprehensive service offerings.",
};

export default function Services() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const services: Service[] = [
        {
            title: "Website Development",
            icon: (
                <ComputerDesktopIcon className="w-10 h-10 text-primary mx-auto mb-2 group-hover:animate-bounce" />
            ),
            description: "Custom, responsive websites built with modern frameworks.",
            details:
                "Our Website Development service includes custom design, responsive code, performance optimization, and ongoing support. We use the latest frameworks to ensure your site stands out.",
            link: "/services#web-development",
        },
        {
            title: "Web Application Development",
            icon: (
                <CodeBracketIcon className="w-10 h-10 text-primary mx-auto mb-2 group-hover:animate-bounce" />
            ),
            description:
                "Robust web apps using the latest technologies for scalability.",
            details:
                "We build dynamic, secure, and scalable web applications tailored to your business needs. Our approach combines innovative design with robust backend architecture.",
            link: "/services#web-apps",
        },
        {
            title: "Shopify Setup & Product Upload",
            icon: (
                <ShoppingBagIcon className="w-10 h-10 text-primary mx-auto mb-2 group-hover:animate-bounce" />
            ),
            description:
                "Complete Shopify store setups and efficient product management.",
            details:
                "Our Shopify service covers everything from store design and theme customization to product uploads and inventory management, ensuring your online store is ready to convert.",
            link: "/services#shopify",
        },
        {
            title: "SEO Management",
            icon: (
                <ArrowTrendingUpIcon className="w-10 h-10 text-primary mx-auto mb-2 group-hover:animate-bounce" />
            ),
            description: "Advanced SEO strategies to boost your online visibility.",
            details:
                "We offer comprehensive SEO management, including keyword research, on-page optimization, content strategy, and performance tracking to help your website rank higher.",
            link: "/services#seo",
        },
    ];

    const openModal = (service: Service) => setSelectedService(service);
    const closeModal = () => setSelectedService(null);

    return (
        <section
            id="services"
            className="relative bg-cover bg-center"
        >
            {/* Subtle Overlay for Blend */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-4 animate-fadeInUp">
                    Our Services
                </h2>
                <p className="text-lg text-white mb-10 animate-fadeInUp delay-200">
                    From initial strategy to final deployment, we offer end-to-end solutions that help your business thrive.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(service)}
                            className="group p-6 bg-white/90 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 cursor-pointer animate-fadeInUp delay-300"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2 text-primary">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-800 mb-4">
                                {service.description}
                            </p>
                            <p className="text-sm text-primary underline">
                                Learn More
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
                    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl relative max-w-md w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center">
                            <div className="mb-4">{selectedService.icon}</div>
                            <h3 className="text-2xl font-bold text-primary mb-2">
                                {selectedService.title}
                            </h3>
                            <p className="text-lg mb-4">{selectedService.details}</p>
                            <button
                                onClick={closeModal}
                                className="bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-secondary transition transform hover:scale-105"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
