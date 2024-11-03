"use client"
import React, { useState, useEffect } from 'react';
import { Building2, BarChart, Users, Wallet } from 'lucide-react';
import { ethers } from 'ethers';
import { abiNFT, abiToken, byteCodeNFT, byteCodeToken } from "../../lib/contracts";

interface FormData {
    ownerName: string;
    contactEmail: string;
    businessName: string;
    description: string;
    tokenType: string;
    BenefitOffered: string;
    maxSupply: string;
    baseURI: string;
  }
  
export default function TokenisingProcess() {
  const [step, setStep] = useState(1);
  const [walletAddress, setWalletAddress] = useState('');
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    contactEmail: '',
    businessName: '',
    description: '',
    tokenType: '',
    BenefitOffered: '',
    maxSupply: '', // New field for max supply
    baseURI: '' // New field for base URI
  });

  async function deployToken(formData: any, walletAddress: string) {
    try {
        if (!window.ethereum?.isMetaMask) {
            throw new Error('MetaMask is not installed. Please install MetaMask and try again.');
          }
      
          // Force MetaMask to be used even if other wallets are present
          const ethereum = window.ethereum;
          
          // Request MetaMask accounts
        //   await ethereum.request({
        //     method: 'wallet_requestPermissions',
        //     params: [{ eth_accounts: {} }],
        //   });
          
        //   await ethereum.request({ 
        //     method: 'wallet_switchEthereumChain',
        //     params: [{ chainId: '0x7cb' }], // 0x7cb is the chainId for Holesky testnet
        //   });
      
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
  
      let contractABI;
      let contractBytecode;
      let deployArgs;
  
      // Format the baseURI correctly
      const formattedBaseURI = formData.baseURI.startsWith('http') 
        ? formData.baseURI 
        : `https://${formData.baseURI}/ipfs/`;
  
      if (formData.tokenType === 'Security Tokens' || formData.tokenType === "Utility Tokens" || formData.tokenType === "Governance Tokens") {
        contractABI = abiToken;
        contractBytecode = byteCodeToken;
        deployArgs = [
          formData.businessName,  // name
          "TKN",                 // symbol (you might want to make this configurable)
          ethers.utils.parseEther("0.001"), // initialPrice
          ethers.utils.parseEther(formData.maxSupply.toString()), // maxSupply
          walletAddress          // initialOwner
        ];
      } else {
        // NFT deployment arguments
        contractABI = abiNFT;
        contractBytecode = byteCodeNFT;
        deployArgs = [
          ethers.utils.parseEther("0.1"), // initialPrice
          formattedBaseURI,              // baseURI
          formData.maxSupply,            // maxSupply
          walletAddress,                 // initialOwner
          formData.businessName          // name
        ];
      }
  
      console.log("Deploying with args:", deployArgs);  // Add this for debugging
      
      const contractFactory = new ethers.ContractFactory(contractABI, contractBytecode, signer);
      const contract = await contractFactory.deploy(...deployArgs);
      await contract.deployed();
  
      console.log('Contract deployed at:', contract.address);
      return contract.address;
  
    } catch (error) {
      console.error('Error deploying contract:', error);
      throw error;
    }
  }


  // Check if wallet is already connected
  useEffect(() => {
    const checkWallet = async () => {
      if (typeof window.ethereum !== 'undefined') {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking wallet:', error);
        }
      }
    };

    checkWallet();
  }, []);

  
  // Handle form input changes
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle token type selection
  const handleTokenTypeSelect = (tokenType: string) => {
    setFormData({
      ...formData,
      tokenType: tokenType
    });
  };
  async function saveTokenData(formData: FormData, contractAddress: string, walletAddress:string) {
    try {
      const tokenData = {
        // Contract Details
        contractAddress: contractAddress,
        walletAddress: walletAddress,
        tokenType: formData.tokenType,
        deploymentDate: new Date().toISOString(),
        
        // Business Details
        businessName: formData.businessName,
        ownerName: formData.ownerName,
        contactEmail: formData.contactEmail,
        description: formData.description,
        
        // Token Details
        maxSupply: formData.maxSupply,
        baseURI: formData.baseURI,
        benefitsOffered: formData.BenefitOffered,
        
        // Status
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
  
      const response = await fetch('/api/saveToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tokenData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to save token data');
      }
  
      const data = await response.json();
      return data.id; // Returns the Firestore document ID
    } catch (error) {
      console.error('Error saving token data:', error);
      throw error;
    }
  }
  // Handle form submission
  const handleSubmit = async () => {
    try {
        // await ensureHoleskyNetwork();

      if (!walletAddress) {
        throw new Error('Please connect your wallet first');
      }
      
      if (!formData.maxSupply || Number(formData.maxSupply) <= 0) {
        throw new Error('Please enter a valid maximum supply');
      }
      
      if (formData.tokenType === 'Non-Fungible Tokens' && !formData.baseURI) {
        throw new Error('Base URI is required for NFTs');
      }
  
      console.log("Deploying with:", {
        walletAddress,
        formData
      });
  
      // Deploy the contract
    const contractAddress =  await deployToken(formData, walletAddress);
    
    console.log("Contract deployed at:", contractAddress);

    // Save the token data
    const tokenId = await saveTokenData(formData, contractAddress, walletAddress);
    console.log("Token data saved with ID:", tokenId);

    // Show success message
    alert(`Contract deployed and data saved successfully!\nContract Address: ${contractAddress}\nToken ID: ${tokenId}`);

      
    } catch (error) {
      console.error('Submission error:', error);
      alert(error.message || 'An error occurred during deployment');
    }
  };
  

  const nextStep = () => {
    if (step === 3) {
      handleSubmit();
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[ // Stats cards
          { label: 'Total Supply', value: '1,000,000 TKN', icon: <Wallet className="h-5 w-5 text-blue-400" />, bg: 'from-blue-600 to-blue-800' },
          { label: 'Token Holders', value: '247', icon: <Users className="h-5 w-5 text-purple-400" />, bg: 'from-purple-600 to-purple-800' },
          { label: 'Market Cap', value: '$125,000', icon: <BarChart className="h-5 w-5 text-green-400" />, bg: 'from-green-600 to-green-800' },
          { label: 'Token Price', value: '$0.125', icon: <Building2 className="h-5 w-5 text-yellow-400" />, bg: 'from-yellow-600 to-yellow-800' }
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg bg-gradient-to-br ${card.bg} shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-slate-200 font-medium">{card.label}</h3>
              {card.icon}
            </div>
            <p className="text-3xl font-bold text-white">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {step === 1 && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Business Owner Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter owner's name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter contact email"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Business Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Describe your business"
                />
              </div>
              <button
                type="button"
                onClick={prevStep}
                className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <h2 className="text-2xl font-bold mb-6">Token Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Token Type</label>
                <select
                  name="tokenType"
                  value={formData.tokenType}
                  onChange={(e) => handleTokenTypeSelect(e.target.value)}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Token Type</option>
                  <option value="Security Tokens">Security Tokens</option>
                  <option value="Utility Tokens">Utility Tokens</option>
                  <option value="Governance Tokens">Governance Tokens</option>
                  <option value="Non-Fungible Tokens">Non-Fungible Tokens</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Benefits Offered</label>
                <input
                  type="text"
                  name="BenefitOffered"
                  value={formData.BenefitOffered}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter benefits offered"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Maximum Supply</label>
                <input
                  type="number"
                  name="maxSupply"
                  value={formData.maxSupply}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter maximum supply"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Base URI (IPFS Link)</label>
                <input
                  type="text"
                  name="baseURI"
                  value={formData.baseURI}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter base URI for metadata"
                />
              </div>
              <button
                type="button"
                onClick={prevStep}
                className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
