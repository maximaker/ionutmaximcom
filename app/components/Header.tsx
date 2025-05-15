'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ui-enhancements';
import { LiveChatButton } from './engagement-elements';

const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#projects' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Mobile menu overlay
  const menuOverlay =
    menuOpen && typeof window !== 'undefined'
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur flex flex-col px-6 py-6"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between h-16 mb-4">
              <Link
                href="/"
                className="font-light text-xl tracking-wider text-foreground"
                aria-label="Home"
              >
                ionut<span className="text-accent">maxim</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-foreground h-12 w-12 p-0 rounded-full flex items-center justify-center focus:outline-none focus:ring"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 items-start flex-1 w-full">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-light text-muted-foreground hover:text-foreground transition-colors text-left w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="btn-primary w-full mt-8 text-xl font-light h-12 px-6 rounded-full flex items-center justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Button>
            </nav>
            <div className="border-t border-border pt-6 mt-6 flex gap-4 w-full md:hidden">
              <ThemeToggle
                className="h-12 w-12 p-0 rounded-full flex items-center justify-center"
                iconClassName="h-7 w-7"
              />
              <LiveChatButton
                className="h-12 w-12 p-0 rounded-full flex items-center justify-center"
                iconClassName="h-7 w-7"
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <header className="w-full sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          href="/"
          className="font-light text-xl tracking-wider text-foreground"
          aria-label="Home"
        >
          ionut<span className="text-accent">maxim</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="btn-primary ml-4">Get a Quote</Button>
          <ThemeToggle className="hidden md:flex" />
          <LiveChatButton />
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-2 rounded-full focus:outline-none focus:ring"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {menuOverlay}
    </header>
  );
}
