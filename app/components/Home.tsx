import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Coins, BarChart, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
              Tokenize Your Business Future
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Transform your business with blockchain technology. Create tokens, engage with customers, and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/business-portal"
                className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition shadow-lg"
              >
                Launch Your Token
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition shadow-lg"
              >
                Explore Marketplace
                <Globe className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose TokenizeHub?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our platform provides everything you need to launch and manage your business tokens successfully.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 h-full">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-slate-400">
                Enterprise-grade security with multi-signature wallets and audited smart contracts.
              </p>
            </div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 h-full">
              <Coins className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Token Creation</h3>
              <p className="text-slate-400">
                Launch your custom token with our intuitive interface. No coding required.
              </p>
            </div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 h-full">
              <BarChart className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-slate-400">
                Track performance, holder engagement, and market metrics in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">$10M+</div>
              <div className="text-slate-400">Total Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-slate-400">Active Tokens</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">50K+</div>
              <div className="text-slate-400">Token Holders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-slate-400">Secure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tokens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Tokens</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover innovative businesses that have already launched their tokens on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <Link
              key={id}
              href={`/token/${id}`}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <img
                src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3`}
                alt={`Business ${id}`}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl font-semibold mb-2">Tech Innovation Corp {id}</h3>
              <p className="text-slate-400 mb-4">Revolutionary blockchain solutions for enterprise clients.</p>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Market Cap: $125,000</span>
                <span>Holders: 247</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
