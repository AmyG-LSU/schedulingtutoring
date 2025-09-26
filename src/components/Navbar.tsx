// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (lucide-react)

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 ">
                <div className="flex justify-between items-center">
                    {/* Brand */}
                    <div className="flex flex-col leading-tight items-center py-0.5">
                        <Link href="/" className="text-3xl font-bold text-blue-400 ">
                            Student
                        </Link>
                        <Link href="/" className="text-3xl font-bold text-blue-400">
                            Tutors
                        </Link>
                    </div>


                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/about" className="text-white hover:text-blue-600">
                            About Us
                        </Link>
                        <Link href="/login" className="text-white hover:text-blue-600">
                            Login
                        </Link>
                        <Link href="/contact" className="text-white hover:text-blue-600">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 py-2 space-y-2">
                        <Link
                            href="/about"
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/login"
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            href="/contact"
                            className="block text-gray-700 hover:text-blue-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
