"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Building2, Users, Wallet, BarChart, Shield, Award } from 'lucide-react';

interface TokenOfferingProps {
    id: string; // Expecting an id prop
}

const TokenOffering: React.FC<TokenOfferingProps> = ({ id }) => {
    const searchParams = useSearchParams(); // Get the search parameters
    const queryId = searchParams.get('id'); // Access the id from search parameters if needed

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                alt="Business"
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h1 className="text-2xl font-bold">Tech Innovation Corp {id}</h1>
                                <p className="text-slate-400">Revolutionary blockchain solutions</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                                    <Wallet className="h-4 w-4" />
                                    <span className="text-sm">Price</span>
                                </div>
                                <p className="font-semibold">0.01 ETH</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                                    <Users className="h-4 w-4" />
                                    <span className="text-sm">Holders</span>
                                </div>
                                <p className="font-semibold">247</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                                    <Building2 className="h-4 w-4" />
                                    <span className="text-sm">Market Cap</span>
                                </div>
                                <p className="font-semibold">$125,000</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 text-slate-400 mb-1">
                                    <BarChart className="h-4 w-4" />
                                    <span className="text-sm">Supply</span>
                                </div>
                                <p className="font-semibold">1M TKN</p>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-xl font-bold mb-4">About the Business</h2>
                            <p className="text-slate-300">
                                Tech Innovation Corp is at the forefront of blockchain technology, developing cutting-edge solutions for enterprise clients. With a proven track record of successful implementations and a strong focus on innovation, we're positioned for significant growth in the expanding blockchain market.
                            </p>
                            
                            <h2 className="text-xl font-bold mt-6 mb-4">Financial Overview</h2>
                            <ul className="list-disc pl-4 text-slate-300">
                                <li>Annual Revenue: $2.5M</li>
                                <li>Growth Rate: 150% YoY</li>
                                <li>Current Clients: 50+</li>
                                <li>Market Size: $15B</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
                        <h2 className="text-xl font-bold mb-6">Token Benefits</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Shield className="h-5 w-5 text-blue-400" />
                                    <h3 className="font-semibold">Governance Rights</h3>
                                </div>
                                <p className="text-slate-400">Participate in key business decisions through voting</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Award className="h-5 w-5 text-purple-400" />
                                    <h3 className="font-semibold">Priority Access</h3>
                                </div>
                                <p className="text-slate-400">Early access to new products and features</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Wallet className="h-5 w-5 text-green-400" />
                                    <h3 className="font-semibold">Revenue Sharing</h3>
                                </div>
                                <p className="text-slate-400">Quarterly dividends based on company performance</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-lg">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Users className="h-5 w-5 text-yellow-400" />
                                    <h3 className="font-semibold">Community Access</h3>
                                </div>
                                <p className="text-slate-400">Exclusive access to holder-only events and community</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6 sticky top-4">
                        <h2 className="text-xl font-bold mb-6">Purchase Tokens</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">Amount (ETH)</label>
                                <input
                                    type="number"
                                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="0.0"
                                    step="0.01"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1">You will receive</label>
                                <div className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-slate-400">
                                    0 TKN
                                </div>
                            </div>
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition">
                                Connect Wallet to Purchase
                            </button>
                            <p className="text-sm text-slate-400 text-center">
                                By purchasing you agree to the token terms and conditions
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenOffering;
