"use client"; // Ensure the component works client-side in Next.js

import { usePathname } from 'next/navigation';

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
    <div className=" relative inline-block mr-auto lg:ml-auto lg:mr-0">
      {/* Button and dropdown container */}
      <div className="group relative inline-block">
        {/* Button */}
        <button
          className=" text-xl uppercase font-bold flex items-center space-x-1 focus:outline-none"
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
        <ul className="absolute hidden group-hover:block top-full right-0 mt-0 w-24 bg-bg  border border-[1px]  border-bg-alt rounded-md shadow-lg text-base font-bold z-10">
          {locales.map((locale) => (
            <li
              key={locale}
              className={`px-4 py-2 cursor-pointer transition-colors duration-200 hover:text-primary `}
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
