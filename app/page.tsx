'use client'
import React, { useState, useEffect } from 'react';
import { ShyftSdk, Network } from '@shyft-to/js';

const shyft = new ShyftSdk({ apiKey: 'q4uEPvIuyvnxwm2U', network: Network.Mainnet });

export default function Home() {

  return (
    <div className="flex flex-col items-center h-screen mt-20">
      <h1 className="text-6xl mb-20 font-semibold">Solana wallet tracker</h1>
    </div>
  );
}
