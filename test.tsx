// @ts-check
'use client'
import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ShyftSdk, Network } from '@shyft-to/js';

// Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H
// DwFoTKCevYoga35cEe75dseG5dbxwZd7dvZrmhKhSrDD

const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

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

      // Fetch NFTs using your fetch API code
      const myHeaders = new Headers();
      myHeaders.append("x-api-key", "q4uEPvIuyvnxwm2U");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };

      const nftListResponse = await fetch("https://api.shyft.to/sol/v1/nft/read?network=mainnet-beta&token_address=Dx2XXfTUoTRsqRrBmB4dESraEeQy8Uby2XsLCtHW7GNS&refresh=true&token_record=true", requestOptions);
      const nftListData = await nftListResponse.text();

      setBalance(solBalance);
      setTokenBalances(tokenBalancesResult);
      setNftList([nftListData]);
      console.log("NFTs", nftListData);
    } catch (error) {
      console.error('Error fetching balances:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (buttonClicked) {
      handleAddWallet();
    }
  }, [buttonClicked]);

  return (
    <div className={`dark:bg-black dark:bg-opacity-95 flex flex-col items-center min-h-screen min-w-max pt-28 pb-20 duration-500 ${isDarkMode ? 'dark' : ''}`}>
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
          {balance !== null && !isLoading ? balance.toFixed(5) : null}
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

        <div className='dark:text-white'>
  <h2 className='text-2xl font-medium mb-4'>NFTs:</h2>
  {buttonClicked && isLoading ? (
    'Loading NFT collections...'
  ) : (
    <ul className='flex flex-col gap-8'>
      {nftList && nftList.map((collection, index) => (
        <li key={index}>
          <h3 className='text-xl'>{collection.name}</h3>
          <ul className='flex flex-row gap-5'>
            {Array.isArray(collection.nfts) && collection.nfts.map((nft: any, nftIndex: number) => (
              <li key={nftIndex}>
                <p>{nft.name}</p>
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
