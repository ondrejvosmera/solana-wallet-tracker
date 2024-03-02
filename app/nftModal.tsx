import React, { useEffect, useRef } from 'react';
import { IoClose } from "react-icons/io5";

interface NftModalProps {
  imageUrl: string;
  onClose: () => void;
  nftAttributes: { [key: string]: string };
  nftName: string;
}

const NftModal: React.FC<NftModalProps> = ({ imageUrl, onClose, nftAttributes, nftName }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10">
      <div ref={modalRef} className="flex flex-col bg-slate-100 dark:bg-gray-900 border border-opacity-20 border-gray-300 dark:border-gray-800 backdrop-filter backdrop-blur-md bg-opacity-80 dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-80 text-black dark:text-white p-10 rounded-3xl relative xl:max-w-[80%] lg:max-w-[80%] md:max-w-[80%] w-[70%] max-h-[85%] overflow-auto">

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
          <img src={imageUrl} alt="NFT" className="xl:w-[32rem] object-cover lg:w-[24rem] w-[24rem]" />

          <div>
            <h4 className="text-lg font-bold mb-2">Attributes:</h4>
            <ul className="grid grid-cols-3 gap-4">
              {Object.entries(nftAttributes).map(([key, value]) => (
                <li key={key} className='bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-3 mb-2 rounded-lg'>
                  <div className="flex justify-start items-start flex-col">
                    <span className="text-sm font-semibold mr-2">{key}:</span>
                    <span className='text-xs'>{value}</span>
                  </div>
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
