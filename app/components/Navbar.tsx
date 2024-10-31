import Link from 'next/link';
import { Wallet, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">TokenizeHub</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/marketplace"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-300 hover:text-white"
              >
                Marketplace
              </Link>
              <Link
                href="/business-portal"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-300 hover:text-white"
              >
                Business Portal
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition shadow-lg">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}