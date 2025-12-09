// PopUpCard.jsx
import React from 'react';

const PopUpCard = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose} // Close when clicking outside the card
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
            >
                {children}
                <div className="flex items-center justify-center mt-1">
                    <button
                        className="flex justify-center-safe px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>


            </div>
        </div>
    );
};

export default PopUpCard;