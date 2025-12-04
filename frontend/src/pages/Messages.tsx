import { useState } from "react";
import {
    Search,
    Video,
    Phone,
    MoreVertical,
    Send,
    Image as ImageIcon,
    Heart,
    Mic,
    ChevronLeft,
    Check,
    CheckCheck,
    Camera,
    User,
    Home,
    Compass,
    PlusSquare,
    MessageCircle,
    Settings,
    LogOut
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Messages = () => {
    const { logout } = useAuth();
    const [activeChat, setActiveChat] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // Mock conversations
    const conversations = [
        {
            id: 1,
            user: {
                name: "Anna Traveler",
                username: "wanderlust_anna",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
                verified: true,
                online: true
            },
            lastMessage: "Check out this amazing beach spot! 🏖️",
            timestamp: "10 min",
            unread: 3,
            typing: false
        },
        {
            id: 2,
            user: {
                name: "James Explorer",
                username: "travel_james",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                verified: false,
                online: false
            },
            lastMessage: "What time are we meeting tomorrow?",
            timestamp: "1 hr",
            unread: 0,
            typing: false
        },
        {
            id: 3,
            user: {
                name: "Mountain Mike",
                username: "mountain_mike",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                verified: true,
                online: true
            },
            lastMessage: "The hike was incredible!",
            timestamp: "2 hr",
            unread: 1,
            typing: true
        },
        {
            id: 4,
            user: {
                name: "Foodie Travels",
                username: "foodie_travels",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                verified: false,
                online: true
            },
            lastMessage: "You have to try this restaurant!",
            timestamp: "3 hr",
            unread: 0,
            typing: false
        },
        {
            id: 5,
            user: {
                name: "Beach Lover",
                username: "beach_lover",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                verified: false,
                online: false
            },
            lastMessage: "The sunset was magical today 🌅",
            timestamp: "1 d",
            unread: 0,
            typing: false
        },
        {
            id: 6,
            user: {
                name: "Urban Explorer",
                username: "urban_explorer",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                verified: true,
                online: true
            },
            lastMessage: "Check out my latest city guide!",
            timestamp: "2 d",
            unread: 0,
            typing: false
        }
    ];

    // Mock messages for active chat
    const messages = activeChat === 1 ? [
        { id: 1, text: "Hey! How was your trip to Bali?", sender: "them", time: "10:30 AM", read: true },
        { id: 2, text: "It was amazing! The beaches are incredible 🏖️", sender: "me", time: "10:32 AM", read: true },
        { id: 3, text: "You have to see Uluwatu Temple at sunset!", sender: "me", time: "10:32 AM", read: true },
        { id: 4, text: "That sounds magical! Do you have any photos?", sender: "them", time: "10:33 AM", read: true },
        { id: 5, text: "So many! Check out this one from today:", sender: "me", time: "10:34 AM", read: true },
        { id: 6, text: "Wow! That looks incredible! 😍", sender: "them", time: "10:35 AM", read: true },
        { id: 7, text: "You should definitely visit next month!", sender: "me", time: "10:36 AM", read: true },
        { id: 8, text: "Check out this amazing beach spot! 🏖️", sender: "them", time: "10:37 AM", read: false },
    ] : activeChat === 2 ? [
        { id: 1, text: "Hey James! Ready for the trip?", sender: "me", time: "Yesterday", read: true },
        { id: 2, text: "Yes! What time are we meeting tomorrow?", sender: "them", time: "Yesterday", read: true },
    ] : [];

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            // In real app, send message to backend
            console.log("Sending message:", messageInput);
            setMessageInput("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">

            <div className="max-w-6xl mx-auto h-[calc(100vh-80px)] lg:h-[calc(100vh-60px)]">
                <div className="flex h-full border-x border-gray-800">
                    {/* Left Sidebar - Conversations List */}
                    <div className={`${activeChat ? 'hidden lg:block' : 'block'} w-full lg:w-1/3 border-r border-gray-800`}>
                        {/* Conversations Header */}
                        <div className="p-4 border-b border-gray-800">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    {activeChat && (
                                        <button
                                            onClick={() => setActiveChat(null)}
                                            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </button>
                                    )}
                                    <h2 className="text-xl font-bold">Messages</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                                        <Video className="h-5 w-5" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-800 rounded-lg">
                                        <MoreVertical className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search messages"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Conversations List */}
                        <div className="overflow-y-auto h-[calc(100vh-180px)] lg:h-[calc(100vh-140px)]">
                            {conversations.map((conversation) => (
                                <div
                                    key={conversation.id}
                                    onClick={() => setActiveChat(conversation.id)}
                                    className={`p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer transition-colors ${activeChat === conversation.id ? 'bg-gray-900/70' : ''
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Avatar with online indicator */}
                                        <div className="relative">
                                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                                                <img
                                                    src={conversation.user.avatar}
                                                    alt={conversation.user.name}
                                                    className="h-full w-full rounded-full object-cover"
                                                />
                                            </div>
                                            {conversation.user.online && (
                                                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-black"></div>
                                            )}
                                        </div>

                                        {/* Conversation Info */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold truncate">{conversation.user.name}</span>
                                                    {conversation.user.verified && (
                                                        <span className="text-xs bg-blue-500 px-1.5 py-0.5 rounded-full">✓</span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-gray-400 truncate">
                                                    {conversation.typing ? (
                                                        <span className="text-blue-400 italic">typing...</span>
                                                    ) : (
                                                        conversation.lastMessage
                                                    )}
                                                </p>
                                                {conversation.unread > 0 && (
                                                    <span className="h-5 w-5 bg-blue-500 text-xs rounded-full flex items-center justify-center">
                                                        {conversation.unread}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Chat Window */}
                    <div className={`${activeChat ? 'block' : 'hidden lg:block'} flex-1 flex flex-col`}>
                        {activeChat ? (
                            <>
                                {/* Chat Header */}
                                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-0.5">
                                                <img
                                                    src={conversations.find(c => c.id === activeChat)?.user.avatar}
                                                    alt="User"
                                                    className="h-full w-full rounded-full object-cover"
                                                />
                                            </div>
                                            {conversations.find(c => c.id === activeChat)?.user.online && (
                                                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-black"></div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">
                                                    {conversations.find(c => c.id === activeChat)?.user.name}
                                                </span>
                                                {conversations.find(c => c.id === activeChat)?.user.verified && (
                                                    <span className="text-xs bg-blue-500 px-1.5 py-0.5 rounded-full">✓</span>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-400">
                                                {conversations.find(c => c.id === activeChat)?.user.online ? 'Online' : 'Offline'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <Phone className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <Video className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <MoreVertical className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Messages Container */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {/* Date Separator */}
                                    <div className="text-center">
                                        <span className="text-xs text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full">
                                            Today
                                        </span>
                                    </div>

                                    {/* Messages */}
                                    {messages.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[70%] rounded-2xl px-4 py-2 ${message.sender === 'me'
                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 rounded-tr-none'
                                                    : 'bg-gray-800 rounded-tl-none'
                                                    }`}
                                            >
                                                <p className="text-sm">{message.text}</p>
                                                <div className={`flex items-center gap-1 mt-1 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                                                    <span className="text-xs opacity-70">{message.time}</span>
                                                    {message.sender === 'me' && (
                                                        message.read ? (
                                                            <CheckCheck className="h-3 w-3 text-blue-300" />
                                                        ) : (
                                                            <Check className="h-3 w-3 opacity-70" />
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Typing Indicator */}
                                    {conversations.find(c => c.id === activeChat)?.typing && (
                                        <div className="flex justify-start">
                                            <div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3">
                                                <div className="flex gap-1">
                                                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Message Input */}
                                <div className="p-4 border-t border-gray-800">
                                    <div className="flex items-center gap-3">
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <PlusSquare className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <ImageIcon className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <Camera className="h-5 w-5" />
                                        </button>
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                value={messageInput}
                                                onChange={(e) => setMessageInput(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Message..."
                                                className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            />
                                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!messageInput.trim()}
                                            className={`p-2 rounded-full ${messageInput.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-800'}`}
                                        >
                                            <Send className="h-5 w-5" />
                                        </button>
                                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                                            <Mic className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            // Empty State when no chat is selected
                            <div className="flex-1 flex flex-col items-center justify-center p-8">
                                <div className="h-24 w-24 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center mb-6">
                                    <MessageCircle className="h-12 w-12 text-gray-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
                                <p className="text-gray-400 text-center mb-8">
                                    Send private messages to your travel friends
                                </p>
                                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold transition-all duration-300">
                                    Send Message
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 py-3 px-4 z-50">
                <div className="flex justify-around items-center">
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                        <Home className="h-6 w-6" />
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
                    <button className="flex flex-col items-center gap-1 text-blue-500">
                        <MessageCircle className="h-6 w-6" />
                        <span className="text-xs">Messages</span>
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

export default Messages;