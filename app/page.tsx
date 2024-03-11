'use client'
import React, { useState, useEffect } from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ShyftSdk, Network } from '@shyft-to/js';
import ReactLoading from 'react-loading';
import NftModal from './nftModal';
import Image from 'next/image';
import solanaLogo from './solana-logo.png';

// Ad4CgpXJnyFAfamceJdr4sB6H7DSQpqfsRGasKNYJf6H
// DwFoTKCevYoga35cEe75dseG5dbxwZd7dvZrmhKhSrDD
// HJzP21jaRzCA6RhYKRBEFsMkwyWb2Ly1xJ1HKZJkPZGq
// 86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY (toly's wallet)

const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });
const axios = require('axios');

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [walletAdded, setWalletAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [solPrice, setSolPrice] = useState<number | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [solBalanceInUsdc, setSolBalanceInUsdc] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [usdcPrices, setUsdcPrices] = useState<{ [key: string]: number }>({});
  const [nftList, setNftList] = useState<any[]>([]);
  const [nftAttributes, setNftAttributes] = useState<{ [key: string]: string }>({});
  const [nftName, setNftName] = useState<string>('');
  const [collectionFloorPrices, setCollectionFloorPrices] = useState<{ [key: string]: number }>({});
  const [compressedNftList, setCompressedNftList] = useState<any[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [selectedSection, setSelectedSection] = useState('tokens');


  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleSectionChange = (section: any) => {
    setSelectedSection(section);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  
  const openModal = (imageUrl: string, nftAttributes: { [key: string]: string }[] | { [key: string]: string }, nftName: string) => {
    const attributesObject: { [key: string]: string } = {};
  
    if (Array.isArray(nftAttributes)) {
      nftAttributes.forEach(attribute => {
        attributesObject[attribute.trait_type] = attribute.value;
      });
    } else {
      // Handle the case where nftAttributes is not an array
      // For example, if it's an object, you can directly use it
      Object.keys(nftAttributes).forEach(key => {
        attributesObject[key] = nftAttributes[key];
      });
    }
  
    setModalImageUrl(imageUrl);
    setNftAttributes(attributesObject);
    setNftName(nftName);
    setIsModalOpen(true);
  };
    // Function to fetch SOL price
    const fetchSolPrice = async () => {
      try {
        const solResponse = await fetch('https://price.jup.ag/v4/price?ids=SOL');
        const solData = await solResponse.json();

        if (solData && solData.data && solData.data.SOL && solData.data.SOL.price) {
          setSolPrice(solData.data.SOL.price);
        } else {
          console.error("Error getting SOL price:", solData);
        }
      } catch (error) {
        console.error('Error fetching SOL price:', error);
      }
    };

    // Use useEffect to fetch SOL price on component mount
    useEffect(() => {
      fetchSolPrice();
    }, []);


  const handleAddWallet = async () => {
    setWalletAdded(true);
    setIsLoading(true);

    try {
      // Fetch SOL balance
      const solBalance = await shyft.wallet.getBalance({
        wallet: walletAddress,
      });

      // Fetch SOL price in USD
      const solPriceResponse = await fetch('https://price.jup.ag/v4/price?ids=SOL');
      const solPriceData = await solPriceResponse.json();

      if (solPriceData && solPriceData.data && solPriceData.data.SOL && solPriceData.data.SOL.price) {
        setSolPrice(solPriceData.data.SOL.price);

        // Calculate SOL balance in USDC
        const solBalanceInUsdcValue = solBalance * solPriceData.data.SOL.price;
        setSolBalanceInUsdc(solBalanceInUsdcValue);
      } else {
        console.error("Error getting SOL price:", solPriceData);
      }

      // Fetch token balances
      const tokenBalances = await shyft.wallet.getAllTokenBalance({
        wallet: walletAddress,
      });

    // Function to fetch NFTs from Magic Eden API and floor prices
    const fetchNFTsAndFloorPrices = async () => {
    try {
      // Fetch NFTs
      const nftResponse = await axios.get(`https://api-mainnet.magiceden.dev/v2/wallets/${walletAddress}/tokens`);
      const nftData: { collection: string }[] = nftResponse.data;
      setNftList(nftData);

      // Fetch floor prices
      const collectionSymbols: string[] = Array.from(new Set(nftData.map((nft) => nft.collection)));
      const floorPrices: Record<string, number> = {};

      for (const collectionSymbol of collectionSymbols) {
        const response = await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/${collectionSymbol}/stats`);
        const floorPrice = response.data.floorPrice / Math.pow(10, 9);
        floorPrices[collectionSymbol] = floorPrice;
      }

      setCollectionFloorPrices(floorPrices);
    } catch (error) {
      console.error('Error fetching NFTs and/or floor prices:', error);
    }
  };

      // Fetch cNFTs
      const compressedNftList = await shyft.nft.compressed.readAll({
        walletAddress: walletAddress,
      });

      setBalance(solBalance);
      setTokenBalances(tokenBalances);
      setCompressedNftList(compressedNftList);
      fetchNFTsAndFloorPrices();

      // Fetch USDC prices for each token
      const usdcPricesData: { [key: string]: number } = {};
      for (const token of tokenBalances) {
        const usdcPriceResponse = await fetch(`https://price.jup.ag/v4/price?ids=${token.address}&vsToken=USDC`);
        const usdcPriceData = await usdcPriceResponse.json();

        if (
          usdcPriceData &&
          usdcPriceData.data &&
          usdcPriceData.data[token.address] &&
          usdcPriceData.data[token.address].price !== undefined
        ) {
          usdcPricesData[token.address] = usdcPriceData.data[token.address].price;
        } else {
          console.error(`Error getting USDC price for ${token.address}:`);
        }
      }

      setUsdcPrices(usdcPricesData);
    } catch (error) {
      console.error('Error fetching balances:', error);
    } finally {
      setIsLoading(false);
      setButtonClicked(false);
    }
  };

  // Calculate the total price of NFTs in USD
  const calculateTotalNftPriceInUsd = () => {
    if (!nftList || nftList.length === 0 || !collectionFloorPrices || solPrice === null) return 0;

    let totalPrice = 0;

    nftList.forEach(nft => {
      const collectionPriceInSol = collectionFloorPrices[nft.collection] || 0;
      totalPrice += collectionPriceInSol * solPrice;
    });

    return totalPrice;
  };

  // Calculate total tokens value
  const calculateTotalTokenValue = () => {
    if (!tokenBalances) return 0;
    let totalValue = 0;

    tokenBalances.forEach((token) => {
      const tokenUsdcPrice = usdcPrices[token.address];
      if (tokenUsdcPrice !== undefined) {
        totalValue += token.balance * tokenUsdcPrice;
      }
    });

    return totalValue;
  };

  // Calculate portfolio value in USD (SOL + tokens + NFTs)
  const calculateTotalValue = () => {
    if (!tokenBalances) return 0;
    let totalValue = 0;

    tokenBalances.forEach((token) => {
      const tokenUsdcPrice = usdcPrices[token.address];
      if (tokenUsdcPrice !== undefined) {
        totalValue += token.balance * tokenUsdcPrice;
      }
    });

    totalValue += calculateTotalNftPriceInUsd();
    return totalValue;
  };
    
  useEffect(() => {
    if (buttonClicked) {
      handleAddWallet();
    }
  }, [buttonClicked]);

  return (
    <>
    <div className={`dark:bg-black dark:bg-opacity-95 bg-slate-100 flex flex-col flex-wrap items-center min-h-screen min-w-screen pt-28 pb-12 duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between w-full p-4">

      <div className='flex flex-row gap-2 absolute top-0 left-0 m-5 dark:text-white'>
        <h2 className='text-base font-medium mb-4'>SOL price:</h2>
        {solPrice !== null ? (
          <span className='font-bold text-base'>${solPrice.toFixed(2)}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>

        <button onClick={toggleDarkMode} className='absolute top-0 right-0 m-5 p-3 rounded-full hover:bg-gray-300 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 dark:hover:bg-gray-800 duration-200'>
          {isDarkMode ? <MdOutlineLightMode className='text-white' /> : <MdOutlineDarkMode />}
        </button>
      </div>
      <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-4xl mb-16 font-semibold dark:text-white">Solana wallet tracker</h1>
      <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-3 justify-center items-center mb-10 w-9/12'>
        <input
          type="text"
          placeholder="Wallet address"
          className='outline-none w-[20rem] xl:w-[26rem] lg:w-[26rem] md:w-[26rem] rounded-xl p-3 pr-4 pl-4 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 dark:text-white'
          value={walletAddress}
          onChange={handleInputChange}
        />
        <button onClick={() => setButtonClicked(true)} className='p-3 pr-4 pl-4 rounded-xl bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:text-white dark:border-gray-800 dark:hover:bg-gray-800 duration-200'>
          Add wallet
        </button>
      </div>

     {/* TOTAL VALUE */}
     <div className='flex flex-col items-center mb-10 dark:text-white relative'>
        <div className='flex flex-row mb-3'>
          <h2 className='text-xl font-medium mb-2'>Total value</h2>
        </div>
        {buttonClicked && isLoading ? (
          <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
        ) : (
          <div className='flex flex-row items-center justify-start gap-3 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800'>
            <div className='flex flex-col'>
              <p className='text-4xl font-bold'>
                {`$${((solBalanceInUsdc !== null ? solBalanceInUsdc : 0) + calculateTotalValue()).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
              </p>
            </div>
          </div>
        )}
      </div>


      {/* Assets values */}
      {walletAdded && (
        <div className='flex flex-col items-center w-9/12'>
          <h2 className='text-xl font-medium mb-7 dark:text-white'>Assets value</h2>
          <div className='flex flex-row justify-center items-center min-w-full mb-10 dark:text-white gap-10'>

          {/* SOL */}
          <div>
            <div className='relative group flex flex-row items-center justify-center'>
              <h2 className='text-lg font-medium mb-2'>SOL</h2>
              </div>
              {buttonClicked && <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />}
            {balance !== null && !buttonClicked ? (
            <div className='flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                <p className='text-xl font-bold'>{solBalanceInUsdc !== null ? `$${solBalanceInUsdc.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A'}</p>
                <p className='text-sm text-gray-700 dark:text-gray-400'>{`${balance.toFixed(4)} SOL`}</p>
            </div>
            ) : null}
            </div>

            {/* TOKENS */}
            <div>
              <div className='relative group flex flex-row items-center justify-center'>
              <h2 className='text-lg font-medium mb-2'>Tokens</h2>
                <span className='cursor-default text-[6px] dark:text-gray-400 tooltip-trigger ml-1 inline-flex items-center justify-center rounded-full border border-gray-700 dark:border-dark-300 w-3 h-3'>
                  i
                </span>
                <div className={`absolute left-1/2 transform -translate-x-40 -translate-y-14 xl:translate-x-5 xl:-translate-y-8 lg:translate-x-2 lg:-translate-y-12 md:translate-x-2 md:-translate-y-12 dark:text-gray-300 dark:bg-gray-900 bg-white text-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip whitespace-nowrap`}>
                  Only tracks Jupiter supported tokens
                </div>
              </div>
              {buttonClicked && isLoading ? (
                <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
              ) : (
                <div className='flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                  <p className='text-xl font-bold'>
                    {`$${calculateTotalTokenValue().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </p>
                  {solPrice !== null && calculateTotalTokenValue() !== 0 && (
                    <p className='text-sm text-gray-700 dark:text-gray-400'>
                      {`${(calculateTotalTokenValue() / solPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} SOL`}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* NFTS */}
            <div>
              <div className='relative group flex flex-row items-center justify-center'>
              <h2 className='text-lg font-medium mb-2'>NFTs</h2>
                <span className='cursor-default text-[6px] dark:text-gray-400 tooltip-trigger ml-1 inline-flex items-center justify-center rounded-full border border-gray-700 dark:border-dark-300 w-3 h-3'>
                  i
                </span>
                <div className={`absolute left-1/2 transform -translate-x-40 -translate-y-14 xl:translate-x-5 xl:-translate-y-8 lg:translate-x-2 lg:-translate-y-12 md:translate-x-2 md:-translate-y-12 dark:text-gray-300 dark:bg-gray-900 bg-white text-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip whitespace-nowrap`}>
                  Only tracks Magic Eden supported NFTs
                </div>
              </div>
              {buttonClicked && isLoading ? (
                <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
                ) : (
                <div className='flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                  <p className='text-xl font-bold'>
                    {`$${calculateTotalNftPriceInUsd().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                  </p>
                  {solPrice !== null && calculateTotalNftPriceInUsd() !== 0 && (
                    <p className='text-sm text-gray-700 dark:text-gray-400'>
                      {`${(calculateTotalNftPriceInUsd() / solPrice).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })} SOL`}
                    </p>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      <div className='flex flex-col items-center xl:items-start lg:items-start md:items-start w-9/12'>


      <div className="flex mb-20 mt-10 min-w-full justify-around">
        <div className={`flex justify-center text-2xl dark:text-white w-[33%] pb-6 ${selectedSection === 'tokens' ? 'border-b-2 border-gray-700' : 'border-none'}`}>
          <button onClick={() => handleSectionChange('tokens')}>
            Tokens
          </button>
        </div>
        <div className={`flex justify-center text-2xl dark:text-white w-[33%] pb-6 ${selectedSection === 'nfts' ? 'border-b-2 border-gray-700' : 'border-none'}`}>
          <button onClick={() => handleSectionChange('nfts')}>
            NFTs
          </button>
        </div>
        <div className={`flex justify-center text-2xl dark:text-white w-[33%] pb-6 ${selectedSection === 'cnfts' ? 'border-b-2 border-gray-700' : 'border-none'}`}>
          <button onClick={() => handleSectionChange('cnfts')}>
            cNFTs
          </button>
        </div>
      </div>
        
        {/* TOKENS BALANCE */}

        {walletAdded && selectedSection === 'tokens' &&(
          <div className='mb-10 dark:text-white'>
            <div className='mb-5'>
              {balance !== null && !buttonClicked ? (
              <div className='flex flex-row items-center justify-between gap-3 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                <div className='flex flex-row gap-3'>
                  <Image src={solanaLogo} alt='solana-logo' className='w-10 h-10 rounded-full'/>
                  <div className='flex flex-col'>
                      <p className='text-base'>Solana</p>
                      <p className='text-sm dark:text-gray-400'>{`${balance.toFixed(5)} SOL`}</p>
                  </div>
                </div>
                  <p className='text-lg ml-3 font-bold'>{solBalanceInUsdc !== null ? `$${solBalanceInUsdc.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A'}</p>
              </div>
              ) : null}
            </div>

              <ul className='flex flex-col gap-5'>
                {/* Render tokens with USD values first */}
                {tokenBalances && tokenBalances
                  .filter((token) => token.balance !== 0 && usdcPrices[token.address] !== undefined)
                  .map((token, index) => {
                    const totalValue = (token.balance * usdcPrices[token.address]).toFixed(2);

                    return (
                      <li key={index} className='flex flex-row items-center justify-between bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                        <div className='flex flex-row gap-3'>
                          <img src={token.info.image} alt={token.name} className='w-10 h-10 rounded-full'/>
                          <div className='flex flex-col'>
                            <p className='text-base'>{token.info.name}</p>
                            <p className='text-sm dark:text-gray-400'>{`${token.balance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0})} ${token.info.symbol}`}</p>
                          </div>
                        </div>
                        <p className='text-lg ml-5 font-bold'>{usdcPrices[token.address] !== undefined ? `$${totalValue}` : 'N/A'}</p>
                      </li>
                    );
                  })}

                {/* Render tokens without USD values */}
                {tokenBalances && tokenBalances
                  .filter((token) => token.balance !== 0 && usdcPrices[token.address] === undefined)
                  .map((token, index) => (
                    <li key={index} className='flex flex-row gap-3 bg-white dark:bg-gray-900 border border-opacity-20 border-gray-400 dark:border-gray-800 p-5 rounded-2xl'>
                      <img src={token.info.image} alt={token.name} className='w-10 h-10 rounded-full'/>
                      <div className='flex flex-col'>
                        <p className='text-base'>{token.info.name}</p>
                        <p className='text-sm dark:text-gray-400'>{`${token.balance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0})} ${token.info.symbol}`}</p>
                      </div>
                    </li>
                  ))}
              </ul>
          </div>
        )}

      {/* NFTs BALANCE */}
      {walletAdded && selectedSection === 'nfts' && (
        <div className={`dark:text-white max-w-screen-lg items-start mb-10`}>
            <div>
              {/* Sort collection names alphabetically */}
              {Object.entries(nftList.reduce((acc, nft) => {
                if (!acc[nft.collectionName]) {
                  acc[nft.collectionName] = [];
                }
                acc[nft.collectionName].push(nft);
                return acc;
              }, {}))
              .sort(([collectionNameA], [collectionNameB]) => collectionNameA.localeCompare(collectionNameB)) // Sort collection names alphabetically
              .map(([collectionName, nfts], index) => (
                <div key={index} className='mb-14'>
                  <h3 className="text-lg font-semibold mb-5">{collectionName}</h3>
                  <ul className='flex flex-wrap gap-4 justify-start'>
                    {(nfts as any[]).sort((nftA, nftB) => nftA.name.localeCompare(nftB.name)).map((nft: any, index: number) => ( // Sort NFTs alphabetically within each collection
                      <li key={index} className="flex flex-col items-center mb-4">
                        {nft.image && (
                          <img
                            src={nft.image}
                            alt={nft.name}
                            className='w-40 mb-3 cursor-pointer hover:opacity-75'
                            onClick={() => openModal(nft.properties.files[0].uri, nft.attributes, nft.name)}
                          />
                        )}
                        <h4 className='text-sm text-gray-700 dark:text-gray-400'>{nft.name}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      )}

      {/* cNFTs BALANCE */}
      {walletAdded && selectedSection === 'cnfts' && (
        <div className={`dark:text-white max-w-screen-lg items-start mb-10`}>
          <ul className='flex flex-wrap gap-4 justify-start'>
            {compressedNftList && compressedNftList.map((cNFT, index) => (
              <li key={index} className="flex flex-col items-center mb-4">
                {cNFT.cached_image_uri && (
                  <img
                    src={cNFT.cached_image_uri}
                    alt={cNFT.name}
                    className='w-40 mb-3 cursor-pointer hover:opacity-75'
                    onClick={() => openModal(cNFT.cached_image_uri, cNFT.attributes, cNFT.name)}
                  />
                )}
                <h4 className='text-sm text-gray-700 dark:text-gray-400'>{cNFT.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}


      </div>
      {/* Render the modal if it's open */}
      {isModalOpen && (
        <NftModal
          imageUrl={modalImageUrl}
          nftName={nftName}
          onClose={() => setIsModalOpen(false)}
          nftAttributes={nftAttributes}
        />
      )}
    </div>
    <div className={`w-full dark:bg-black dark:bg-opacity-95 bg-slate-100 dark:text-gray-300 text-xs pb-4 flex flex-row items-center justify-center min-w-screen duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <p>by: <a href='https://github.com/ondrejvosmera'>ondrejvosmera</a></p>
    </div>
    </>
  );
}
