export const metadata = {
    title: "Portfolio | Novel TechWorks",
    description: "Check out our recent projects."
};

export default function PortfolioPage() {
    return (
        <section id="portfolio" className="py-16 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-4 text-primary animate-fadeIn">
                    Our Portfolio
                </h1>
                <p className="text-lg text-gray-800 mb-12 animate-fadeIn delay-200">
                    Explore our recent projects that showcase our creativity and technical expertise.
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="relative group overflow-hidden rounded-lg shadow-lg transition transform duration-300 hover:scale-105 animate-fadeIn delay-300"
                        >
                            <img
                                src={`https://source.unsplash.com/600x400/?web,design,blue,${item}`}
                                alt={`Project ${item}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center rounded-lg">
                <span className="text-xl font-bold text-white mb-2">
                  Project {item}
                </span>
                                <p className="text-sm text-white px-4">
                                    A brief description of the project goes here.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12">
                    <a
                        href="#"
                        className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition transform hover:scale-105 animate-bounce"
                    >
                        View More Projects
                    </a>
                </div>
            </div>
        </section>
    );
}
