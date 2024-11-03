import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { Rocket, Shield, Users, Coins, ArrowRight } from 'lucide-react';

export default function BusinessPortal() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-6 text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
          Launch Your Business Token
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Transform your business into a tokenized ecosystem. Engage with customers, raise capital, and build community.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { icon: <Shield />, title: '1. Verify Business', desc: 'Complete our verification process to ensure transparency and trust.', color: 'bg-blue-500/10', iconColor: 'text-blue-400' },
          { icon: <Coins />, title: '2. Configure Token', desc: 'Set up your token economics, benefits, and governance structure.', color: 'bg-purple-500/10', iconColor: 'text-purple-400' },
          { icon: <Rocket />, title: '3. Launch Token', desc: 'Deploy your token and start building your tokenized community.', color: 'bg-green-500/10', iconColor: 'text-green-400' }
        ].map((step, index) => (
          <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-6 transform hover:-translate-y-2 transition duration-300 shadow-lg">
            <div className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
              {React.cloneElement(step.icon, { className: `h-6 w-6 ${step.iconColor}` })}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-slate-400">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 p-8 shadow-xl hover:shadow-2xl transition duration-300">
        <h2 className="text-3xl font-bold mb-8 text-center text-gradient bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Why Tokenize Your Business?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: <Users />, title: 'Community Engagement', desc: 'Build a loyal community of token holders who are invested in your success.', color: 'text-blue-400' },
            { icon: <Coins />, title: 'Alternative Funding', desc: 'Access new forms of capital without traditional financing constraints.', color: 'text-purple-400' },
            { icon: <Shield />, title: 'Transparent Growth', desc: 'Share success with stakeholders through a transparent token economy.', color: 'text-green-400' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              {React.cloneElement(benefit.icon, { className: `h-8 w-8 ${benefit.color} flex-shrink-0` })}
              <div>
                <h3 className="font-semibold mb-2 text-lg">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href="/dashboard">
          <button className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition shadow-md hover:shadow-lg">
            Start Tokenization Process
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
        <p className="mt-4 text-slate-400">
          Already have a token?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300">
            Sign in to your dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
