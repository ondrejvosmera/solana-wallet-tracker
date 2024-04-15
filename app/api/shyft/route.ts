import type { NextApiRequest, NextApiResponse } from 'next';
import { ShyftSdk, Network } from '@shyft-to/js';

interface JsonResponse {
  error?: string;
  balance?: number;
  tokenBalances?: any;
  compressedNftList?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    return;
  }

  const { apiKey } = process.env;
  if (!apiKey) {
    res.status(500).json({ error: 'API key is not configured' });
    return;
  }
  
  const shyft = new ShyftSdk({ apiKey, network: Network.Mainnet });
  const { action, walletAddress } = req.query;

  if (!walletAddress || typeof walletAddress !== 'string') {
    res.status(400).json({ error: 'Wallet address is required and must be a string.' });
    return;
  }

  try {
    switch (action) {
      case 'getBalance':
        const balance = await shyft.wallet.getBalance({ wallet: walletAddress });
        res.status(200).json({ balance });
        break;
      case 'getAllTokenBalances':
        const tokenBalances = await shyft.wallet.getAllTokenBalance({ wallet: walletAddress });
        res.status(200).json({ tokenBalances });
        break;
      case 'getCompressedNftList':
        const compressedNftList = await shyft.nft.compressed.readAll({ walletAddress });
        if (compressedNftList && compressedNftList.length > 0) {
            res.status(200).json({ compressedNftList });
        } else {
            res.status(404).json({ error: 'No compressed NFTs found' });
        }
        break;
      default:
        res.status(400).json({ error: 'Action not specified or not supported.' });
    }
  } catch (error) {
    console.error('Shyft API error:', error);
    res.status(500).json({ error: 'Server error occurred.' });
  }
}
