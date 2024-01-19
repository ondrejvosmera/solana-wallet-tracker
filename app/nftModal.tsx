import React from 'react';

interface NftModalProps {
  imageUrl: string;
  onClose: () => void;
  nftAttributes: {
    [key: string]: string;
  };
}

const NftModal: React.FC<NftModalProps> = ({ imageUrl, onClose, nftAttributes }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col bg-gray-800 p-6 rounded-3xl">
        
        <button
          onClick={onClose}
          className="flex w-20 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none mt-4"
        >
          Close
        </button>

        <div className='flex flex-row gap-12'>
        <img src={imageUrl} alt="NFT" className="w-[32rem] mb-4" />

          {/* Display NFT attributes */}
          <div className="text-white">
            <ul>
              {Object.entries(nftAttributes).map(([attribute, value], index) => (
                <li key={index}>
                  <strong>{attribute}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NftModal;
