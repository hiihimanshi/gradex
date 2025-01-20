"use client";
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    GradeX
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } absolute top-full left-0 w-full bg-gray-900 md:bg-transparent md:relative md:flex md:space-x-4 md:items-center md:w-auto`}
                >
                    <a href="#" className="block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300">
                        Home
                    </a>
                    <a href="#" className="block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300">
                        Dashboard
                    </a>
                    <a href="#" className="block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300">
                        Services
                    </a>
                    <a href="#" className="block px-4 py-2 md:px-0 md:py-0 hover:text-gray-300">
                        Contact Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
