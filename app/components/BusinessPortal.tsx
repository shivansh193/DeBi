import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Rocket, Shield, Users, Coins, ArrowRight } from 'lucide-react';

export default function BusinessPortal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Launch Your Business Token</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Transform your business into a tokenized ecosystem. Engage with customers, raise capital, and build community.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6">
          <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">1. Verify Business</h3>
          <p className="text-slate-400">
            Complete our verification process to ensure transparency and trust.
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6">
          <div className="bg-purple-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Coins className="h-6 w-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">2. Configure Token</h3>
          <p className="text-slate-400">
            Set up your token economics, benefits, and governance structure.
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6">
          <div className="bg-green-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">3. Launch Token</h3>
          <p className="text-slate-400">
            Deploy your token and start building your tokenized community.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Tokenize Your Business?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <Users className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Community Engagement</h3>
              <p className="text-slate-400">
                Build a loyal community of token holders who are invested in your success.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Coins className="h-6 w-6 text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Alternative Funding</h3>
              <p className="text-slate-400">
                Access new forms of capital without traditional financing constraints.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Shield className="h-6 w-6 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Transparent Growth</h3>
              <p className="text-slate-400">
                Share success with stakeholders through a transparent token economy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/dashboard" className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition shadow-lg">
          Start Tokenization Process
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <p className="mt-4 text-slate-400">
          Already have a token? <Link href="/login" className="text-blue-400 hover:text-blue-300">Sign in to your dashboard</Link>
        </p>
      </div>
    </div>
  );
}
