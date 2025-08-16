import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Users, Star, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { ImageWithFallback } from '@components/figma/ImageWithFallback';

const CoachesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const coaches = [
    {
      name: "Anthony Olalla",
      position: "Director Técnico y Fundador",
      experience: "15 años",
      specialization: "Formación integral y desarrollo juvenil",
      achievements: [
        "Ex-jugador profesional Liga Colombiana",
        "Licenciado en Educación Física",
        "Curso FIBA Américas Nivel 2",
        "Más de 300 jugadores formados",
        "Campeón Nacional Universitario",
        "Entrenador Selección Santander Sub-18"
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      philosophy: "El baloncesto es una herramienta de transformación personal que va más allá del deporte. Cada jugador tiene un potencial único que debemos descubrir y desarrollar.",
      categories: ["Todas las categorías", "Formación técnica", "Liderazgo"],
      rating: 5,
      phone: "+57 317 123 4561",
      email: "anthony@proskillscolombia.com",
      socialMedia: {
        instagram: "@anthony_olalla_coach",
        linkedin: "anthony-olalla-basketball"
      }
    },
    {
      name: "Leonardo Olalla",
      position: "Entrenador Principal",
      experience: "12 años",
      specialization: "Técnica individual y preparación física",
      achievements: [
        "Especialista en desarrollo técnico",
        "Certificación FIBA Nivel 1 y 2",
        "Campeón Regional Sub-16 (2022-2023)",
        "Formador de 5 jugadores profesionales",
        "Preparador físico certificado NSCA",
        "Ex-capitán Selección Santander"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      philosophy: "La técnica perfecta es la base de cualquier gran jugador, pero la mentalidad ganadora es lo que los hace campeones. Trabajo incansablemente en ambos aspectos.",
      categories: ["Sub-14", "Sub-16", "Sub-18", "Preparación física"],
      rating: 5,
      phone: "+57 317 123 4562",
      email: "leonardo@proskillscolombia.com",
      socialMedia: {
        instagram: "@leo_olalla_basketball",
        linkedin: "leonardo-olalla-coach"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === coaches.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? coaches.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="entrenadores" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Entrenadores <span className="text-yellow-500">Pro Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los fundadores y directores técnicos de Pro Skills Basketball.
            Con ellos vivirás la pasión del básquet y la formación de campeones.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Coach Card */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {coaches.map((coach, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image Section */}
                      <div className="relative">
                        <ImageWithFallback
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-500 text-black">
                            {coach.experience} experiencia
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded">
                            {[...Array(coach.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
                          <p className="text-yellow-600 font-semibold text-lg mb-2">{coach.position}</p>
                          <p className="text-gray-600 mb-4">{coach.specialization}</p>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {coach.categories.map((category, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>

                        {/* Philosophy */}
                        <div className="mb-6">
                          <blockquote className="italic text-gray-600 border-l-4 border-yellow-500 pl-4 leading-relaxed">
                            "{coach.philosophy}"
                          </blockquote>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Award className="h-4 w-4 text-yellow-500" />
                            Logros Destacados
                          </h4>
                          <ul className="space-y-2">
                            {coach.achievements.slice(0, 4).map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="border-t pt-4 space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail className="h-4 w-4 text-yellow-500" />
                            <span>{coach.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="h-4 w-4 text-yellow-500" />
                            <span>{coach.phone}</span>
                          </div>
                          <div className="flex gap-3 pt-2">
                            <Badge variant="outline" className="text-xs">
                              📱 {coach.socialMedia.instagram}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              💼 {coach.socialMedia.linkedin}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Entrenador anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
            aria-label="Siguiente entrenador"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {coaches.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                aria-label={`Ver entrenador ${index + 1}`}
              />
            ))}
          </div>

          {/* Coach Indicator */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              Entrenador {currentIndex + 1} de {coaches.length} - {coaches[currentIndex].name}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">27+</div>
              <div className="text-sm text-gray-600">Años de experiencia combinada</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">8+</div>
              <div className="text-sm text-gray-600">Certificaciones FIBA</div>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-black" />
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Jugadores formados</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3"
            onClick={() => scrollToSection('#contacto')}
          >
            Conoce a tus Futuros Entrenadores
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoachesCarousel;