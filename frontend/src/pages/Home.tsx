import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

const Home = () => {
    const { logout } = useAuth();

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white">TravelGram</h1>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>

            {/* Welcome Section */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mb-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-white mb-2">
                    Welcome back, Traveler!
                </h2>
                <p className="text-gray-300">
                    Share your travel adventures and explore amazing destinations.
                </p>
            </div>

            {/* Feed Container */}
            <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
                    <p className="text-gray-300 text-center">
                        Your travel feed will appear here. Start by creating your first post!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
