'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Globe, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { 
    label: string; 
    href: string; 
    description: string;
    image: string;
  }[];
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
    servicesDropdown: { 
      label: string; 
      href: string; 
      description: string;
      image: string;
    }[];
    industriesDropdown: { 
      label: string; 
      href: string; 
      description: string;
      image: string;
    }[];
    promoSection: {
      services: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
      industries: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
    };
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
    servicesDropdown: { 
      label: string; 
      href: string; 
      description: string;
      image: string;
    }[];
    industriesDropdown: { 
      label: string; 
      href: string; 
      description: string;
      image: string;
    }[];
    promoSection: {
      services: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
      industries: {
        title: string;
        subtitle: string;
        buttonText: string;
      };
    };
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
      { 
        label: 'Digital Transformation', 
        href: '/services/digital-transformation',
        description: 'Creative control and flexibility without code.',
        image: '/images/slogo1.png'
      },
      { 
        label: 'Events & Exhibitions', 
        href: '/services/events-exhibitions',
        description: 'Flexible content management.',
        image: '/images/slogo2.png'
      },
      { 
        label: '3D Animation & Visualisation', 
        href: '/services/3d-animation-and-visualisation',
        description: 'Manage stunning online stores.',
        image: '/images/slogo3.png'
      },
      { 
        label: 'Real Estate Digital Twins', 
        href: '/services/real-estate-digital-twins',
        description: 'Craft immersive experiences .',
        image: '/images/slogo4.png'
      },
      { 
        label: 'Gamification', 
        href: '/services/gamification',
        description: 'Customize your site for a worldwide audiences',
        image: '/images/slogo5.png'
      },
    ],
    industriesDropdown: [
      { 
        label: 'Real Estate', 
        href: '/services/real-estate',
        description: 'Innovative solutions for property visualization and virtual tours.',
        image: '/images/ilogo1.png'
      },
      { 
        label: 'Events & Entertainment', 
        href: '/services/events-and-entertainment',
        description: 'Interactive experiences for memorable events and entertainment.',
        image: '/images/ilogo2.png'
      },
      { 
        label: 'Retail & E-commerce', 
        href: '/services/retail-and-ecommerce',
        description: 'Transform shopping experiences with immersive retail solutions.',
        image: '/images/ilogo3.png'
      },
      { 
        label: 'Education & Training', 
        href: '/services/education-and-training',
        description: 'Revolutionary learning experiences through interactive education.',
        image: '/images/ipg'
      },
      { 
        label: 'Healthcare', 
        href: '/services/healthcare',
        description: 'Advanced healthcare solutions with immersive technologies.',
        image: '/images/ilogo5.png'
      },
      { 
        label: 'Defense & Security', 
        href: '/services/defense-and-security',
        description: 'Cutting-edge defense training and security simulations.',
        image: '/images/ilogo6.png'
      },
      { 
        label: 'Tourism & Hospitality', 
        href: '/services/tourism-and-hospitality',
        description: 'Enhance guest experiences with virtual tourism solutions.',
        image: '/images/ilogo7.png'
      },
      { 
        label: 'Marketing & Ad Creative', 
        href: '/services/marketing-and-ad-creative',
        description: 'Revolutionary marketing campaigns with immersive creativity.',
        image: '/images/ilogo8.png'
      },
    ],
    promoSection: {
      services: {
        title: 'Your Partner in Immersive Innovation',
        subtitle: 'Discover how our services can transform your business',
        buttonText: 'Explore Projects'
      },
      industries: {
        title: 'Industry Expertise',
        subtitle: 'Specialized solutions for every sector',
        buttonText: 'View Case Studies'
      }
    }
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
      { 
        label: 'تطوير المواقع', 
        href: '/services/web-development',
        description: 'حلول متطورة لتطوير مواقع الويب الحديثة والتفاعلية.',
        image: '/images/services/web-dev.jpg'
      },
      { 
        label: 'التسويق الرقمي', 
        href: '/services/digital-marketing',
        description: 'استراتيجيات تسويقية مبتكرة لنمو عملك الرقمي.',
        image: '/images/services/digital-marketing.jpg'
      },
      { 
        label: 'إدارة المحتوى', 
        href: '/services/content-management',
        description: 'نظم إدارة المحتوى المتقدمة لسهولة التحديث والإدارة.',
        image: '/images/services/cms.jpg'
      },
      { 
        label: 'الحلول السحابية', 
        href: '/services/cloud-solutions',
        description: 'تقنيات سحابية متطورة لأمان وكفاءة عملك.',
        image: '/images/services/cloud.jpg'
      },
      { 
        label: 'تطبيقات الجوال', 
        href: '/services/mobile-apps',
        description: 'تطبيقات جوال مبتكرة لنمو عملك وتفاعل العملاء.',
        image: '/images/services/mobile-apps.jpg'
      },
    ],
    industriesDropdown: [
      { 
        label: 'العقارات', 
        href: '/services/real-estate',
        description: 'حلول مبتكرة لقطاع العقارات والتطوير العمراني.',
        image: '/images/industries/real-estate-ar.jpg'
      },
      { 
        label: 'الصحة', 
        href: '/services/healthcare',
        description: 'تقنيات متطورة لتحسين الخدمات الصحية.',
        image: '/images/industries/healthcare-ar.jpg'
      },
      { 
        label: 'التعليم', 
        href: '/services/education',
        description: 'منصات تعليمية تفاعلية وحلول التعلم الإلكتروني.',
        image: '/images/industries/education-ar.jpg'
      },
      { 
        label: 'التجارة الإلكترونية', 
        href: '/services/ecommerce',
        description: 'متاجر إلكترونية متطورة وحلول الدفع الآمن.',
        image: '/images/industries/ecommerce-ar.jpg'
      },
      { 
        label: 'الخدمات المالية', 
        href: '/services/financial-services',
        description: 'تقنيات مالية مبتكرة وحلول المدفوعات الرقمية.',
        image: '/images/industries/fintech-ar.jpg'
      },
      { 
        label: 'السياحة والسفر', 
        href: '/services/travel-tourism',
        description: 'منصات حجز وحلول السياحة الذكية.',
        image: '/images/industries/tourism-ar.jpg'
      },
      { 
        label: 'التصنيع', 
        href: '/services/manufacturing',
        description: 'أتمتة العمليات وحلول الصناعة الذكية.',
        image: '/images/industries/manufacturing-ar.jpg'
      },
      { 
        label: 'الطاقة والمرافق', 
        href: '/services/energy-utilities',
        description: 'حلول ذكية لإدارة الطاقة والمرافق العامة.',
        image: '/images/industries/energy-ar.jpg'
      },
    ],
    promoSection: {
      services: {
        title: 'شريكك في الابتكار التفاعلي',
        subtitle: 'اكتشف كيف يمكن لخدماتنا تحويل عملك',
        buttonText: 'استكشف المشاريع'
      },
      industries: {
        title: 'خبرة في الصناعات',
        subtitle: 'حلول متخصصة لكل قطاع',
        buttonText: 'عرض دراسات الحالة'
      }
    }
  }
};

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isRTL = language === 'ar';
  const t = translations[language];

  const navItems: NavItem[] = [
    { label: t.home, href: '/' },
    { 
      label: t.services, 
      href: '/services',
      hasDropdown: true,
      dropdownItems: t.servicesDropdown
    },
    { 
      label: t.industries, 
      href: '/industries',
      hasDropdown: true,
      dropdownItems: t.industriesDropdown
    },
    { label: t.products, href: '/products' },
    { label: t.portfolio, href: '/portfolio' },
    { label: t.about, href: '/about' },
  ];

  const handleMouseEnter = (itemLabel: string) => {
    setActiveDropdown(itemLabel);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemLabel: string) => {
    setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  // Function to render grid layout based on dropdown type
  const renderDropdownGrid = (items: any[], isServices: boolean) => {
    if (isServices) {
      // Services: 3 items in first row, 2 items in second row (left-aligned with 3rd space blank)
      return (
        <div className="space-y-1">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-3 gap-">
            {items.slice(0, 3).map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group/item p-4 rounded-lg  transition-all duration-200 hover:shadow-sm "
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    {/* <div className="w-4 h-4 bg-gray-400 rounded"></div> */}
                    <img src={item.image} alt={item.label} className="w-6 h-6 object-cover rounded" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover/item:text-black mb-1  text-sm leading-tight">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-600 group-hover/item:text-gray-700 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Second Row - 2 items (left-aligned, 3rd space blank) */}
          {items.length > 3 && (
            <div className="grid grid-cols-3 gap-4">
              {items.slice(3, 5).map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/item p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                      {/* <div className="w-4 h-4 bg-gray-400 rounded"></div> */}
                      <img src={item.image} alt={item.label} className="w-6 h-6 object-cover rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-black mb-1 text-sm leading-tight">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-600 group-hover/item:text-gray-700 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              {/* Empty space for 3rd column */}
              <div></div>
            </div>
          )}
        </div>
      );
    } else {
      // Industries: 3 items per row, 3 rows (3-3-2 layout)
      return (
        <div className="space-y-1">
          {/* First Row - 3 items */}
          <div className="grid grid-cols-3 gap-4">
            {items.slice(0, 3).map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="group/item p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    {/* <div className="w-4 h-4 bg-gray-400 rounded"></div> */}
                    <img src={item.image} alt={item.label} className="w-6 h-6 object-cover rounded" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover/item:text-black mb-1 text-sm leading-tight">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-600 group-hover/item:text-gray-700 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Second Row - 3 items */}
          {items.length > 3 && (
            <div className="grid grid-cols-3 gap-4">
              {items.slice(3, 6).map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/item p-4 rounded-lg hover:bg-gray-50 transition-all duration-200  hover:shadow-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                      {/* <div className="w-4 h-4 bg-gray-400 rounded"></div> */}
                      <img src={item.image} alt={item.label} className="w-6 h-6 object-cover rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-black mb-1 text-sm leading-tight">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-600 group-hover/item:text-gray-700 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {/* Third Row - 2 items (left-aligned, 3rd space blank) */}
          {items.length > 6 && (
            <div className="grid grid-cols-3 gap-4">
              {items.slice(6, 8).map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group/item p-4 rounded-lg hover:bg-gray-50 transition-all duration-200  hover:shadow-sm"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                      {/* <div className="w-4 h-4 bg-gray-400 rounded"></div> */}
                      <img src={item.image} alt={item.label} className="w-6 h-6 object-cover rounded" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 group-hover/item:text-black mb-1 text-sm leading-tight">
                        {item.label}
                      </h4>
                      <p className="text-xs text-gray-600 group-hover/item:text-gray-700 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
              {/* Empty space for 3rd column */}
              <div></div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <nav className="relative bg-black text-white z-50">
        <div className="relative">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Logo */}
                          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold tracking-wider">
                {t.logo}
  
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <div 
                    key={item.label} 
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown ? handleMouseEnter(item.label) : undefined}
                    onMouseLeave={() => item.hasDropdown ? handleMouseLeave() : undefined}
                  >
                    <Link
                      href={item.href}
                      className="relative flex items-center text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gray-300 group py-2"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown 
                          className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Full Width Dropdown Menu */}
                    {item.hasDropdown && item.dropdownItems && (
                      <div className={`absolute rounded-full  top-full bg-white  mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50 ${
                        item.label === t.services ? 'xl80:left-[-390px] lg:left-[-300px]' : 'left-[-450px] xl80:left-[-510px] lg:left-[-440px]'
                      }`}>
                        <div className="w-screen lg:w-[90vw]  max-w-7xl bg-white text-black rounded-lg shadow-2xl overflow-hidden">
                          <div className="flex">
                            {/* Content Section - 65% width */}
                            <div className="w-[63%] p-5">
                              <div className="mb-3">
                                <h3 className="text-lg px font-semibold text-gray-500 mb-2">
                                  {item.label}
                                </h3>
                                <div className="w-full h-[1px] bg-[#F0F0F0]"></div>
                              </div>
                              
                              {/* Dynamic Grid Layout */}
                              {renderDropdownGrid(item.dropdownItems, item.label === t.services)}
                            </div>

                            {/* Hero Promotional Section - 35% width */}
                            <div className="w-[37%] bg-[#D8D8D8]/80 py-9 px-6   flex items-center justify-center">
                              <div className="relative overflow-hidden rounded-2xl w-full h-[230px] shadow-lg">
                                {/* Video Background */}
                                <video
                                  className="absolute inset-0 w-full h-full object-cover"
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                >
                                  <source src="https://res.cloudinary.com/dnqcj9kh3/video/upload/v1758985518/bg_azwp7s.mp4" type="video/mp4" />
                                </video>
                                
                                {/* Gradient overlay */}
                                {/* <div className="absolute inset-0 bg-black/40"></div> */}
                                
                                {/* Hero Content */}
                                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 text-white">
                                  <div className="space-y-4 max-w-sm">
                                   <h2 className="text-[32px] font-bold leading-tight tracking-wide bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] bg-clip-text text-transparent">
  {item.label === t.services 
    ? t.promoSection.services.title
    : t.promoSection.industries.title
  }
</h2>

                                    {/* <p className="text-xs text-gray-200 leading-relaxed">
                                      {item.label === t.services 
                                        ? t.promoSection.services.subtitle
                                        : t.promoSection.industries.subtitle
                                      }
                                    </p> */}
                           <Link href="/contact" className="relative group inline-block">
  <div className="relative px-8 py-3 rounded-md overflow-hidden border border-transparent">
    
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#B54CBE] via-[#854CBE] to-[#065FE5] transition-transform duration-500 transform group-hover:scale-110 origin-center"></div>

    {/* Button text */}
    <button className="relative z-10 text-white font-semibold transition-colors duration-300">
      See All Projects →
    </button>

    {/* Border appears on hover */}
    <div className="absolute inset-0 rounded-md border border-[#B54CBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
</Link>


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right */}
            <div className="hidden  lg:flex items-center space-x-4">
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
            <div className="lg:hidden flex items-center space-x-2">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      {isOpen && (
        <div
          className={`fixed top-0 h-screen w-80 bg-black text-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isRTL
              ? 'left-0 translate-x-0'
              : 'right-0 translate-x-0'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
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