// @ts-check
'use client'
import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ShyftSdk, Network } from '@shyft-to/js';

// Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H
// DwFoTKCevYoga35cEe75dseG5dbxwZd7dvZrmhKhSrDD

// const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [balance, setBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [nftList, setNftList] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const handleAddWallet = async () => {
    setButtonClicked(true);
    setIsLoading(true);

    try {
      // Fetch SOL balance
      const solBalance = await shyft.wallet.getBalance({
        wallet: walletAddress,
      });

      // Fetch token balances
      const tokenBalancesResult = await shyft.wallet.getAllTokenBalance({
        wallet: walletAddress,
      });

      // Fetch NFTs
      const nftList = await shyft.nft.getNftByOwner({
        owner: walletAddress,
      });

      setBalance(solBalance);
      setTokenBalances(tokenBalancesResult);
      setNftList(Array.isArray(nftList) ? nftList : [nftList]);
      console.log("NFTs", nftList);
    } catch (error) {
      console.error('Error fetching balances:', error);
    } finally {
      setIsLoading(false);
      setButtonClicked(false);
    }
  };

  function groupNFTsByCollection(nftList: any[] | null) {
    if (!nftList) {
      return [];
    }
  
    const groupedNFTs: Record<string, any[]> = {};
  
    // Group NFTs by their symbol (collection)
    nftList.forEach((nft) => {
      const symbol = nft.symbol;
      if (!groupedNFTs[symbol]) {
        groupedNFTs[symbol] = [];
      }
      groupedNFTs[symbol].push(nft);
    });
  
    // Convert the grouped data into an array for rendering
    const result = Object.keys(groupedNFTs).map((symbol) => ({
      symbol,
      nfts: groupedNFTs[symbol],
    }));
  
    return result;
  }  

  useEffect(() => {
    if (buttonClicked) {
      handleAddWallet();
    }
  }, [buttonClicked]);

  return (
    <div className={`dark:bg-black dark:bg-opacity-95 flex flex-col flex-wrap items-center min-h-screen min-w-max pt-28 pb-20 duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between w-full p-4">
        <button onClick={toggleDarkMode} className='absolute top-0 right-0 m-5 bg-gray-200 p-3 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900 duration-200'>
          {isDarkMode ? <MdOutlineLightMode className='text-white' /> : <MdOutlineDarkMode />}
        </button>
      </div>
      <h1 className="text-6xl mb-16 font-semibold dark:text-white">Solana wallet tracker</h1>
      <div className='flex flex-row gap-3 justify-center items-center mb-10 w-9/12'>
        <input
          type="text"
          placeholder="Wallet address"
          className='bg-gray-200 border-none outline-none w-2/6 rounded-xl p-3 pr-4 pl-4 dark:bg-gray-800 dark:text-white'
          value={walletAddress}
          onChange={handleInputChange}
        />
        <button onClick={() => setButtonClicked(true)} className='bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800 dark:text-white'>
          Add wallet
        </button>
      </div>

      <div className='flex flex-col items-start w-9/12'>
        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>SOL balance: </h2>
          {isLoading && balance === null && 'Loading SOL balance...'}
          {balance !== null && !isLoading ? `${balance.toFixed(5)} SOL` : null}
        </div>

        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>Tokens:</h2>
          {buttonClicked && isLoading ? (
            'Loading token balances...'
          ) : (
            <ul className=''>
              {tokenBalances && tokenBalances
                .filter((token) => token.balance !== 0)
                .map((token, index) => (
                  <li key={index}>
                    {token.info.symbol}: {token.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div className={`dark:text-white max-w-screen-lg items-start`}>
          <h2 className='text-2xl font-medium mb-4'>NFTs:</h2>
          {buttonClicked && isLoading ? (
            'Loading NFTs...'
          ) : (
            <ul className='flex flex-wrap gap-8 justify-start'>
              {nftList && groupNFTsByCollection(nftList).map((group, index) => (
                <li key={index} className='mb-8'>
                  <h3 className='text-xl font-bold mb-3'>{group.symbol}</h3>
                  <ul className='flex gap-5 flex-wrap'>
                    {/* Display NFTs under each collection */}
                    {group.nfts.map((nft: any, nftIndex: number) => (
                      <li key={nftIndex} className="flex flex-col items-center mb-4">
                        {nft.cached_image_uri && (
                          <img src={nft.cached_image_uri} alt={nft.name} className='w-40 mb-3' />
                        )}
                        <h4 className='text-sm'>{nft.name}</h4>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
