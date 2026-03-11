'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    {name: 'Team Projects', path: '/Team_projects' }
  ];

  const secondaryItems = [
    { name: 'Resume', path: '/resume.pdf' },
    { name: 'CV', path: '/resume.pdf' },
  ];

  return (
    // Decreased container padding from py-4 to py-2
    <div className="w-full flex justify-center py-2 sticky top-0 z-50">
      <nav className="
        w-[90%] max-w-xl
        rounded-full shadow-sm 
        relative
        transition-all duration-300
      ">
        {/* Decreased inner height with py-1.5 */}
        <div className="px-6 py-1.5 flex items-center justify-center relative">

          {/* 1. Main Navigation - Centered */}
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-all duration-200 hover:text-blue-600
                      ${isActive ? 'text-blue-600 font-bold' : 'text-gray-600'}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* 2. Top-Right Secondary Links - Styled exactly like Main Nav */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-6">
        {secondaryItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 transition-all duration-200 hover:text-blue-600"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;