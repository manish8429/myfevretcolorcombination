import { FaGithub, FaInstagram, FaTelegram, FaYoutube, FaCoffee } from "react-icons/fa"; // Importing icons from React Icons
import indianlogo from "../assets/indianlogo.png";

export default function Footer() {
    return (
        <>
            <div style={{ paddingTop: "4rem" }}>
                <hr style={{ color: "#a5b4fc80" }} />
            </div>
            <footer className="bg-[#0F172A] text-white py-8 px-6 md:px-12 lg:px-16">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0" style={{ paddingBottom: "2.5rem", paddingTop: "3rem" }}>

                    {/* Left Side: Logo & Brand Name */}
                    <div className="flex flex-col items-center md:items-start gap-4 md:gap-8" style={{paddingLeft:"1rem"}}>
                        <div className="relative flex items-center gap-2 group">
                            {/* Logo with Hover Gradient Effect */}
                            <div className="relative">
                                {/* Gradient Border Effect with 60% Opacity */}
                                <div className="absolute inset-x-[-12px] top-[-12px] h-16 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                                    style={{
                                        background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                                        filter: "blur(8px)",
                                    }}
                                ></div>

                                {/* Actual Logo */}
                                <img src={indianlogo} alt="Logo" className="h-10 w-10 relative z-10" />
                            </div>

                            {/* Gradient Text */}
                            <h1
                                className="text-xl font-bold bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                IndianDeveloper
                            </h1>
                        </div>

                        <span className="text-xs text-[#95A1B7]">Unlimited Tools Power</span>
                        <div className="text-gray-300 mt-6 text-sm md:text-base max-w-3xl mx-auto px-4">
                            <span className="text-sm text-[#657185]">Access unlimited Tools power. Start building amazing Images with cutting-edge AI models.</span>
                            <br />
                            <span className="text-[#657185] text-sm">Secure, scalable, and easy to Use into your existing projects.</span>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex gap-6 my-4 md:my-0">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
                            </a>
                            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                                <FaTelegram className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="w-6 h-6 text-gray-400 hover:text-red-500 transition" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6 text-gray-400 hover:text-pink-500 transition" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Links, Button & Copyright */}
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-right w-full md:w-auto pt-6">
                        {/* First Line */}
                        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition" style={{ fontWeight: "bold" }}>About</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition" style={{ fontWeight: "bold" }}>Terms & Conditions</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition" style={{ fontWeight: "bold" }}>Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition" style={{ fontWeight: "bold" }}>Refund Policy</a>
                        </div>

                        {/* Second Line */}
                        <div className="mt-6 text-center">
                            <button className="flex items-center justify-center gap-3 bg-yellow-300 text-black font-medium py-3 px-6 rounded-xl shadow-lg hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                                <FaCoffee className="w-6 h-6" />
                                <span className="text-md">Buy me a Tool</span>
                            </button>
                        </div>

                        {/* Third Line */}
                        <p className="text-sm text-gray-400 mt-6 md:mt-8">© 2025 IndianDeveloper. All rights reserved.</p>
                    </div>

                </div>
            </footer>
        </>
    );
}
