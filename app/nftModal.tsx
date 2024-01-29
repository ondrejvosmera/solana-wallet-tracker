import React, { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";

interface NftModalProps {
  imageUrl: string;
  onClose: () => void;
  nftAttributes: {
    [key: string]: string;
  };
  nftName: string;
}

const NftModal: React.FC<NftModalProps> = ({ imageUrl, onClose, nftAttributes, nftName }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        // Clicked outside the modal, close it
        onClose();
      }
    };

    // Attach the event listener when the modal is open
    document.addEventListener('mousedown', handleClickOutside);

    // Remove the event listener when the modal is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="flex flex-col bg-gray-200 text-black dark:bg-gray-800 dark:text-white p-10 rounded-3xl relative xl:max-w-[80%] lg:max-w-[80%] md:max-w-[80%] w-[70%] h-[80%] overflow-auto">

        <div className='flex'>
          <h3 className="text-2xl font-bold mb-4">{nftName}</h3>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 dark:text-white dark:hover:text-gray-400 text-2xl"
          >
            <IoClose />
          </button>
        </div>

        <div className='flex flex-col items-center xl:items-start lg:items-start xl:flex-row lg:flex-row gap-12'>
          <img src={imageUrl} alt="NFT" className="xl:w-[32rem] mb-4 object-cover lg:w-[24rem] w-[24rem]" />

          <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5'>
            {Object.entries(nftAttributes).map(([attribute, value], index) => (
              <div key={index} className='flex flex-col p-3 bg-gray-300 dark:bg-gray-700 rounded-xl max-w-36 max-h-36'>
                <span className='text-xs dark:text-gray-400'>{attribute}:</span> <span className='flex items-center text-sm font-medium'>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftModal;
