import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="bg-purple-200 py-6 border-t border-purple-300 shadow-inner">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          
          {/* Logo + Message */}
          <div className="w-full md:w-1/2 lg:w-1/3 text-purple-900">
            <div className="mb-3">
              <Logo width="100px" />
            </div>
            <p className="text-sm font-medium">
              🌸 Crafted with love for cozy creators & kind storytellers.
            </p>
            <p className="text-xs mt-2 text-purple-700">
              &copy; {new Date().getFullYear()} CozyBlog. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="w-1/2 md:w-1/4 lg:w-1/6">
            <h3 className="text-sm font-semibold text-purple-800 mb-3 uppercase tracking-wider">Company</h3>
            <ul className="space-y-1 text-sm text-purple-700">
              <li><Link to="/" className="hover:text-purple-900">Features</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Pricing</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Affiliate</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-1/2 md:w-1/4 lg:w-1/6">
            <h3 className="text-sm font-semibold text-purple-800 mb-3 uppercase tracking-wider">Support</h3>
            <ul className="space-y-1 text-sm text-purple-700">
              <li><Link to="/" className="hover:text-purple-900">Account</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Help</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Contact Us</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full md:w-1/2 lg:w-1/4 mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-purple-800 mb-3 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-1 text-sm text-purple-700">
              <li><Link to="/" className="hover:text-purple-900">Terms & Conditions</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-purple-900">Licensing</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-purple-300 pt-4 text-center text-sm text-purple-600">
          💖 Thanks for stopping by! Stay magical.
        </div>
      </div>
    </section>
  );
}

export default Footer;
