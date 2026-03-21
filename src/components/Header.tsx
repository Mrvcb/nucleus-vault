import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-black border-b border-gray-800">
      <div className="text-xl font-black tracking-tighter text-white">
        SHELBY <span className="text-green-500">INTELLIGENCE</span>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">VAULT</a>
          <a href="#" className="hover:text-white transition-colors">NETWORK</a>
          <a href="#" className="hover:text-white transition-colors">DOCS</a>
        </nav>
        {/* Cüzdan butonu buraya otomatik gelecek */}
      </div>
    </header>
  );
};

export default Header;
