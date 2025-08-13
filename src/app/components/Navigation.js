'use client'
import { useState } from 'react';
import { getTranslations } from '../data/translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation({ lang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = getTranslations(lang);

  const menuItems = [
    { id: 'home', label: t.home, href: '#home' },
    { id: 'features', label: t.features, href: '#features' },
    { id: 'analytics', label: 'Analytics', href: '#analytics' },
    { id: 'about', label: t.about, href: '#about' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12 relative min-h-[80px]">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xl leading-none">C</span>
          </div>
          <span className="text-text text-xl font-bold leading-none">CliniCore.ai</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-text hover:text-primary transition-colors duration-200 font-medium py-2"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side - Language Switcher & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <LanguageSwitcher lang={lang} />
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-bg-alt hover:bg-border transition-colors focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-6 bg-text transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-text transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-text transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-gray-600 bg-opacity-40 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`relative h-full w-80 max-w-xs bg-bg shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-text text-lg font-bold">CliniCore.ai</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-bg-alt transition-colors"
            >
              <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Menu */}
          <div className="py-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full px-6 py-4 text-left hover:bg-bg-alt transition-colors duration-200 flex items-center"
              >
                <span className="text-text hover:text-primary font-medium">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-btn-primary-hover text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                {t.getDemo}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}