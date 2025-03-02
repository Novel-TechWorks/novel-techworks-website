"use client";

export const metadata = {
    title: "Process | Novel TechWorks",
    description: "Our comprehensive process to deliver top-quality digital solutions.",
};

export default function ProcessPage() {
    const steps = [
        {
            title: "Consultation",
            description:
                "We begin by understanding your vision, goals, and requirements through in-depth discussions.",
        },
        {
            title: "Planning",
            description:
                "Our team crafts a tailored strategy and roadmap to ensure your project’s success.",
        },
        {
            title: "Design & Development",
            description:
                "We create modern, responsive solutions using the latest technologies and creative design.",
        },
        {
            title: "Testing",
            description:
                "Rigorous testing ensures that your solution meets our high-quality standards.",
        },
        {
            title: "Launch & Support",
            description:
                "We deploy your solution and provide ongoing support to ensure continuous success.",
        },
    ];

    return (
        <section id="process" className="py-16 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold text-primary mb-12 animate-fadeInUp">
                    Our Process
                </h1>
                <div className="relative">
                    {/* Vertical timeline line – visible on desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-primary opacity-50 animate-pulseLine"></div>
                    <div className="space-y-16">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-center relative group animate-fadeInUp transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Left Column: display text for even-indexed steps */}
                                    <div className="w-full md:w-1/2 flex justify-end md:pr-12">
                                        {isEven && (
                                            <div className="text-right">
                                                <h3 className="text-2xl font-semibold text-primary mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg text-gray-800">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Middle Column: number circle with icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold border-2 border-gray-200 shadow-xl transition-transform duration-300 group-hover:rotate-6">
                                        {/* Optionally, you can include an icon inside */}
                                        {/* <FaRegCheckCircle className="w-8 h-8" /> */}
                                        {index + 1}
                                    </div>

                                    {/* Right Column: display text for odd-indexed steps */}
                                    <div className="w-full md:w-1/2 flex justify-start md:pl-12">
                                        {!isEven && (
                                            <div className="text-left">
                                                <h3 className="text-2xl font-semibold text-primary mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-lg text-gray-800">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
