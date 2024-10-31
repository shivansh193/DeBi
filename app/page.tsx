import React from 'react';

import Home from './components/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      
      <main className="flex-grow">
          <Home />
        </main>
      
    </div>
  );
}
