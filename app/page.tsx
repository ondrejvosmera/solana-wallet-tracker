'use client'
import React, { useState, useEffect } from 'react';
import { ShyftSdk, Network } from '@shyft-to/js';

const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

export default function Home() {

  const [balance, setBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [nftList, setNftList] = useState<any[] | null>(null);

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

// TODO LIGHT/DARK MODE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div className="flex flex-col items-center h-screen mt-20">
      <h1 className="text-6xl mb-20 font-semibold">Solana wallet tracker</h1>
      <div>
        <div>
          <h2 className='text-2xl font-medium'>SOL balance: </h2>
          {balance !== null ? balance.toFixed(5) : 'Loading...'}
        </div>

        <div>
          <h2 className='text-2xl font-medium'>Token Balances</h2>
          {tokenBalances !== null ? (
            <ul>
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

        <div>
          <h2 className='text-2xl font-medium'>NFT Collections</h2>
          {nftList !== null ? (
            <ul>
              {nftList.map((collection, index) => (
                <li key={index}>
                  <h3 className='text-xl'>{collection.name}</h3>
                  <ul>
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
