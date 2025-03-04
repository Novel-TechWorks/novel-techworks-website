"use client";

export const metadata = {
    title: "Contact | Novel TechWorks",
    description: "Get in touch with us."
};

export default function ContactPage() {
    return (
        <section id="contact" className="py-20 text-white">
            <div className="max-w-3xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white text-center mb-8 animate-fadeInUp">
                    Contact Us
                </h1>
                <p className="text-lg text-center mb-8 animate-fadeInUp delay-200">
                    Have questions or ready to start your project? Let’s connect and bring your vision to life.
                </p>
                <p className="text-center text-lg mb-12 animate-fadeInUp delay-300">
                    Email us at{" "}
                    <a
                        href="mailto:info@noveltechworks.ca"
                        className="underline hover:text-secondary transition"
                    >
                        info@noveltechworks.ca
                    </a>
                    <br />
                    Monday to Friday, 9 AM to 5 PM EST/EDT
                </p>
                <form
                    method="POST"
                    name="contact"
                    data-netlify="true"
                    className="space-y-6 bg-white p-8 rounded-2xl shadow-lg animate-fadeInUp delay-500"
                >
                    {/* Hidden input required by Netlify */}
                    <input type="hidden" name="form-name" value="contact"/>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition duration-300 text-gray-900"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition duration-300 text-gray-900"
                        />
                    </div>
                    <div>
            <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:border-primary transition duration-300 text-gray-900"
            ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-secondary transition transform hover:scale-105 animate-bounce"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
