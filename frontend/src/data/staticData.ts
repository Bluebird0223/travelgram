export interface User {
    id: string;
    username: string;
    fullName: string;
    profilePic: string;
    bio: string;
    followers: number;
    following: number;
}

export interface Post {
    id: string;
    userId: string;
    imageUrl: string; // or videoUrl for reels
    caption: string;
    likes: number;
    comments: { userId: string; text: string }[];
    timestamp: string;
}

export interface Story {
    id: string;
    userId: string;
    imageUrl: string;
    timestamp: string;
}

export const users: User[] = [
    {
        id: '1',
        username: 'user1',
        fullName: 'User One',
        profilePic: 'https://via.placeholder.com/150', // Replace with real placeholder URLs
        bio: 'Living life!',
        followers: 1000,
        following: 500,
    },
    // Add more users...
];

export const posts: Post[] = [
    {
        id: 'p1',
        userId: '1',
        imageUrl: 'https://via.placeholder.com/400x400',
        caption: 'Beautiful day! 🌞',
        likes: 150,
        comments: [{ userId: '2', text: 'Nice!' }],
        timestamp: '2 hours ago',
    },
    // Add more posts...
];

export const stories: Story[] = [
    {
        id: 's1',
        userId: '1',
        imageUrl: 'https://via.placeholder.com/100',
        timestamp: '1 hour ago',
    },
    // Add more stories...
];

// Add to your existing staticData.ts
export interface Reel {
    id: string;
    userId: string;
    videoUrl: string;
    caption: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    music: string;
}

export const reels: Reel[] = [
    {
        id: "r1",
        userId: "1",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        caption: "Just vibing on this beautiful day!",
        likes: 12450,
        comments: 89,
        isLiked: false,
        music: "Original Audio - user1"
    },
    {
        id: "r2",
        userId: "2",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        caption: "POV: You finally nailed the dance",
        likes: 89320,
        comments: 1203,
        isLiked: true,
        music: "Heat Waves - Glass Animals"
    },
    {
        id: "r3",
        userId: "3",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        caption: "Morning routine be like...",
        likes: 45210,
        comments: 567,
        isLiked: false,
        music: "Levitating - Dua Lipa"
    },
    // Add more for smooth scrolling
    {
        id: "r4",
        userId: "1",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        caption: "Nature is healing",
        likes: 67890,
        comments: 234,
        isLiked: true,
        music: "Golden Hour - JVKE"
    },
];