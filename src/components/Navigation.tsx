'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '/assets/images/academy/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuItems = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'academia', label: 'Academia', href: '#academia' },
    { id: 'categorias', label: 'Categorías', href: '#categorias' },
    { id: 'horarios', label: 'Horarios', href: '#horarios' },
    { id: 'entrenadores', label: 'Entrenadores', href: '#entrenadores' },
    { id: 'sedes', label: 'Sedes', href: '#sedes' },
    { id: 'precios', label: 'Precios', href: '#precios' },
    { id: 'contacto', label: 'Contacto', href: '#contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsScrolled(scrollPosition > 50);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableDistance = documentHeight - windowHeight;
      const progress = Math.min((scrollPosition / scrollableDistance) * 100, 100);
      setScrollProgress(progress);

      // Detect active section with better precision
      const sections = menuItems.map(item => item.id);
      const offset = 100;
      
      let newActiveSection = 'inicio';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.pageYOffset;
          const elementBottom = elementTop + rect.height;
          const currentPosition = scrollPosition + offset;
          
          if (currentPosition >= elementTop && currentPosition < elementBottom) {
            newActiveSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(newActiveSection);
    };

    let timeoutId: number;
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (href: string, closeMenu = true) => {
    try {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80; // Altura del header fijo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active section immediately for better UX
        setActiveSection(targetId);
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
    
    if (closeMenu) {
      setIsOpen(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection('#contacto');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 lg:h-20 relative">
          
          {/* Desktop Menu - Centered with Logo */}
          <div className="hidden lg:flex items-center justify-center space-x-6">
            {/* Left menu items */}
            {menuItems.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 relative text-sm whitespace-nowrap ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-yellow-500 text-black font-semibold shadow-md'
                      : 'bg-yellow-500/90 text-black font-semibold shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-yellow-600'
                      : 'text-white hover:bg-white/10 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Logo - Center */}
            <div className="mx-4">
              <button 
                onClick={() => scrollToSection('#inicio')}
                className="flex items-center group"
              >
                <img
                  src={logoImage}
                  alt="Pro Skills Basketball"
                  className="h-10 lg:h-12 w-auto transition-transform group-hover:scale-105"
                />
              </button>
            </div>

            {/* Right menu items */}
            {menuItems.slice(4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 relative text-sm whitespace-nowrap ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-yellow-500 text-black font-semibold shadow-md'
                      : 'bg-yellow-500/90 text-black font-semibold shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-yellow-600'
                      : 'text-white hover:bg-white/10 hover:text-yellow-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Logo - Mobile */}
            <button 
              onClick={() => scrollToSection('#inicio')}
              className="flex items-center group"
            >
              <img
                src={logoImage}
                alt="Pro Skills Basketball"
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-yellow-500 text-black font-semibold shadow-md transform scale-105'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-yellow-600 hover:translate-x-2'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
              <button
                onClick={scrollToContact}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg font-semibold transition-all duration-300 mt-4 hover:scale-105 shadow-lg"
              >
                🆓 Clase Gratis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-300 shadow-sm ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} 
      style={{ 
        width: `${scrollProgress}%` 
      }} />
    </nav>
  );
};

export default Navigation;