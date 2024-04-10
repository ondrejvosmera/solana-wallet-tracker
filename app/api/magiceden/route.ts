// app/api/magiceden/route.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    // Extract the wallet address from the request query parameters
    const walletAddress = req.nextUrl.searchParams.get('walletAddress');

    if (!walletAddress) {
        return new NextResponse(JSON.stringify({ error: 'Wallet address is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
  
    try {
        // Fetch NFTs from Magic Eden
        const nftResponse = await axios.get(`https://api-mainnet.magiceden.dev/v2/wallets/${walletAddress}/tokens`);
        const nfts = nftResponse.data;

        // Extract unique collection symbols
        const collectionSymbols = [...new Set(nfts.map((nft: { collection: string }) => nft.collection))];

        // Fetch floor prices
        const floorPricesResponses = await Promise.all(
            collectionSymbols.map((symbol) =>
                axios.get(`https://api-mainnet.magiceden.dev/v2/collections/${symbol}/stats`)
            )
        );

        // Extract floor prices
        const floorPrices = floorPricesResponses.map((response, index) => ({
            collection: collectionSymbols[index],
            floorPrice: response.data.floorPrice / Math.pow(10, 9),
        }));

        // Respond with JSON
        return new NextResponse(JSON.stringify({ nfts, floorPrices }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Handle errors
        console.error('Error fetching NFTs and/or floor prices:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching NFT data from Magic Eden' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
