'use client';

import { Target, Eye, BookOpen, Calendar, Award, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const MissionVisionSection = () => {
  const timeline = [
    {
      year: "2014",
      title: "Fundación de Pro Skills Basketball",
      description: "Roberto Vásquez funda la academia con la visión de formar jugadores de élite en Santander.",
      icon: "🏀",
      achievement: "Primeros 25 estudiantes"
    },
    {
      year: "2016",
      title: "Expansión a Segunda Sede",
      description: "Apertura de la Sede Centro para atender la creciente demanda de formación deportiva.",
      icon: "🏢",
      achievement: "150 estudiantes activos"
    },
    {
      year: "2018",
      title: "Primer Título Regional",
      description: "Nuestro equipo Sub-14 conquista el primer campeonato regional de la academia.",
      icon: "🏆",
      achievement: "Campeones Regional Sub-14"
    },
    {
      year: "2020",
      title: "Adaptación Digital",
      description: "Durante la pandemia, implementamos entrenamientos virtuales y metodologías innovadoras.",
      icon: "💻",
      achievement: "Programa virtual exitoso"
    },
    {
      year: "2021",
      title: "Reconocimiento Nacional",
      description: "La Federación Colombiana de Baloncesto reconoce nuestra metodología de formación.",
      icon: "🎖️",
      achievement: "Certificación Nacional"
    },
    {
      year: "2022",
      title: "Tercera Sede y Expansión",
      description: "Apertura de la Sede Sur y consolidación como la academia líder en Santander.",
      icon: "🌟",
      achievement: "500+ estudiantes"
    },
    {
      year: "2023",
      title: "Décimo Aniversario",
      description: "Celebramos 10 años de excelencia formando campeones y líderes.",
      icon: "🎉",
      achievement: "Década de excelencia"
    },
    {
      year: "2024",
      title: "Proyección Internacional",
      description: "Inicio de intercambios y alianzas con academias internacionales.",
      icon: "🌍",
      achievement: "Visión global"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Excelencia",
      description: "Buscamos la perfección en cada entrenamiento, cada jugada y cada momento de formación.",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Creemos en el poder del trabajo colectivo para alcanzar objetivos extraordinarios.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Disciplina",
      description: "La constancia y el esfuerzo diario son la base del éxito deportivo y personal.",
      color: "bg-green-500"
    },
    {
      icon: BookOpen,
      title: "Formación Integral",
      description: "Desarrollamos no solo atletas excepcionales, sino personas íntegras y líderes.",
      color: "bg-purple-500"
    }
  ];

  const achievements = [
    {
      number: "10+",
      label: "Años de Historia",
      description: "Una década formando campeones"
    },
    {
      number: "500+",
      label: "Vidas Transformadas",
      description: "Estudiantes que han crecido con nosotros"
    },
    {
      number: "15+",
      label: "Títulos Conquistados",
      description: "Campeonatos en diferentes categorías"
    },
    {
      number: "3",
      label: "Sedes en Bucaramanga",
      description: "Cobertura completa de la ciudad"
    }
  ];

  return (
    <section id="mision-vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Nuestra Identidad
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Misión, Visión e <span className="text-yellow-500">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce los principios que nos guían, nuestros sueños para el futuro 
            y la historia que nos ha llevado a ser líderes en formación deportiva.
          </p>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl mb-4 text-yellow-800">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Formar jugadores de baloncesto con excelencia técnica, disciplina y valores sólidos, 
                proporcionando las herramientas necesarias para su desarrollo deportivo y personal 
                en un ambiente de respeto, trabajo en equipo y crecimiento continuo.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-blue-800">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como la academia de baloncesto líder en Colombia, formando talentos 
                que destaquen a nivel nacional e internacional, contribuyendo al crecimiento del 
                deporte en nuestra región y siendo referente de excelencia educativa.
              </p>
            </CardContent>
          </Card>

          {/* Philosophy */}
          <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-green-800">Nuestra Filosofía</h3>
              <p className="text-gray-700 leading-relaxed">
                Creemos que el baloncesto es más que un deporte: es una herramienta de transformación 
                personal y social. Cada estudiante es único y merece una formación integral que 
                desarrolle su potencial máximo dentro y fuera de la cancha.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12">
            Nuestros <span className="text-yellow-500">Valores Fundamentales</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12">
            Nuestra <span className="text-yellow-500">Historia</span>
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-yellow-300"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <Card className={`w-full md:w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} hover:shadow-lg transition-shadow duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{event.icon}</span>
                        <Badge className="bg-yellow-500 text-black">{event.year}</Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-xs text-yellow-600 font-medium">{event.achievement}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Historical Achievements */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8">
          <h3 className="text-2xl text-center mb-8">
            Una Década de <span className="text-yellow-600">Logros</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-yellow-600 mb-2">{achievement.number}</div>
                <div className="font-medium mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;