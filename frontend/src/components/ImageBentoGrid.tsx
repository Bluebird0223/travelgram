// src/components/ImageBentoGrid.tsx

import React from 'react';
import { Heart, Bookmark, UserCheck } from 'lucide-react';

interface PostImage {
    id: number;
    alt: string;
    url: string;
    likes: number;
    colSpan?: number;
    rowSpan?: number;
}

interface SavedImage {
    id: number;
    alt: string;
    url: string;
    saved: number;
    colSpan?: number;
    rowSpan?: number;
}

interface TaggedImage {
    id: number;
    alt: string;
    url: string;
    tags: number;
    colSpan?: number;
    rowSpan?: number;
}

type ImageType = PostImage | SavedImage | TaggedImage;
type GridType = 'posts' | 'saved' | 'tagged';

interface ImageBentoGridProps {
    images: ImageType[];
    type?: GridType;
}

const ImageBentoGrid: React.FC<ImageBentoGridProps> = ({ images, type = 'posts' }) => {
    const getIconAndCount = (image: ImageType) => {
        switch (type) {
            case 'saved':
                return {
                    icon: <Bookmark size={20} className="fill-white" />,
                    count: (image as SavedImage).saved?.toLocaleString() || '0'
                };
            case 'tagged':
                return {
                    icon: <UserCheck size={20} className="text-white" />,
                    count: (image as TaggedImage).tags?.toLocaleString() || '0'
                };
            case 'posts':
            default:
                return {
                    icon: <Heart size={20} className="fill-white" />,
                    count: (image as PostImage).likes?.toLocaleString() || '0'
                };
        }
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
            {images.map((image) => {
                // For mobile, make everything 1x1 grid
                const colClass = image.colSpan === 2 ? 'sm:col-span-2 col-span-1' : 'col-span-1';
                const rowClass = image.rowSpan === 2 ? 'sm:row-span-2 row-span-1' : 'row-span-1';

                const { icon, count } = getIconAndCount(image);

                return (
                    <div
                        key={image.id}
                        className={`relative group overflow-hidden ${colClass} ${rowClass}`}
                    >
                        {/* Image element */}
                        <div
                            className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                            data-alt={image.alt}
                            style={{
                                backgroundImage: `url("${image.url}")`,
                                aspectRatio: image.rowSpan === 2 ? '4/5' : '1/1'
                            }}
                        ></div>

                        {/* Hover Overlay with Stats */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <div className="flex items-center gap-4 text-white font-bold text-lg">
                                <div className="flex items-center gap-1.5">
                                    {icon}
                                    <span>{count}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ImageBentoGrid;