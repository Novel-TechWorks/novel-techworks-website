import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-bg border-t border-gray-700 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    {/*<a href="#" className="text-primary hover:text-primary transition">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-primary hover:text-primary transition">
                        <FaTwitter size={20} />
                    </a>*/}
                    <a href="https://www.linkedin.com/company/novel-techworks" className="text-primary hover:text-primary transition">
                        <FaLinkedinIn size={20} />
                    </a>
                    {/*<a href="#" className="text-primary hover:text-primary transition">
                        <FaInstagram size={20} />
                    </a>*/}
                </div>
                <p className="text-sm text-white">
                    &copy; 2025 Novel TechWorks Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
