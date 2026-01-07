import React from "react";

interface ImageGalleryProps {
  screenshots: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  screenshots,
  currentIndex,
  onIndexChange,
}) => {
  if (screenshots.length === 0) {
    return (
      <div className="w-full h-64 bg-white/5 rounded-2xl flex items-center justify-center">
        <span className="text-gray-500">Sem imagens disponíveis</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-video rounded-2xl overflow-hidden bg-white/5">
        <img
          src={screenshots[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Thumbnails */}
      {screenshots.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => onIndexChange(index)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentIndex
                  ? "border-white"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={screenshot}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
