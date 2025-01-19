import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    GradeX
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">About</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>
                <div>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">
                        Login
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;