import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="text-xl font-bold flex items-center">
              TokenizeHub
            </Link>
            <p className="mt-4 text-slate-400">
              Empowering businesses through decentralized tokenization. Create, manage, and grow your business tokens with ease.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/docs" className="text-slate-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="mt-4 flex space-x-6">
              <a href="https://github.com" className="text-slate-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8">
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} TokenizeHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}