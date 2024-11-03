"use client"
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/Card';
import { 
  AlertCircle, 
  Loader2, 
  Building2, 
  User, 
  Mail, 
  Coins, 
  Link, 
  Gift, 
  Clock, 
  Calendar,
  Wallet,
  FileText,
  Tag,
  BadgeCheck
} from 'lucide-react';
import { Alert, AlertDescription } from './ui/alet';
import { getTokenById } from '../../utils/firestore';
import { ethers } from 'ethers';

interface Token {
    id: string;
    contractAddress: string;
    walletAddress: string;
    tokenType: string;
    deploymentDate: Date;
    businessName: string;
    ownerName: string;
    contactEmail: string;
    description: string;
    maxSupply: string;
    baseURI: string;
    benefitsOffered: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

interface TokenOfferingProps {
    id: string;
}

const TokenOffering: React.FC<TokenOfferingProps> = ({ id }) => {
    const [tokenData, setTokenData] = useState<Token | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [purchaseAmount, setPurchaseAmount] = useState('');
    const [purchaseLoading, setPurchaseLoading] = useState(false);
    const [purchaseError, setPurchaseError] = useState<string | null>(null);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const PYUSD_ADDRESS = '0x6c3ea9036406c282d277dc5dc63322b21f7d741a';

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const data = await getTokenById(id);
                setTokenData(data);
            } catch (err) {
                console.error("Failed to fetch token data:", err);
                setError("Failed to fetch token data.");
            } finally {
                setLoading(false);
            }
        };

        fetchTokenData();
    }, [id]);

    const handlePurchaseWithPYUSD = async () => {
        if (!tokenData) return;
        
        try {
            setPurchaseLoading(true);
            setPurchaseError(null);
            
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const userAddress = await signer.getAddress();

            const pyusdContract = new ethers.Contract(
                PYUSD_ADDRESS,
                ['function approve(address spender, uint256 amount) returns (bool)'],
                signer
            );

            const tokenContract = new ethers.Contract(
                tokenData.contractAddress,
                [
                    'function transfer(address to, uint256 amount) returns (bool)',
                    'function transferFrom(address from, address to, uint256 amount) returns (bool)',
                ],
                signer
            );

            const purchaseAmountWei = ethers.utils.parseEther(purchaseAmount);
            
            const approveTx = await pyusdContract.approve(tokenData.contractAddress, purchaseAmountWei);
            await approveTx.wait();

            let purchaseTx;
            if (tokenData.tokenType.toLowerCase() === 'nft') {
                purchaseTx = await tokenContract.transferFrom(
                    tokenData.walletAddress,
                    userAddress,
                    purchaseAmountWei
                );
            } else {
                purchaseTx = await tokenContract.transferFrom(
                    tokenData.walletAddress,
                    userAddress,
                    purchaseAmountWei
                );
            }
            await purchaseTx.wait();

            setPurchaseSuccess(true);
            setPurchaseAmount('');
        } catch (err: any) {
            console.error('Purchase failed:', err);
            setPurchaseError(err.message || 'Transaction failed. Please try again.');
        } finally {
            setPurchaseLoading(false);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        </div>
    );
    
    if (error) return (
        <div className="flex items-center justify-center min-h-screen text-red-500">
            <AlertCircle className="h-6 w-6 mr-2" />
            {error}
        </div>
    );
    
    if (!tokenData) return (
        <div className="flex items-center justify-center min-h-screen text-gray-400">
            <AlertCircle className="h-6 w-6 mr-2" />
            No token found
        </div>
    );

    const InfoItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
        <div className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg">
            <Icon className="h-5 w-5 text-blue-400" />
            <div>
                <div className="text-sm text-slate-400">{label}</div>
                <div className="text-slate-200">{value}</div>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-xl backdrop-blur">
                <div className="flex items-center space-x-3">
                    <Building2 className="h-8 w-8 text-blue-400" />
                    <div>
                        <h1 className="text-2xl font-bold text-slate-100">
                            {tokenData.businessName}
                        </h1>
                        <p className="text-slate-400">{tokenData.description}</p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contract Details */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardContent className="pt-6 space-y-4">
                        <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
                            <div className="h-5 w-5 mr-2 text-blue-400" />
                            Contract Details
                        </h2>
                        <InfoItem icon={Tag} label="Contract Address" value={tokenData.contractAddress} />
                        <InfoItem icon={Wallet} label="Wallet Address" value={tokenData.walletAddress} />
                        <InfoItem icon={FileText} label="Token Type" value={tokenData.tokenType} />
                        <InfoItem 
                            icon={Calendar} 
                            label="Deployment Date" 
                            value={new Date(tokenData.deploymentDate).toLocaleDateString()} 
                        />
                    </CardContent>
                </Card>

                {/* Token Details */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardContent className="pt-6 space-y-4">
                        <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
                            <Coins className="h-5 w-5 mr-2 text-blue-400" />
                            Token Details
                        </h2>
                        <InfoItem icon={Coins} label="Max Supply" value={tokenData.maxSupply} />
                        <InfoItem icon={Link} label="Base URI" value={tokenData.baseURI} />
                        <InfoItem icon={Gift} label="Benefits" value={tokenData.benefitsOffered} />
                        <InfoItem icon={BadgeCheck} label="Status" value={tokenData.status} />
                    </CardContent>
                </Card>

                {/* Purchase Card */}
                <Card className="md:col-span-2 bg-slate-900/50 border-slate-800">
                    <CardContent className="pt-6">
                        <h2 className="text-xl font-semibold text-slate-100 mb-4 flex items-center">
                            <Coins className="h-5 w-5 mr-2 text-blue-400" />
                            Purchase Tokens
                        </h2>
                        <div className="space-y-4">
                            <div className="relative">
                                <Input
                                    type="number"
                                    value={purchaseAmount}
                                    onChange={(e) => setPurchaseAmount(e.target.value)}
                                    placeholder="Enter PYUSD amount"
                                    className="pl-12 bg-slate-800 border-slate-700 text-slate-200"
                                    disabled={purchaseLoading}
                                />
                                <Coins className="h-5 w-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                            </div>

                            {purchaseError && (
                                <Alert variant="destructive" className="bg-red-900/20 border-red-900">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{purchaseError}</AlertDescription>
                                </Alert>
                            )}

                            {purchaseSuccess && (
                                <Alert className="bg-green-900/20 border-green-900">
                                    <BadgeCheck className="h-4 w-4 text-green-400" />
                                    <AlertDescription>
                                        Purchase successful! Check your wallet for the tokens.
                                    </AlertDescription>
                                </Alert>
                            )}

                            <Button
                                className="w-full bg-blue-600 hover:bg-blue-700"
                                onClick={handlePurchaseWithPYUSD}
                                disabled={!purchaseAmount || purchaseLoading}
                            >
                                {purchaseLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Coins className="mr-2 h-4 w-4" />
                                        Buy with PYUSD
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TokenOffering;