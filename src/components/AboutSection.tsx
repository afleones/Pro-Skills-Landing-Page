'use client';

import { Award, Users, Trophy, MapPin, Clock, Star, Shield, Target, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const AboutSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Estudiantes", description: "Formados con excelencia", color: "bg-blue-500" },
    { icon: Award, number: "10", label: "Años", description: "De experiencia comprobada", color: "bg-green-500" },
    { icon: Trophy, number: "15+", label: "Títulos", description: "En competencias regionales", color: "bg-purple-500" },
    { icon: MapPin, number: "3", label: "Sedes", description: "Estratégicamente ubicadas", color: "bg-red-500" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Entidad Certificada",
      description: "Personería jurídica y certificaciones FIBA para tu tranquilidad"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "7 días a la semana, desde las 6:00 AM hasta las 9:00 PM"
    },
    {
      icon: Star,
      title: "Entrenadores de Élite",
      description: "Profesionales con experiencia internacional y certificados"
    },
    {
      icon: Target,
      title: "Metodología Probada",
      description: "Sistema de entrenamiento desarrollado por expertos"
    },
    {
      icon: Heart,
      title: "Formación Integral",
      description: "Desarrollo deportivo, personal y académico de nuestros atletas"
    },
    {
      icon: Users,
      title: "Grupos Reducidos",
      description: "Atención personalizada con máximo 20 estudiantes por grupo"
    }
  ];

  const achievements = [
    "🏆 Academia líder en Santander",
    "🥇 15+ títulos regionales conquistados",
    "⭐ 95% de satisfacción de padres de familia",
    "🎯 Metodología probada y certificada por FIBA",
    "👥 6 entrenadores especializados y certificados",
    "🏟️ Instalaciones de primera categoría en 3 sedes",
    "🌟 Más de 500 estudiantes formados exitosamente",
    "📚 Programas académicos complementarios",
    "🤝 Alianzas con clubes profesionales",
    "🏅 Participación en torneos nacionales e internacionales"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="academia" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Sobre Nosotros
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            La <span className="text-yellow-500">Academia de Básquet</span> Líder en Santander
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pro Skills Basketball es más que una academia de básquet. Somos una institución comprometida 
            con la formación integral de jóvenes talentos, combinando excelencia deportiva con valores 
            humanos sólidos. Con más de 10 años de experiencia, hemos consolidado nuestra posición como 
            la academia líder en Santander.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Institutional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Nuestra Historia y Compromiso
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Fundada en 2014, Pro Skills Basketball nació con la visión de crear un espacio donde 
                los jóvenes pudieran desarrollar no solo sus habilidades basketbolísticas, sino también 
                su carácter, disciplina y valores.
              </p>
              <p>
                Contamos con <strong>personería jurídica</strong> (NIT: 901.234.567-8) y todas las 
                certificaciones necesarias para operar como institución educativa deportiva. Nuestros 
                entrenadores poseen certificaciones FIBA y experiencia en ligas profesionales.
              </p>
              <p>
                Operamos en <strong>3 sedes estratégicamente ubicadas</strong> en Bucaramanga: Centro 
                (Cabecera del Llano), Norte (Morrorico) y Sur (La Flora), ofreciendo horarios flexibles 
                7 días a la semana.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Información Institucional:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-yellow-500" />
                  <span>NIT: 901.234.567-8</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span>Lun-Dom: 6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span>3 Sedes en Bucaramanga</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Certificación FIBA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1574628172261-84f3ee5aa0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Entrenamiento Pro Skills Basketball"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Nuestros <span className="text-yellow-500">Logros y Reconocimientos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <span className="text-sm text-gray-700">{achievement}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-yellow-800">Nuestra Misión</h3>
              <p className="text-yellow-700 leading-relaxed">
                Formar integralmente a jóvenes atletas a través del básquet, desarrollando no solo 
                sus habilidades deportivas sino también sus valores, disciplina y carácter para la vida.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-blue-800">Nuestra Visión</h3>
              <p className="text-blue-700 leading-relaxed">
                Ser reconocidos como la academia de básquet líder en Colombia, formando campeones 
                deportivos y ciudadanos ejemplares que contribuyan positivamente a la sociedad.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            ¿Listo para ser parte de la familia <span className="text-yellow-500">Pro Skills</span>?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3"
              onClick={() => scrollToSection('#contacto')}
            >
              Solicitar Clase Gratuita
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3"
              onClick={() => scrollToSection('#sedes')}
            >
              Conocer Nuestras Sedes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;