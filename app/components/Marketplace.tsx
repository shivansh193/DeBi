"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Importing Link from next/link
import { Search, Filter } from 'lucide-react';
import { getTokenDetails } from '../../utils/firestore'; // Adjust this import according to your file structure

interface Token {
    id: string;
    // Contract Details
    contractAddress: string;
    walletAddress: string;
    tokenType: string;
    deploymentDate: Date;
    
    // Business Details
    businessName: string;
    ownerName: string;
    contactEmail: string;
    description: string;
    
    // Token Details
    maxSupply: string;
    baseURI: string;
    benefitsOffered: string;
    
    // Status
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export default function Marketplace() {
    // Initialize tokens as an array of Token objects
    const [tokens, setTokens] = useState<Token[]>([]);
    const [sortBy, setSortBy] = useState('trending');

    // Fetch tokens from Firebase on component mount
    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const fetchedTokens = await getTokenDetails(); // Fetch tokens
                console.log(fetchedTokens)
                setTokens(fetchedTokens); // Set the tokens state (should be an array)
            } catch (error) {
                console.error('Error fetching tokens:', error);
            }
        };

        fetchTokens(); // Call the fetch function
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <header className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Token Marketplace</h1>
                <p className="text-slate-400">
                    Discover and invest in innovative businesses through their tokens
                </p>
            </header>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-grow relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search tokens..."
                    />
                </div>
                <div className="flex gap-4">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="trending">Trending</option>
                        <option value="marketCap">Market Cap</option>
                        <option value="newest">Newest</option>
                    </select>
                    <button className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 hover:bg-slate-700/50 transition">
                        <Filter className="h-5 w-5" />
                        Filters
                    </button>
                </div>
            </div>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* Stats cards here */}
                {/* Replace with actual stats data if available */}
            </div>

            {/* Token List */}
            <div className="space-y-4">
                {tokens.map((token) => (
                    <Link
                        key={token.id}
                        href={`/token/${token.id}`} // Updated to use Next.js Link
                        className="block bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition group"
                    >
                        <div className="flex items-center gap-6">
                            <img
                                src={token.baseURI} // Assuming baseURI holds the image URL
                                alt={token.businessName}
                                className="w-24 h-24 rounded-lg object-cover group-hover:scale-105 transition"
                            />
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold mb-2">{token.businessName}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div>
                                        <div className="text-slate-400 text-sm">Price</div>
                                        <div className="font-medium">{token.maxSupply}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm">Market Cap</div>
                                        <div className="font-medium">{token.status}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm">Holders</div>
                                        <div className="font-medium">{token.ownerName}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-400 text-sm">24h Change</div>
                                        <div className="font-medium text-green-400">{token.contactEmail}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
