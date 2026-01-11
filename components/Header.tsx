
import React, { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={() => window.location.reload()}>
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary">monitoring</span>
          </div>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">FinTrack</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col min-w-40 h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100">
            <div className="text-slate-500 flex items-center justify-center pl-3">
              <span className="material-symbols-outlined text-xl">search</span>
            </div>
            <input 
              className="form-input flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 h-full placeholder:text-slate-500 px-3 text-sm font-normal" 
              placeholder="Search markets..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors" href="#">Dashboard</a>
          <a className="text-primary text-sm font-semibold" href="#">Markets</a>
          <a className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors" href="#">Portfolio</a>
          <a className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors" href="#">News</a>
        </nav>
        <div className="flex gap-2 border-l border-slate-200 pl-6">
          <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all" 
            style={{ backgroundImage: 'url("https://picsum.photos/seed/user/100/100")' }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
