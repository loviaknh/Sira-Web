'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#fonctionnalites', label: 'Fonctionnalités' },
  { href: '#ecosysteme', label: 'Écosystème' },
  { href: '#reseau', label: 'Réseau de soins' },
  { href: '#professionnels', label: 'Professionnels' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sira-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold text-sira-dark">
              Sira
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sira-text hover:text-sira-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#telecharger"
              className="bg-sira-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sira-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Télécharger l&apos;application
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sira-text-dark font-medium hover:text-sira-primary transition-colors border-b border-gray-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="py-4">
            <a
              href="#telecharger"
              className="block w-full text-center bg-sira-primary text-white px-5 py-3 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Télécharger l&apos;application
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
