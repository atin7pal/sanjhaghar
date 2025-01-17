import React, { useEffect, useState } from "react";

export const Popup = ({ children, onClose, background }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className=" inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 h-screen w-full fixed"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`absolute rounded-lg w-full h-[100%] max-sm:w-full ${background} z-50 p-5`}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-0 text-white hover:text-gray-900 p-4 rounded-lg bg-black/50 py-2 px-4"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
