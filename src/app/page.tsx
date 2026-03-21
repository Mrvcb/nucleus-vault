"use client";

import { AccountInfo } from "@/components/AccountInfo";
import { Header } from "@/components/Header";
import { MessageBoard } from "@/components/MessageBoard";
import { NetworkInfo } from "@/components/NetworkInfo";
import { TopBanner } from "@/components/TopBanner";
import { TransferAPT } from "@/components/TransferAPT";
import { WalletDetails } from "@/components/WalletDetails";
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-20">
        
        {connected ? (
          <Card className="w-full max-w-4xl bg-zinc-900/50 border-zinc-800 backdrop-blur-md">
            <CardContent className="flex flex-col gap-10 p-8">
              <WalletDetails />
              <NetworkInfo />
              <AccountInfo />
              <TransferAPT />
              <MessageBoard />
            </CardContent>
          </Card>
        ) : (
          <div className="text-center space-y-8">
            <div className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-green-500 uppercase bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              Aptos Testnet Active
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              THE SHELBY <br />
              <span className="text-green-500">VAULT</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Secure your AI assets with the power of Shelby Protocol. <br />
              Experience the future of decentralized intelligence on Aptos.
            </p>

            <div className="pt-10">
              <p className="text-sm text-zinc-500 animate-pulse">
                Please connect your Petra Wallet to access the vault
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

