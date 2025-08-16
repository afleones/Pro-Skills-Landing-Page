'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Play, CreditCard } from 'lucide-react';
import { Button } from '@ui/button';
import { Badge } from '@ui/badge';
import { ImageWithFallback } from '@components/figma/ImageWithFallback';
import logoImage from '/assets/images/academy/logo.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574628172261-84f3ee5aa0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    try {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  const handlePayment = () => {
    scrollToSection('#precios');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Pro Skills Basketball ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fadeInUp">
            <img
              src={logoImage}
              alt="Pro Skills Basketball"
              className="h-20 md:h-24 w-auto mx-auto mb-4 animate-float"
            />
          </div>

          {/* Badge */}
          <div className="mb-6 animate-fadeInUp">
            <Badge className="bg-yellow-500 text-black px-6 py-3 text-lg">
              🏆 Academia Líder en Santander
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Formamos <span className="text-yellow-400">Campeones</span>
            <br />
            de Vida y Deporte
          </h1>

          {/* Subtitle */}
          <div className="mb-12 animate-fadeInUp">
            <p className="text-xl md:text-2xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Más de 10 años desarrollando talento basketbolístico con valores, 
              disciplina y excelencia en Bucaramanga.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp">
            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-xl"
              onClick={() => scrollToSection('#contacto')}
            >
              🆓 Clase Gratis
            </Button>
            
            <Button 
              size="lg"
              variant="outline" 
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-xl"
              onClick={() => scrollToSection('#academia')}
            >
              <Play className="h-5 w-5 mr-2" />
              Conocer Más
            </Button>
            
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-200 shadow-xl"
              onClick={handlePayment}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pagar Ahora
            </Button>
          </div>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('#academia')}
          className="text-white hover:text-yellow-400 transition-colors animate-bounce group"
          aria-label="Desplazarse hacia abajo"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium opacity-80 group-hover:opacity-100">
              Desliza hacia abajo
            </span>
            <ChevronDown className="h-8 w-8" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;