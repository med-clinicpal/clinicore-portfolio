"use client";

import { usePathname } from 'next/navigation';
import DarkModeToggle from './DarkModeToggle';

const locales = ['ar', 'en'];

export default function LanguageSwitcher({ lang }) {
  const pathname = usePathname(); // Get the current path

  const handleChange = (selectedLang) => {
    if (selectedLang === lang) return;
    const currentPath = pathname.split('/');
    const currentLocale = currentPath[1]; // Get the current locale
    
    // Remove the existing locale if present
    if (locales.includes(currentLocale)) {
      currentPath.splice(1, 1); // Remove the current locale
    }

    // Add the selected locale to the path
    const newPath = `/${selectedLang}${currentPath.join('/')}`;

    // Navigate to the new URL
    window.location.href = newPath;
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      {/* Language Switcher */}
      <div className="group relative inline-block">
        {/* Button */}
        <button
          className="text-lg uppercase font-bold flex items-center focus:outline-none py-2 space-x-1"
        >
          <span>{lang.toUpperCase()}</span>
          {/* Modern Caret */}
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown */}
        <ul className="absolute hidden group-hover:block top-full right-0 mt-1 w-24 bg-bg border border-border rounded-lg shadow-lg text-base font-bold z-10">
          {locales.map((locale) => (
            <li
              key={locale}
              className={`px-4 py-2 cursor-pointer transition-colors duration-200 hover:text-primary`}
              onClick={() => handleChange(locale)}
            >
              {locale.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
