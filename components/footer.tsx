import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-2">GradeX</h2>
                        <p className="text-gray-400">© 2025 GradeX All rights reserved.</p>
                    </div>
                <a href="https://www.linkedin.com/in/hiihimanshi/" target="_blank" rel="noopener noreferrer" 
  className="fixed bottom-4 right-4 mt-8 px-5 py-2 mb-6 md:mb-0 bg-white text-slate-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-110 animate-fadeInUp delay-600 flex items-center space-x-2">
  <span>Created by Himanshi</span>
</a>

                    {/* <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Links</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Dashboard</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
                        </ul>
                    </div> */}
                    
                    {/* <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;