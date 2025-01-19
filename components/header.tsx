import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-2xl font-bold">
                    GradeX
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Dashboard</a>
                    <a href="#" className="hover:text-gray-300">Services</a>
                    <a href="#" className="hover:text-gray-300">Contact Us</a>
                </nav>
                <div>
                    <button className="bg-white px-4 py-4 text-blue-600 hover:bg-gray-200 rounded-full">
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;