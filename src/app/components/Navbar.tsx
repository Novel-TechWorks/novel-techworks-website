"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo & Site Name */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo_2.png" // Place your logo in the public folder
                        alt="Novel TechWorks Logo"
                        width={250}
                        height={250}
                        className="object-cover"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="#hero" onClick={handleLinkClick} className="transition hover:text-primary">
                        Home
                    </Link>
                    <Link href="#services" onClick={handleLinkClick} className="transition hover:text-primary">
                        Services
                    </Link>
                    <Link href="#about" onClick={handleLinkClick} className="transition hover:text-primary">
                        About
                    </Link>
                    <Link href="#process" onClick={handleLinkClick} className="transition hover:text-primary">
                        Process
                    </Link>
                    <Link href="#portfolio" onClick={handleLinkClick} className="transition hover:text-primary">
                        Portfolio
                    </Link>
                    <Link href="#testimonials" onClick={handleLinkClick} className="transition hover:text-primary">
                        Testimonials
                    </Link>
                    <Link href="#contact" onClick={handleLinkClick} className="transition hover:text-primary">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 focus:outline-none transition duration-300"
                    aria-label="Toggle navigation"
                >
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white text-primary bg-opacity-95 shadow-md transition-colors duration-300">
                    <nav className="flex flex-col space-y-4 px-6 py-4">
                        <Link href="#hero" onClick={handleLinkClick} className="transition hover:text-primary">
                            Home
                        </Link>
                        <Link href="#services" onClick={handleLinkClick} className="transition hover:text-primary">
                            Services
                        </Link>
                        <Link href="#about" onClick={handleLinkClick} className="transition hover:text-primary">
                            About
                        </Link>
                        <Link href="#process" onClick={handleLinkClick} className="transition hover:text-primary">
                            Process
                        </Link>
                        <Link href="#portfolio" onClick={handleLinkClick} className="transition hover:text-primary">
                            Portfolio
                        </Link>
                        <Link href="#testimonials" onClick={handleLinkClick} className="transition hover:text-primary">
                            Testimonials
                        </Link>
                        <Link href="#contact" onClick={handleLinkClick} className="transition hover:text-primary">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
