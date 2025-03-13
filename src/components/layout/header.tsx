import { Button } from '@/components/ui/button';
import { Sparkles, Menu } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Xylo Solutions</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Button variant="outline" size="sm">Log In</Button>
            <Button size="sm">Sign Up Free</Button>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}