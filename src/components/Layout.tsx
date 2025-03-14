'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div>
      <nav className="nav">
        <div className="container nav-content">
          <Link href="/" className="nav-brand">
            Siew La
          </Link>
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="fade-in-up">
          {children}
        </div>
      </main>

      <footer className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Siew La. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout; 