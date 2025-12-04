// src/components/ImageBentoGrid.tsx

import React from 'react';
import { postImages, type PostImage } from '../data/images';
import { Heart } from 'lucide-react';

interface ImageBentoGridProps {
    images: PostImage[];
}

const ImageBentoGrid: React.FC<ImageBentoGridProps> = ({ images }) => {
    return (
        // Mobile: 2 columns, Desktop: 3 columns with proper spacing
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-min">
            {images.map((image) => {
                // For mobile, make everything 1x1 grid
                const colClass = image.colSpan === 2 ? 'sm:col-span-2 col-span-1' : 'col-span-1';
                const rowClass = image.rowSpan === 2 ? 'sm:row-span-2 row-span-1' : 'row-span-1';

                // Calculate aspect ratio for mobile
                const mobileAspect = 'aspect-square';
                const desktopAspect = image.rowSpan === 2 ? 'sm:aspect-[4/5]' : 'sm:aspect-square';

                return (
                    <div
                        key={image.id}
                        className={`relative group overflow-hidden rounded-lg ${mobileAspect} ${desktopAspect} ${colClass} ${rowClass}`}
                    >
                        {/* Image element */}
                        <div
                            className="bg-cover bg-center w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
                            data-alt={image.alt}
                            style={{ backgroundImage: `url("${image.url}")` }}
                        ></div>

                        {/* Hover Overlay with Likes/Stats */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                            <div className="flex items-center gap-4 text-white font-bold text-lg">
                                <div className="flex items-center gap-1.5">
                                    <Heart size={20} className="fill-white" />
                                    <span>{image.likes.toLocaleString()}</span>
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