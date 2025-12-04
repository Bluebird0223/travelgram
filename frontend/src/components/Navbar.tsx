import React, { useState, useEffect, useRef } from 'react';
import { Search, Home, MessageSquare, PlusSquare, Compass, Heart, Menu, X, LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Logo = () => (
    <div className="text-xl font-bold cursor-pointer dark:text-white">
        <h1
            className="text-2xl tracking-tight font-bold"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 800 }}
        >
            Travelgram
        </h1>
    </div>
);

const SearchInput = () => (
    <div className="hidden lg:flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2 flex-1 max-w-sm">
        <Search size={18} className="text-neutral-500 dark:text-neutral-400 mr-2" />
        <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm focus:outline-none dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400"
        />
    </div>
);

const RightIcons = () => {
    const navigate = useNavigate();
    const menuRef = useRef(null);

    return (
        <div className="flex items-center space-x-5">
            {/* Standard Icons */}
            <Home size={18} onClick={() => navigate("/")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 hidden sm:block" />
            <MessageSquare size={18} onClick={() => navigate("/messages")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 hidden sm:block" />
            <PlusSquare size={18} onClick={() => navigate("/create")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 hidden sm:block" />
            <Compass size={18} onClick={() => navigate("/explore")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 hidden lg:block" />
            <Heart size={18} onClick={() => navigate("/likes")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 hidden lg:block" />
            <Search size={18} onClick={() => navigate("/search")} className="cursor-pointer hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400 block lg:hidden" />

            <div
                className="relative"
                ref={menuRef}
            >
                <div className="w-6 h-6 bg-blue-400 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                    onClick={() => navigate("/profile")}>
                    <img className='w-full h-full rounded-full' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDORy3EViqNqfQbsMKxjNHnwPA0-FoVJR3tamuMzwqg9hPRRRQzcyVsrhdegGVzopPFJ8oTxoB8zxRToXp6T8SQyq-GR1OPHgihH4k5zkpowMPjmmOloCtek6cESGvkvZDScIlow6OY2eZ7YXfmxUbJbFpE9zsZDf3-2P6CPrVVjN_ehVrx-s5rlqT-9ObyTlOifXWhbpLI63iX05zUcl26LXuLfXE2HuQAU5jHbMSca_nosEC_BATZOn3LM6r52WC1K2-mhki4TSs" alt="profile" />
                </div>
            </div>
        </div>
    );
};

// --- Navbar Component (No Change) ---
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 border-b border-neutral-200 dark:border-neutral-800">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
                <Logo />
                <SearchInput />
                <div className="flex items-center space-x-4">
                    <RightIcons />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-1 rounded-md text-neutral-700 dark:text-neutral-300 sm:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown (Unchanged) */}
            {isMenuOpen && (
                <div className="sm:hidden absolute top-12 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-neutral-200 dark:border-neutral-800 p-4">
                    <a href="#" className="block p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
                        Settings
                    </a>
                    {/* Logout in mobile menu */}
                    <a href="#" className="flex items-center p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md">
                        <LogOut size={16} className="mr-2" />
                        Logout
                    </a>
                </div>
            )}
        </header>
    );
};