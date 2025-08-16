import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import {  Users,  Clock,  Star,  Trophy,  Target,  Heart, Zap, Award, Calendar, UserCheck, Crown, Flame } from 'lucide-react';
import { ImageWithFallback } from '@components/figma/ImageWithFallback';

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'mini-basquet',
      title: 'Mini Básquet',
      subtitle: 'Primeros pasos en el baloncesto',
      ageRange: '6 - 8 años',
      icon: Heart,
      color: 'bg-pink-500',
      gradient: 'from-pink-400 to-pink-600',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Introducción al baloncesto a través del juego y la diversión. Enfoque en habilidades motoras básicas, coordinación y trabajo en equipo.',
      features: [
        'Desarrollo de habilidades motoras básicas',
        'Coordinación y equilibrio',
        'Valores y trabajo en equipo',
        'Juegos educativos y divertidos',
        'Balones adaptados al tamaño'
      ],
      schedule: [
        'Martes y Jueves: 4:00 PM - 5:00 PM',
        'Sábados: 9:00 AM - 10:00 AM'
      ],
      price: '$80.000',
      objectives: [
        'Familiarización con el balón',
        'Desarrollo de la coordinación',
        'Fomento del compañerismo',
        'Establecimiento de rutinas deportivas'
      ]
    },
    {
      id: 'infantil',
      title: 'Categoría Infantil',
      subtitle: 'Fundamentos del baloncesto',
      ageRange: '9 - 12 años',
      icon: Users,
      color: 'bg-blue-500',
      gradient: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1574628172261-84f3ee5aa0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Desarrollo de fundamentos técnicos básicos y reglas del juego. Énfasis en la técnica individual y conceptos tácticos simples.',
      features: [
        'Fundamentos técnicos (drible, pase, tiro)',
        'Reglas básicas del baloncesto',
        'Conceptos tácticos elementales',
        'Desarrollo físico apropiado',
        'Competencias internas'
      ],
      schedule: [
        'Lunes y Miércoles: 4:30 PM - 5:30 PM',
        'Viernes: 4:30 PM - 5:30 PM',
        'Sábados: 10:00 AM - 11:30 AM'
      ],
      price: '$95.000',
      objectives: [
        'Dominio de fundamentos básicos',
        'Comprensión de reglas del juego',
        'Desarrollo de la disciplina',
        'Preparación para competencias'
      ]
    },
    {
      id: 'juvenil',
      title: 'Categoría Juvenil',
      subtitle: 'Perfeccionamiento técnico-táctico',
      ageRange: '13 - 16 años',
      icon: Target,
      color: 'bg-green-500',
      gradient: 'from-green-400 to-green-600',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Perfeccionamiento de técnicas avanzadas y estrategias de juego. Participación en competencias locales y regionales.',
      features: [
        'Técnicas avanzadas de juego',
        'Estrategias y sistemas de juego',
        'Preparación física especializada',
        'Competencias oficiales',
        'Desarrollo de liderazgo'
      ],
      schedule: [
        'Lunes, Miércoles y Viernes: 5:30 PM - 7:00 PM',
        'Sábados: 2:00 PM - 4:00 PM'
      ],
      price: '$120.000',
      objectives: [
        'Perfección técnica individual',
        'Comprensión táctica avanzada',
        'Competitividad deportiva',
        'Formación de carácter'
      ]
    },
    {
      id: 'femenino',
      title: 'Básquet Femenino',
      subtitle: 'Empoderamiento a través del deporte',
      ageRange: '10 - 18 años',
      icon: Crown,
      color: 'bg-purple-500',
      gradient: 'from-purple-400 to-purple-600',
      image: 'https://images.unsplash.com/photo-1594736797933-d0c6c6ad8d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Programa especializado para el desarrollo integral de las jugadoras, enfocado en técnica, táctica y empoderamiento femenino.',
      features: [
        'Metodología adaptada al baloncesto femenino',
        'Desarrollo de confianza y liderazgo',
        'Técnicas especializadas',
        'Competencias femeninas',
        'Mentoring deportivo'
      ],
      schedule: [
        'Martes y Jueves: 6:00 PM - 7:30 PM',
        'Sábados: 11:30 AM - 1:00 PM'
      ],
      price: '$110.000',
      objectives: [
        'Excelencia técnica femenina',
        'Empoderamiento personal',
        'Competitividad especializada',
        'Desarrollo integral'
      ]
    },
    {
      id: 'adultos',
      title: 'Básquet Adultos',
      subtitle: 'Mantente activo y competitivo',
      ageRange: '17+ años',
      icon: Award,
      color: 'bg-orange-500',
      gradient: 'from-orange-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Programa para adultos que buscan mantenerse activos, mejorar su condición física y disfrutar del baloncesto competitivo.',
      features: [
        'Acondicionamiento físico integral',
        'Técnicas de juego adaptadas',
        'Torneos internos',
        'Flexibilidad de horarios',
        'Ambiente competitivo y social'
      ],
      schedule: [
        'Lunes y Miércoles: 7:00 PM - 8:30 PM',
        'Viernes: 7:00 PM - 8:30 PM',
        'Domingos: 8:00 AM - 10:00 AM'
      ],
      price: '$100.000',
      objectives: [
        'Mantener condición física',
        'Perfeccionar técnicas',
        'Competencia saludable',
        'Networking deportivo'
      ]
    },
    {
      id: 'elite',
      title: 'Programa Élite',
      subtitle: 'Formación de atletas de alto rendimiento',
      ageRange: '14+ años',
      icon: Flame,
      color: 'bg-red-500',
      gradient: 'from-red-400 to-red-600',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Programa de alto rendimiento para atletas con proyección competitiva. Entrenamiento intensivo y especializado.',
      features: [
        'Entrenamiento de alto rendimiento',
        'Preparación física especializada',
        'Análisis biomecánico',
        'Competencias nacionales',
        'Seguimiento nutricional'
      ],
      schedule: [
        'Lunes a Viernes: 6:00 AM - 7:30 AM',
        'Lunes, Miércoles y Viernes: 7:30 PM - 9:00 PM',
        'Sábados: 4:00 PM - 6:00 PM'
      ],
      price: '$180.000',
      objectives: [
        'Desarrollo de talentos excepcionales',
        'Preparación para competencias de alto nivel',
        'Formación integral del atleta',
        'Proyección universitaria y profesional'
      ]
    },
    {
      id: 'personal',
      title: 'Entrenamiento Personal',
      subtitle: 'Atención personalizada uno a uno',
      ageRange: 'Todas las edades',
      icon: UserCheck,
      color: 'bg-yellow-500',
      gradient: 'from-yellow-400 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sesiones individuales personalizadas para desarrollo específico de habilidades y corrección técnica.',
      features: [
        'Atención 100% personalizada',
        'Plan de entrenamiento específico',
        'Corrección técnica detallada',
        'Horarios flexibles',
        'Progreso acelerado'
      ],
      schedule: [
        'Horarios flexibles',
        'Citas programadas',
        'Disponible todos los días'
      ],
      price: '$80.000/sesión',
      objectives: [
        'Mejora técnica específica',
        'Corrección de errores',
        'Desarrollo acelerado',
        'Atención individualizada'
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentCategory = categories[activeCategory];
  const IconComponent = currentCategory.icon;

  return (
    <section id="categorias" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black px-6 py-2 mb-4">
            <Trophy className="h-4 w-4 mr-2" />
            Nuestras Categorías
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Programas de <span className="text-yellow-500">Entrenamiento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros programas especializados diseñados para cada edad y nivel. 
            Desde los primeros pasos hasta el alto rendimiento.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${
                  activeCategory === index 
                    ? 'border-yellow-400 shadow-lg ring-2 ring-yellow-400/20' 
                    : 'border-gray-200 hover:border-yellow-300'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-12 h-12 ${category.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-gray-600">{category.subtitle}</p>
                  <Badge variant="outline" className="w-fit text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {category.ageRange}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Mensualidad</span>
                      <span className="font-semibold text-yellow-600">{category.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Category Details */}
        <Card className="bg-white shadow-xl border-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative">
              <ImageWithFallback
                src={currentCategory.image}
                alt={currentCategory.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${currentCategory.gradient} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{currentCategory.title}</h3>
                  <p className="text-lg opacity-90">{currentCategory.subtitle}</p>
                  <Badge className="bg-white/20 text-white mt-4 backdrop-blur-sm">
                    {currentCategory.ageRange}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Descripción del Programa
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                    Características
                  </h4>
                  <ul className="space-y-2">
                    {currentCategory.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="h-5 w-5 text-yellow-500 mr-2" />
                    Horarios
                  </h4>
                  <div className="space-y-1">
                    {currentCategory.schedule.map((time, index) => (
                      <p key={index} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-2">
                        {time}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-5 w-5 text-yellow-500 mr-2" />
                    Objetivos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentCategory.objectives.map((objective, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Trophy className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                        <span>{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Mensualidad</p>
                      <p className="text-2xl font-bold text-yellow-600">{currentCategory.price}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 px-3 py-1">
                      ✨ Primera clase GRATIS
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold flex-1"
                      onClick={() => scrollToSection('#contacto')}
                    >
                      <UserCheck className="h-4 w-4 mr-2" />
                      Inscribirse Ahora
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                      onClick={() => scrollToSection('#horarios')}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Ver Horarios
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-yellow-400 to-yellow-600 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                ¿No estás seguro qué categoría es la adecuada?
              </h3>
              <p className="text-black/80 mb-6 max-w-2xl mx-auto">
                Nuestros entrenadores te ayudarán a encontrar el programa perfecto según tu edad, 
                nivel y objetivos deportivos. ¡Agenda tu evaluación gratuita!
              </p>
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold"
                onClick={() => scrollToSection('#contacto')}
              >
                <UserCheck className="h-5 w-5 mr-2" />
                Evaluación Gratuita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;