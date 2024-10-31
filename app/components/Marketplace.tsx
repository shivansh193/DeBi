"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Importing Link from next/link
import { Search, Filter, TrendingUp, BarChart2 } from 'lucide-react';

const tokens = [
  {
    id: 1,
    name: 'Tech Innovation Corp',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: '0.01 ETH',
    marketCap: '$125,000',
    holders: 247,
    change: '+15.4%',
  },
  {
    id: 2,
    name: 'Green Energy Solutions',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: '0.02 ETH',
    marketCap: '$250,000',
    holders: 384,
    change: '+8.2%',
  },
  {
    id: 3,
    name: 'Digital Health Platform',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    price: '0.015 ETH',
    marketCap: '$180,000',
    holders: 156,
    change: '+12.7%',
  },
];

export default function Marketplace() {
  const [sortBy, setSortBy] = useState('trending');

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
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">24h Volume</span>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
          <div className="text-xl font-bold">$1.2M</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Active Tokens</span>
            <BarChart2 className="h-5 w-5 text-blue-400" />
          </div>
          <div className="text-xl font-bold">156</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Total Holders</span>
            <BarChart2 className="h-5 w-5 text-purple-400" />
          </div>
          <div className="text-xl font-bold">15.4K</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Avg. ROI</span>
            <TrendingUp className="h-5 w-5 text-green-400" />
          </div>
          <div className="text-xl font-bold">+24.6%</div>
        </div>
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
                src={token.image}
                alt={token.name}
                className="w-24 h-24 rounded-lg object-cover group-hover:scale-105 transition"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{token.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-slate-400 text-sm">Price</div>
                    <div className="font-medium">{token.price}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Market Cap</div>
                    <div className="font-medium">{token.marketCap}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">Holders</div>
                    <div className="font-medium">{token.holders}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm">24h Change</div>
                    <div className="font-medium text-green-400">{token.change}</div>
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
