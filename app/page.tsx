'use client'
import React, { useState, useEffect } from 'react';
import { ShyftSdk, Network } from '@shyft-to/js';

// const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [balance, setBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [nftList, setNftList] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const fetchBalances = async () => {
    try {
      setIsLoading(true); // Set loading to true when starting to fetch data

      // Fetch SOL balance
      const solBalance = await shyft.wallet.getBalance({
        wallet: walletAddress,
      });

      // Fetch token balances
      const tokenBalancesResult = await shyft.wallet.getAllTokenBalance({
        wallet: walletAddress,
      });

      // Fetch NFTs
      const nftList = await shyft.wallet.collections({
        wallet: walletAddress,
      });

      setBalance(solBalance);
      setTokenBalances(tokenBalancesResult);
      setNftList(Array.isArray(nftList) ? nftList : [nftList]);
    } catch (error) {
      console.error('Error fetching balances:', error);
    } finally {
      setIsLoading(false); // Set loading to false when fetching is done (regardless of success or error)
    }
  };

  useEffect(() => {
    fetchBalances();
  }, [walletAddress]);

  return (
    <div className={`dark:bg-black dark:bg-opacity-95 flex flex-col items-center min-h-screen min-w-max pt-28 pb-20 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between w-full p-4">
        <button onClick={toggleDarkMode} className='absolute top-0 right-0 m-5 bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800'>
          Toggle Dark Mode
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
        <button onClick={fetchBalances} className='bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800 dark:text-white'>
          Track wallet
        </button>
      </div>
    
      <div className='flex flex-col items-start w-9/12'>
        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>SOL balance: </h2>
          {isLoading ? 'Loading SOL balance...' : (balance !== null ? balance.toFixed(5) : 'Loading SOL balance...')}
        </div>

        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>Tokens</h2>
          {isLoading ? (
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
          <h2 className='text-2xl font-medium mb-4'>NFTs</h2>
          {isLoading ? (
            'Loading NFT collections...'
          ) : (
            <ul className='flex flex-col gap-8'>
              {nftList && nftList.map((collection, index) => (
                <li key={index}>
                  <h3 className='text-xl'>{collection.name}</h3>
                  <ul className='flex flex-row gap-5'>
                    {collection.nfts.map((nft: any, nftIndex: number) => (
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
