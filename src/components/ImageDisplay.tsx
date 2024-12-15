import React, { useState } from 'react';

interface ImageDisplayProps {
  imageUrl: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close modal only if the overlay (background) is clicked
    if (event.currentTarget === event.target) {
      handleCloseModal();
    }
  };

  return (
    <div className="relative aspect-[16/12] sm:aspect-[2/1] lg:aspect-square lg:w-[10rem] lg:max-w-[12rem] lg:shrink-0">
      <img
        alt=""
        src={imageUrl}
        className="border border-[silver] absolute inset-0 h-full w-full rounded-md object-cover cursor-pointer"
        onClick={handleImageClick}
      />

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="relative">
            <button
              className="absolute top-0 right-0 p-2 w-8 h-8 flex items-center justify-center text-xl text-black bg-[silver]"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              alt=""
              src={imageUrl}
              className="max-w-full max-h-full rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
