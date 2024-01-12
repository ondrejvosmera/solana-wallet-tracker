'use client'
import React, { useState, useEffect } from 'react';
import { ShyftSdk, Network } from '@shyft-to/js';

// const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [nftList, setNftList] = useState<any[] | null>(null);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        // Fetch SOL balance
        const solBalance = await shyft.wallet.getBalance({
          wallet: 'Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H',
        });

        // Fetch token balances
        const tokenBalancesResult = await shyft.wallet.getAllTokenBalance({
          wallet: 'Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H',
        });

        // Fetch NFTs
        const nftList = await shyft.wallet.collections({
          wallet: 'Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H',
        });

        setBalance(solBalance);
        setTokenBalances(tokenBalancesResult);
        setNftList(Array.isArray(nftList) ? nftList : [nftList]);

        console.log('NFTS', nftList);

      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    fetchBalances();
  }, []);

  return (
    <div className={`dark:bg-black dark:bg-opacity-95 flex flex-col items-center min-h-screen min-w-max pt-28 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between w-full p-4">
      <button onClick={toggleDarkMode}
        className='absolute top-0 right-0 m-5 bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800'>
          Toggle Dark Mode
      </button>
      </div>
      <h1 className="text-6xl mb-16 font-semibold dark:text-white">Solana wallet tracker</h1>
      <div className='flex flex-row gap-3 justify-center items-center mb-10 w-9/12'>
        <input type="text" placeholder="Wallet address" className='bg-gray-200 border-none outline-none w-2/6 rounded-xl p-3 pr-4 pl-4 dark:bg-gray-800' />
        <button className='bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800 dark:text-white'>Track wallet</button>
      </div>
    

      <div className='flex flex-col items-start w-9/12'>

        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>SOL balance: </h2>
          {balance !== null ? balance.toFixed(5) : 'Loading...'}
        </div>

        <div className='mb-10 dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>Tokens</h2>
          {tokenBalances !== null ? (
            <ul className=''>
              {tokenBalances
              .filter((token) => token.balance !== 0)
              .map((token, index) => (
                <li key={index}>
                  {token.info.symbol}: {token.balance.toFixed(2)}
                </li>
              ))}
            </ul>
          ) : (
            'Loading token balances...'
          )}
        </div>

        <div className='dark:text-white'>
          <h2 className='text-2xl font-medium mb-4'>NFTs</h2>
          {nftList !== null ? (
            <ul className='flex flex-col gap-8'>
              {nftList.map((collection, index) => (
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
          ) : (
            'Loading NFT collections...'
          )}
        </div>

      </div>
    </div>
  );
}
