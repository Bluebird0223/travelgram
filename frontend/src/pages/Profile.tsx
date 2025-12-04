import React from 'react';
import ImageBentoGrid from '../components/ImageBentoGrid';
import { postImages } from '../data/images';
import {
    Grid3x3,
    Bookmark,
    UserCheck,
    Edit3,
    Globe,
    MapPin,
    Users,
    Heart,
    MessageCircle,
    Send,
    MoreVertical,
    Home,
    Compass,
    Camera,
    User,
    Instagram,
    Twitter,
    Youtube,
    Mail
} from 'lucide-react';

const Profile: React.FC = () => {
    return (
        <main className="flex justify-center pt-2 md:pt-2 pb-10 min-h-screen bg-black text-white">
            <div className="flex flex-col w-full max-w-6xl px-4 md:px-6 lg:px-8">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row gap-8 p-4 md:p-6 border-b border-gray-800 pb-8 md:pb-10">
                    {/* Profile Image */}
                    <div className="flex justify-center md:justify-center ">
                        <div className="relative">
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 ring-4 ring-gray-800"
                                data-alt="A portrait of Alex Wanderlust smiling"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDORy3EViqNqfQbsMKxjNHnwPA0-FoVJR3tamuMzwqg9hPRRRQzcyVsrhdegGVzopPFJ8oTxoB8zxRToXp6T8SQyq-GR1OPHgihH4k5zkpowMPjmmOloCtek6cESGvkvZDScIlow6OY2eZ7YXfmxUbJbFpE9zsZDf3-2P6CPrVVjN_ehVrx-s5rlqT-9ObyTlOifXWhbpLI63iX05zUcl26LXuLfXE2HuQAU5jHbMSca_nosEC_BATZOn3LM6r52WC1K2-mhki4TSs")' }}
                            />
                            <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2 shadow-lg">
                                <Edit3 className="h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-col gap-6 flex-1">
                        {/* Username and Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 flex-1">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">alex_travels</h1>
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-sm font-semibold text-white transition-colors">
                                        Edit Profile
                                    </button>
                                    <button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg text-sm font-semibold text-white transition-colors">
                                        View Archive
                                    </button>
                                    <button className="p-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-lg">
                                        <MoreVertical className="h-5 w-5 text-gray-300" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Profile Stats */}
                        <div className="flex justify-center sm:justify-start gap-8 md:gap-12 text-base">
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-white font-bold text-lg md:text-xl">152</p>
                                <p className="text-gray-400 text-sm md:text-base">posts</p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-white font-bold text-lg md:text-xl">1.2k</p>
                                <p className="text-gray-400 text-sm md:text-base">followers</p>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-white font-bold text-lg md:text-xl">430</p>
                                <p className="text-gray-400 text-sm md:text-base">following</p>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="text-white space-y-3 max-w-2xl">
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-lg">Alex Wanderlust</h2>
                                <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-md">Professional</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Exploring the world, one city at a time. 🌎 Lover of sunsets and local cuisines.
                                Photographer & Digital Nomad. Sharing travel tips and hidden gems.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    <span>📍 Currently in Bali, Indonesia</span>
                                </div>
                                <a
                                    href="#"
                                    className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    <Globe className="h-4 w-4" />
                                    <span>www.alextravels.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {['Bali 2024', 'Europe Tour', 'Food Diaries', 'Sunset Spots', 'Travel Gear'].map((highlight, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2 min-w-[80px]">
                                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-700 to-blue-600 p-0.5">
                                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                                            <span className="text-2xl">✨</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 truncate w-full text-center">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="pb-6">
                    <div className="flex border-b border-gray-800 justify-center md:justify-center">
                        <a className="flex items-center justify-center border-b-2 border-blue-500 text-white gap-2 py-4 px-6 flex-1 sm:flex-initial sm:min-w-[140px] hover:bg-gray-900/50 transition-colors">
                            <Grid3x3 className="h-5 w-5" />
                            <p className="text-sm font-semibold tracking-wider hidden sm:block">POSTS</p>
                        </a>
                        <a className="flex items-center justify-center border-b-2 border-transparent text-gray-400 hover:text-white gap-2 py-4 px-6 flex-1 sm:flex-initial sm:min-w-[140px] hover:bg-gray-900/50 transition-colors">
                            <Bookmark className="h-5 w-5" />
                            <p className="text-sm font-semibold tracking-wider hidden sm:block">SAVED</p>
                        </a>
                        <a className="flex items-center justify-center border-b-2 border-transparent text-gray-400 hover:text-white gap-2 py-4 px-6 flex-1 sm:flex-initial sm:min-w-[140px] hover:bg-gray-900/50 transition-colors">
                            <UserCheck className="h-5 w-5" />
                            <p className="text-sm font-semibold tracking-wider hidden sm:block">TAGGED</p>
                        </a>
                    </div>
                </div>

                {/* Stats Bar for Mobile */}
                <div className="flex md:hidden justify-around py-4 border-b border-gray-800 mb-6">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                            <Heart className="h-4 w-4 text-red-400" />
                            <p className="text-white font-semibold">4.5k</p>
                        </div>
                        <p className="text-gray-400 text-xs">Likes</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                            <MessageCircle className="h-4 w-4 text-green-400" />
                            <p className="text-white font-semibold">892</p>
                        </div>
                        <p className="text-gray-400 text-xs">Comments</p>
                    </div>
                </div>

                {/* Image Grid - Fixed for Mobile */}
                <div className="px-0 sm:px-0">
                    <ImageBentoGrid images={postImages} />
                </div>

                {/* Footer Section */}
                <footer className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Social Links */}
                        <div className="flex-1">
                            <div className="text-sm text-gray-500">
                                <p>© 2024 Alex Travels. All rights reserved.</p>
                                <p className="mt-1">Made with ❤️ from around the world</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
};

export default Profile;