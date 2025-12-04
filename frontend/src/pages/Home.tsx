import { useAuth } from "../context/AuthContext";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, HomeIcon, Search, PlusSquare, User, Compass, Camera } from "lucide-react";

const Home = () => {
    // Mock data for highlights
    const highlights = [
        { id: 1, name: "Travel", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", new: true },
        { id: 2, name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", new: false },
        { id: 3, name: "Europe", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963", new: true },
        { id: 4, name: "Food", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591", new: false },
        { id: 5, name: "Sunset", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", new: true },
        { id: 6, name: "Add", image: null, new: true }
    ];

    // Mock data for posts
    const posts = [
        {
            id: 1,
            user: {
                name: "wanderlust_anna",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                verified: true
            },
            location: "Bali, Indonesia",
            time: "2 hours ago",
            images: [
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
                "https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
            ],
            likes: 1250,
            comments: 89,
            caption: "Chasing sunsets in Bali 🌅 The Uluwatu Temple at golden hour is absolutely magical! #Bali #Travel #Sunset #Wanderlust",
            bookmarked: true
        },
        {
            id: 2,
            user: {
                name: "travel_james",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                verified: false
            },
            location: "Santorini, Greece",
            time: "5 hours ago",
            images: [
                "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff"
            ],
            likes: 3247,
            comments: 245,
            caption: "The iconic blue domes of Santorini against the Aegean Sea 💙 No filter needed! #Santorini #Greece #TravelPhotography",
            bookmarked: false
        },
        {
            id: 3,
            user: {
                name: "mountain_mike",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                verified: true
            },
            location: "Swiss Alps",
            time: "1 day ago",
            images: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
            ],
            likes: 1890,
            comments: 123,
            caption: "Morning hike in the Swiss Alps 🏔️ The air is crisp and the views are breathtaking! #SwissAlps #Hiking #Mountains #Adventure",
            bookmarked: true
        }
    ];

    // Mock data for suggestions
    const suggestions = [
        {
            id: 1,
            name: "foodie_travels",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            verified: false,
            reason: "Popular in travel"
        },
        {
            id: 2,
            name: "adventure_seeker",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            verified: true,
            reason: "Followed by travel_james"
        },
        {
            id: 3,
            name: "beach_lover",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            verified: false,
            reason: "New to TravelGram"
        },
        {
            id: 4,
            name: "urban_explorer",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            verified: true,
            reason: "Similar to you"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Feed */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Stories/Highlights */}
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4">
                        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide pb-2">
                            {highlights.map((highlight) => (
                                <div key={highlight.id} className="flex flex-col items-center gap-2 min-w-[70px]">
                                    <div className={`relative ${highlight.image ? 'p-0.5' : ''} ${highlight.new ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gray-700'} rounded-full`}>
                                        <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
                                            {highlight.image ? (
                                                <img
                                                    src={highlight.image}
                                                    alt={highlight.name}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <PlusSquare className="h-8 w-8 text-gray-400" />
                                            )}
                                        </div>
                                        {highlight.new && !highlight.image && (
                                            <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-black"></div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-400 truncate">{highlight.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Posts Feed */}
                    <div className="space-y-6">
                        {posts.map((post) => (
                            <div key={post.id} className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden">
                                {/* Post Header */}
                                <div className="p-4 border-b border-gray-800">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 p-0.5">
                                                <img
                                                    src={post.user.avatar}
                                                    alt={post.user.name}
                                                    className="h-full w-full rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold">{post.user.name}</span>
                                                    {post.user.verified && (
                                                        <span className="text-xs bg-blue-500 px-2 py-0.5 rounded-full">✓</span>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-400">{post.location} • {post.time}</p>
                                            </div>
                                        </div>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <MoreHorizontal className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Post Image */}
                                <div className="aspect-square bg-gray-800">
                                    <img
                                        src={post.images[0]}
                                        alt={post.caption}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Post Actions */}
                                <div className="p-4 border-b border-gray-800">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-4">
                                            <button className="p-2 hover:bg-gray-800 rounded-lg">
                                                <Heart className="h-6 w-6" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-800 rounded-lg">
                                                <MessageCircle className="h-6 w-6" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-800 rounded-lg">
                                                <Send className="h-6 w-6" />
                                            </button>
                                        </div>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <Bookmark className={`h-6 w-6 ${post.bookmarked ? 'fill-white' : ''}`} />
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-semibold">{post.likes.toLocaleString()} likes</p>
                                        <p className="text-sm">
                                            <span className="font-semibold">{post.user.name}</span> {post.caption}
                                        </p>
                                        <button className="text-gray-400 text-sm hover:text-white">
                                            View all {post.comments} comments
                                        </button>
                                    </div>
                                </div>

                                {/* Add Comment */}
                                <div className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gray-700">
                                            <img
                                                src={post.user.avatar}
                                                alt={post.user.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Add a comment..."
                                            className="flex-1 bg-transparent border-none outline-none text-sm placeholder-gray-500"
                                        />
                                        <button className="text-blue-400 font-semibold text-sm hover:text-blue-300">
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Suggestions */}
                <div className="space-y-6">
                    {/* Current User Profile */}
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4">
                        <div className="flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full bg-gradient-to-r from-green-300 to-green-600 p-0.5">
                                <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                                    <User className="h-7 w-7 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold">traveler_you</p>
                                <p className="text-sm text-gray-400">Alex Wanderlust</p>
                            </div>
                            <button className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                                Switch
                            </button>
                        </div>
                    </div>

                    {/* Suggestions for You */}
                    <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-400">Suggestions For You</h3>
                            <button className="text-sm font-semibold hover:text-white">See All</button>
                        </div>

                        <div className="space-y-4">
                            {suggestions.map((user) => (
                                <div key={user.id} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 p-0.5">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="h-full w-full rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <span className="font-semibold text-sm">{user.name}</span>
                                                {user.verified && (
                                                    <span className="text-xs text-blue-400">✓</span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-400">{user.reason}</p>
                                        </div>
                                    </div>
                                    <button className="text-blue-400 text-sm font-semibold hover:text-blue-300">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                            <a href="#" className="hover:text-white">About</a>
                            <a href="#" className="hover:text-white">Help</a>
                            <a href="#" className="hover:text-white">Press</a>
                            <a href="#" className="hover:text-white">API</a>
                            <a href="#" className="hover:text-white">Jobs</a>
                            <a href="#" className="hover:text-white">Privacy</a>
                            <a href="#" className="hover:text-white">Terms</a>
                            <a href="#" className="hover:text-white">Locations</a>
                            <a href="#" className="hover:text-white">Language</a>
                        </div>
                        <p className="text-xs text-gray-500">© 2024 TRAVELGRAM FROM META</p>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 py-3 px-4 z-50">
                <div className="flex justify-around items-center">
                    <button className="flex flex-col items-center gap-1 text-white">
                        <HomeIcon className="h-6 w-6" />
                        <span className="text-xs">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <Search className="h-6 w-6" />
                        <span className="text-xs">Search</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <PlusSquare className="h-6 w-6" />
                        <span className="text-xs">Create</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <Compass className="h-6 w-6" />
                        <span className="text-xs">Explore</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <User className="h-6 w-6" />
                        <span className="text-xs">Profile</span>
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Home;