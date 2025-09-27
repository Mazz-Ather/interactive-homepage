'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Globe } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface Translations {
  en: {
    logo: string;
    home: string;
    services: string;
    industries: string;
    products: string;
    portfolio: string;
    about: string;
    workWithUs: string;
    servicesDropdown: { label: string; href: string }[];
    industriesDropdown: { label: string; href: string }[];
  };
  ar: {
    logo: string;
    home: string;
    services: string;
    industries: string;
    products: string;
    portfolio: string;
    about: string;
    workWithUs: string;
    servicesDropdown: { label: string; href: string }[];
    industriesDropdown: { label: string; href: string }[];
  };
}

const translations: Translations = {
  en: {
    logo: 'INTERACTIVE',
    home: 'HOME',
    services: 'SERVICES',
    industries: 'INDUSTRIES',
    products: 'PRODUCTS',
    portfolio: 'PORTFOLIO',
    about: 'ABOUT US',
    workWithUs: 'Work With Us',
    servicesDropdown: [
      { label: 'Digital Transformation', href: '/services/digital-transformation' },
      { label: 'Events & Exhibitions', href: '/services/events-exhibitions' },
      { label: '3D Animation & Visualisation', href: '/services/3d-animation-and-visualisation' },
      { label: 'Real Estate Digital Twins', href: '/services/real-estate-digital-twins' },
      { label: 'Gamification', href: '/services/gamification' },
    ],
    industriesDropdown: [
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Events & Entertainment', href: '/industries/events-entertainment' },
      { label: 'E-Retail & E-commerce', href: '/industries/retail-and-ecommerce' },
      { label: 'Defense & Security', href: '/industries/defense-and-security' },
      { label: 'Tourism & Hospitality', href: '/industries/tourism-and-hospitality' },
      { label: 'Marketing & Ad Creative', href: '/industries/marketing-and-ad-creative' },
    ],
  },
  ar: {
    logo: 'تفاعلي',
    home: 'الرئيسية',
    services: 'الخدمات',
    industries: 'الصناعات',
    products: 'المنتجات',
    portfolio: 'المحفظة',
    about: 'من نحن',
    workWithUs: 'اعمل معنا',
    servicesDropdown: [
      { label: 'تطوير المواقع', href: '/services/web-development' },
      { label: 'تطبيقات الموبايل', href: '/services/mobile-apps' },
      { label: 'تصميم واجهات المستخدم', href: '/services/ui-ux-design' },
      { label: 'التسويق الرقمي', href: '/services/digital-marketing' },
    ],
    industriesDropdown: [
      { label: 'الرعاية الصحية', href: '/industries/healthcare' },
      { label: 'التمويل', href: '/industries/finance' },
      { label: 'التجارة الإلكترونية', href: '/industries/ecommerce' },
      { label: 'التعليم', href: '/industries/education' },
    ],
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [mounted, setMounted] = useState(false);

  const t = translations[language];
  const isRTL = language === 'ar';

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');
  const handleDropdownToggle = (item: string) =>
    setActiveDropdown(activeDropdown === item ? null : item);

  const navItems: NavItem[] = [
    { label: t.home, href: '/' },
    { label: t.services, href: '/services', hasDropdown: true, dropdownItems: t.servicesDropdown },
    { label: t.industries, href: '/industries', hasDropdown: true, dropdownItems: t.industriesDropdown },
    { label: t.products, href: '/products' },
    { label: t.portfolio, href: '/portfolio' },
    { label: t.about, href: '/about' },
  ];

  if (!mounted) return null;

  return (
    <>
      <nav className="bg-black text-white fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold tracking-wider">
                {t.logo}
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 xl:space-x-4">
                {navItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <div
                      className="flex items-center cursor-pointer"
                      onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className="px-3 py-2 text-sm font-medium hover:text-gray-300 transition-colors duration-200 tracking-wide"
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </div>

                    {/* Dropdown */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div
                        className={`absolute ${
                          isRTL ? 'right-0' : 'left-0'
                        } mt-2 w-56 bg-white text-black rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50`}
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors duration-200"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <Globe className="h-5 w-5" />
                <span className="ml-1 text-sm font-medium">
                  {language === 'en' ? 'AR' : 'EN'}
                </span>
              </button>

              <Link href="/contact" className="relative group">
                <div className="relative rounded-3xl overflow-hidden px-6 py-2 border border-white text-white font-medium tracking-wide transition-colors duration-300 group-hover:text-black">
                  <span className="relative z-10">{t.workWithUs}</span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </div>
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center p-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                <Globe className="h-4 w-4" />
                <span className="ml-1 text-xs font-medium">
                  {language === 'en' ? 'AR' : 'EN'}
                </span>
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar - Now as separate fixed element to avoid stacking issues */}
      {isOpen && (
        <div
          className={`fixed top-0 h-screen w-80 bg-black text-white z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isRTL
              ? 'left-0 translate-x-0' // For RTL, slide from left (adjust if you want from right)
              : 'right-0 translate-x-0'
          } ${!isOpen ? (isRTL ? '-translate-x-full' : 'translate-x-full') : ''}`}
          style={{ transform: isOpen ? 'translateX(0)' : isRTL ? 'translateX(-100%)' : 'translateX(100%)' }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <span className="text-xl font-bold tracking-wider">{t.logo}</span>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium hover:text-gray-300 transition-colors duration-200"
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="p-2 focus:outline-none"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.hasDropdown && item.dropdownItems && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.label
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 space-y-2 py-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-gray-800 px-4 pb-6">
              <Link
                href="/contact"
                className="block w-full text-center py-3 border border-white text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {t.workWithUs}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
