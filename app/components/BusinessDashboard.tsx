import React from 'react';
import { Building2, BarChart, Users, Wallet } from 'lucide-react';

export default function BusinessDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Business Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-400">Total Supply</h3>
              <Wallet className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-2xl font-bold">1,000,000 TKN</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-400">Token Holders</h3>
              <Users className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-2xl font-bold">247</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-400">Market Cap</h3>
              <BarChart className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-2xl font-bold">$125,000</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-400">Token Price</h3>
              <Building2 className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-2xl font-bold">$0.125</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
          <h2 className="text-xl font-bold mb-6">Business Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Business Name</label>
              <input
                type="text"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter business name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
              <textarea
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Describe your business"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Revenue (Last 12 months)</label>
              <input
                type="number"
                className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter revenue"
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition">
              Update Information
            </button>
          </form>
        </div>

        <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
          <h2 className="text-xl font-bold mb-6">Token Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg">
              <input type="checkbox" className="mt-1" />
              <div>
                <h3 className="font-medium">Early Access to Products</h3>
                <p className="text-sm text-slate-400">Token holders get priority access to new releases</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg">
              <input type="checkbox" className="mt-1" />
              <div>
                <h3 className="font-medium">Exclusive Discounts</h3>
                <p className="text-sm text-slate-400">Special pricing for token holders</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg">
              <input type="checkbox" className="mt-1" />
              <div>
                <h3 className="font-medium">Voting Rights</h3>
                <p className="text-sm text-slate-400">Participate in business decisions</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-slate-900/50 rounded-lg">
              <input type="checkbox" className="mt-1" />
              <div>
                <h3 className="font-medium">Revenue Sharing</h3>
                <p className="text-sm text-slate-400">Quarterly dividends for token holders</p>
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition">
              Save Benefits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}