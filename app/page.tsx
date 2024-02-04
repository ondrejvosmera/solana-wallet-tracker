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

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [balance, setBalance] = useState<number | null>(null);
  const [tokenBalances, setTokenBalances] = useState<any[] | null>(null);
  const [nftList, setNftList] = useState<any[] | null>(null);
  const [compressedNftList, setCompressedNftList] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  const [nftAttributes, setNftAttributes] = useState<{ [key: string]: string }>({});
  const [nftName, setNftName] = useState<string>('');
  const [solPrice, setSolPrice] = useState<number | null>(null);
  const [solBalanceInUsdc, setSolBalanceInUsdc] = useState<number | null>(null);
  const [usdcPrices, setUsdcPrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(event.target.value);
  };

  const openModal = (imageUrl: string, nftAttributes: { [key: string]: string }, nftName: string) => {
    setModalImageUrl(imageUrl);
    setNftAttributes(nftAttributes);
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
    setButtonClicked(true);
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

      // Fetch NFTs
      const nftList = await shyft.nft.getNftByOwner({
        owner: walletAddress,
      });

      // Fetch cNFTs
      const compressedNftList = await shyft.nft.compressed.readAll({
        walletAddress: walletAddress,
      });

      setBalance(solBalance);
      setTokenBalances(tokenBalances);
      setCompressedNftList(compressedNftList);

      console.log('cNFTS', compressedNftList);
      console.log('NFTS', nftList);

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
          console.error(`Error getting USDC price for ${token.address}:`, usdcPriceData);
        }
      }

      setUsdcPrices(usdcPricesData);
      setNftList(Array.isArray(nftList) ? nftList : [nftList]);
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
  
    // Group NFTs by their collection name or symbol
    nftList.forEach((nft) => {
      const collectionName = nft.collection.name || nft.symbol;
      if (!groupedNFTs[collectionName]) {
        groupedNFTs[collectionName] = [];
      }
      groupedNFTs[collectionName].push(nft);
    });
  
    // Convert the grouped data into an array for rendering
    const result = Object.keys(groupedNFTs).map((collectionName) => ({
      collectionName,
      nfts: groupedNFTs[collectionName],
    }));
  
    return result;
  }

  // Calculate portfolio value in USD (SOL + tokens)
  const calculateTotalTokenValue = () => {
    if (!tokenBalances) return 0;
  
    return tokenBalances.reduce((totalValue, token) => {
      const tokenUsdcPrice = usdcPrices[token.address];
      if (tokenUsdcPrice !== undefined) {
        totalValue += token.balance * tokenUsdcPrice;
      }
      return totalValue;
    }, 0);
  };
  
  
  useEffect(() => {
    if (buttonClicked) {
      handleAddWallet();
    }
  }, [buttonClicked]);

  return (
    <div className={`dark:bg-black dark:bg-opacity-95 flex flex-col flex-wrap items-center min-h-screen min-w-screen pt-28 pb-20 duration-500 ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex justify-between w-full p-4">

      <div className='flex flex-row gap-2 absolute top-0 left-0 m-5 dark:text-white'>
        <h2 className='text-base font-medium mb-4'>SOL price:</h2>
        {solPrice !== null ? (
          <span className='font-bold text-base'>${solPrice.toFixed(2)}</span>
        ) : (
          <span>Loading...</span>
        )}
      </div>

        <button onClick={toggleDarkMode} className='absolute top-0 right-0 m-5 bg-gray-200 p-3 rounded-full hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900 duration-200'>
          {isDarkMode ? <MdOutlineLightMode className='text-white' /> : <MdOutlineDarkMode />}
        </button>
      </div>
      <h1 className="xl:text-6xl lg:text-6xl md:text-6xl text-4xl mb-16 font-semibold dark:text-white">Solana wallet tracker</h1>
      <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row gap-3 justify-center items-center mb-10 w-9/12'>
        <input
          type="text"
          placeholder="Wallet address"
          className='bg-gray-200 border-none outline-none w-[20rem] xl:w-[26rem] lg:w-[26rem] md:w-[26rem] rounded-xl p-3 pr-4 pl-4 dark:bg-gray-800 dark:text-white'
          value={walletAddress}
          onChange={handleInputChange}
        />
        <button onClick={() => setButtonClicked(true)} className='bg-gray-200 p-3 pr-4 pl-4 rounded-xl dark:bg-gray-800 dark:text-white'>
          Add wallet
        </button>
      </div>

     {/* TOTAL VALUE */}
      <div className='flex flex-col items-center mb-10 dark:text-white relative'>
        <div className='flex flex-row mb-3'>
          <h2 className='text-xl font-medium mb-2'>Total value</h2>
          <div className='relative group'>
          <span className='cursor-default text-[6px] dark:text-gray-400 tooltip-trigger ml-1 inline-flex items-center justify-center rounded-full border border-gray-700 dark:border-dark-300 w-3 h-3'>
            i
          </span>
          <div className={`absolute left-1/2 transform -translate-x-40 -translate-y-14 xl:translate-x-2 xl:-translate-y-12 lg:translate-x-2 lg:-translate-y-12 md:translate-x-2 md:-translate-y-12 dark:text-gray-300 dark:bg-gray-800 bg-gray-300 text-black text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 tooltip whitespace-nowrap`}>
            Only tracks Jupiter supported tokens
          </div>

          </div>
        </div>
        {buttonClicked && isLoading ? (
          <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
        ) : (
          <div className='flex flex-row items-center justify-start gap-3 bg-gray-200 dark:bg-gray-900 p-5 rounded-2xl'>
            <div className='flex flex-col'>
              <p className='text-4xl font-bold'>
                {`$${((solBalanceInUsdc !== null ? solBalanceInUsdc : 0) + calculateTotalTokenValue()).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className='flex flex-col items-center xl:items-start lg:items-start md:items-start w-9/12'>
        
        {/* SOL BALANCE */}
        <div className='mb-10 dark:text-white'>
          <h2 className='text-xl font-medium mb-4'>SOL balance: </h2>
          {buttonClicked && <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />}
          {balance !== null && !buttonClicked ? (
          <div className='flex flex-row items-center justify-start gap-3 bg-gray-200 dark:bg-gray-900 p-5 rounded-2xl'>
              <Image src={solanaLogo} alt='solana-logo' className='w-10 h-10 rounded-full'/>
              <div className='flex flex-col'>
                  <p className='text-base'>Solana</p>
                  <p className='text-sm dark:text-gray-400'>{`${balance.toFixed(5)} SOL`}</p>
              </div>
              <p className='text-lg ml-3 font-bold'>{solBalanceInUsdc !== null ? `$${solBalanceInUsdc.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'N/A'}</p>
          </div>
          ) : null}
        </div>

        {/* TOKENS BALANCE */}
        <div className='mb-10 dark:text-white'>
          <h2 className='text-xl font-medium mb-4'>Tokens:</h2>
          {buttonClicked && isLoading ? (
            <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
          ) : (
            <ul className='flex flex-col gap-5'>
              {/* Render tokens with USD values first */}
              {tokenBalances && tokenBalances
                .filter((token) => token.balance !== 0 && usdcPrices[token.address] !== undefined)
                .map((token, index) => {
                  const totalValue = (token.balance * usdcPrices[token.address]).toFixed(2);

                  return (
                    <li key={index} className='flex flex-row items-center justify-between bg-gray-200 dark:bg-gray-900 p-5 rounded-2xl'>
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
                  <li key={index} className='flex flex-row gap-3 bg-gray-200 dark:bg-gray-900 p-5 rounded-2xl'>
                    <img src={token.info.image} alt={token.name} className='w-10 h-10 rounded-full'/>
                    <div className='flex flex-col'>
                      <p className='text-base'>{token.info.name}</p>
                      <p className='text-sm dark:text-gray-400'>{`${token.balance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0})} ${token.info.symbol}`}</p>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* NFTs BALANCE */}
        <div className={`dark:text-white max-w-screen-lg items-start`}>
          <h2 className='text-xl font-medium mb-4'>NFTs:</h2>
          {buttonClicked && isLoading ? (
            <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
          ) : (
            <ul className='flex flex-wrap flex-col gap-8 justify-start'>
              {nftList && groupNFTsByCollection(nftList).map((group, index) => (
                <li key={index} className='mb-8'>
                  <h3 className='text-lg font-medium mb-3'>{group.collectionName}</h3>
                  <ul className='flex gap-5 flex-wrap'>
                    {/* Display NFTs under each collection */}
                    {group.nfts.map((nft: any, nftIndex: number) => (
                      <li key={nftIndex} className="flex flex-col items-center mb-4">
                        {nft.cached_image_uri && (
                          <img
                            src={nft.cached_image_uri}
                            alt={nft.name}
                            className='w-40 mb-3 cursor-pointer hover:opacity-75'
                            onClick={() => openModal(nft.cached_image_uri, nft.attributes, nft.name)}
                          />
                        )}
                        <h4 className='text-sm text-gray-700 dark:text-gray-400'>{nft.name}</h4>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

       {/* cNFTs BALANCE */}
      <div className={`dark:text-white max-w-screen-lg items-start`}>
        <h2 className='text-xl font-medium mb-4'>cNFTs:</h2>
        {buttonClicked && isLoading ? (
          <ReactLoading type="spinningBubbles" color={isDarkMode ? 'white' : 'black'} height={'35px'} width={'35px'} />
        ) : (
          <ul className='flex flex-wrap flex-col gap-8 justify-start'>
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
        )}
      </div>

      </div>
      {/* Render the modal if it's open */}
      {isModalOpen && (
        <NftModal imageUrl={modalImageUrl} nftName={nftName} onClose={() => setIsModalOpen(false)} nftAttributes={nftAttributes} />
      )}
    </div>
  );
}