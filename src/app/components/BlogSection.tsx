export const metadata = {
    title: "Blog | Novel TechWorks",
    description: "Read our latest insights and updates."
};

export default function BlogPage() {
    return (
        <section id="blog" className="py-16 bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">Our Blog</h2>
                <p className="text-lg text-gray-800 max-w-xl mx-auto mb-10">
                    Stay updated with our latest insights, trends, and project showcases.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((post) => (
                        <div key={post} className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
                            <img
                                src={`https://source.unsplash.com/600x400/?blog,blue,${post}`}
                                alt={`Blog Post ${post}`}
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-primary mb-2">Blog Post Title {post}</h3>
                                <p className="text-sm text-gray-800">
                                    A brief summary of blog post {post}. Discover our insights on modern web development.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
