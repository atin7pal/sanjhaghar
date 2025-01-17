import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

export function GalleryComponent({ url, alt, label }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <img
        className="h-[400px] w-full max-w-full rounded-lg object-cover object-center cursor-pointer max-[850px]:h-[250px]"
        src={url}
        alt={alt}
        onClick={handleImageClick}
      />

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{ zIndex: 1050 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm mt-[100px]"
          onClick={handleCloseModal}
        >
          <div
            style={{ zIndex: 1050 }}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              style={{ zIndex: 1050 }}
              src={url}
              alt={alt}
              className="w-full h-[600px] object-cover"
            />
            <button
              className="absolute top-2 right-2 bg-black/80 text-white rounded-full px-4 py-2"
              onClick={handleCloseModal}
            >
              <CgClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
