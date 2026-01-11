
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-12">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="material-symbols-outlined text-2xl">monitoring</span>
            <h2 className="text-slate-900 text-lg font-bold">FinTrack</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Modern financial analysis tools for the next generation of retail investors. Approachable, affordable, and accurate.
          </p>
        </div>
        
        <div>
          <h5 className="text-slate-900 text-sm font-bold mb-4">Product</h5>
          <ul className="flex flex-col gap-2 text-slate-500 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Market Tracking</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Portfolio Manager</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">News Feed</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">API Access</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-slate-900 text-sm font-bold mb-4">Support</h5>
          <ul className="flex flex-col gap-2 text-slate-500 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Financial Guide</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-slate-900 text-sm font-bold mb-4">Newsletter</h5>
          <p className="text-slate-500 text-xs mb-4">Weekly market insights delivered to your inbox.</p>
          <div className="flex gap-2">
            <input 
              className="form-input flex-1 rounded-lg border-slate-200 bg-slate-50 text-xs focus:ring-primary" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="bg-primary text-white p-2 rounded-lg hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
        © 2024 FinTrack Analysis. All rights reserved. Investing involves risk, including possible loss of principal.
      </div>
    </footer>
  );
};

export default Footer;
