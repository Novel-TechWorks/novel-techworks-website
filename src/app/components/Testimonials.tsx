"use client";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

export const metadata = {
    title: "Testimonials | Novel TechWorks",
    description: "Hear from our satisfied clients."
};

const testimonials = [
    {
        name: "Alice Johnson",
        position: "CEO, Creative Tech",
        testimonial:
            "The team at Novel TechWorks transformed our digital presence. Their innovative solutions and attention to detail exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Mark Smith",
        position: "CTO, E-Shop Masters",
        testimonial:
            "Their web development expertise and strategic approach boosted our sales and improved our online visibility dramatically.",
        rating: 4,
    },
    {
        name: "Sarah Williams",
        position: "Marketing Director, BrandBoost",
        testimonial:
            "A reliable partner with creative minds. Novel TechWorks delivered an outstanding website that truly represents our brand.",
        rating: 5,
    },
    {
        name: "Michael Roberts",
        position: "Founder, InnovateX",
        testimonial:
            "Exceptional service and professional execution. Their strategies and technical expertise have truly set our business apart.",
        rating: 4,
    },
];

export default function TestimonialsPage() {
    return (
        <section id="testimonials" className="py-16 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6 animate-slideInLeft">
                    Testimonials
                </h2>
                <p className="text-lg text-gray-800 max-w-xl mx-auto mb-10 animate-slideInLeft delay-200">
                    Hear from our satisfied clients and discover the impact of our work.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 border border-gray-300 rounded-lg shadow hover:shadow-xl transition transform hover:scale-105 animate-slideInLeft delay-300"
                        >
                            <div className="flex items-start mb-4">
                                <FaQuoteLeft className="text-primary w-8 h-8 mr-2 flex-shrink-0" />
                                <p className="italic text-lg text-gray-800">{item.testimonial}</p>
                            </div>
                            <div className="flex items-center justify-center mb-2">
                                {Array.from({ length: item.rating }, (_, i) => (
                                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                                ))}
                                {Array.from({ length: 5 - item.rating }, (_, i) => (
                                    <FaStar key={i + item.rating} className="text-gray-300 w-5 h-5" />
                                ))}
                            </div>
                            <h4 className="text-primary font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-700">{item.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
