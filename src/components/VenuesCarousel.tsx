import { useState } from 'react';
import { MapPin, Phone, Clock, Bus, Wifi, Car as Parking, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';
import { ImageWithFallback } from '@components/figma/ImageWithFallback';

const VenuesCarousel = () => {
  const [selectedVenue, setSelectedVenue] = useState(0);

  const venues = [
    {
      id: 1,
      name: "Sede Centro - Principal",
      address: "Calle 56 #23-45, Cabecera del Llano",
      neighborhood: "Cabecera del Llano",
      phone: "+57 317 123 4567",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nuestra sede principal con las mejores instalaciones y tecnología de punta para el entrenamiento profesional.",
      features: [
        "Cancha profesional FIBA",
        "Graderías para 200 personas",
        "Vestidores completos",
        "Enfermería equipada",
        "Tienda deportiva",
        "Cafetería",
        "WiFi gratuito",
        "Parqueadero privado"
      ],
      amenities: [
        { icon: Wifi, label: "WiFi Gratuito" },
        { icon: Parking, label: "Parqueadero" },
        { icon: Users, label: "Vestidores" },
        { icon: Star, label: "Cancha FIBA" }
      ],
      schedule: {
        weekdays: "6:00 AM - 9:00 PM",
        saturday: "7:00 AM - 6:00 PM",
        sunday: "8:00 AM - 12:00 PM"
      },
      transport: [
        "Ruta 5A, 12B, 18C",
        "Metro: Estación Cabecera (5 min caminando)",
        "Fácil acceso desde la carrera 27"
      ],
      capacity: 200,
      courtSize: "28m x 15m",
      established: "2014",
      rating: 5
    },
    {
      id: 2,
      name: "Sede Norte - Morrorico",
      address: "Carrera 15 #87-23, Morrorico",
      neighborhood: "Morrorico",
      phone: "+57 317 123 4568",
      image: "https://images.unsplash.com/photo-1574628172261-84f3ee5aa0a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sede moderna en la zona norte, ideal para familias del sector con excelente accesibilidad y ambiente familiar.",
      features: [
        "Cancha semiprofesional",
        "Graderías para 120 personas",
        "Vestidores familiares",
        "Zona de hidratación",
        "Área de espera padres",
        "Zona de juegos infantil",
        "WiFi gratuito",
        "Parqueadero amplio"
      ],
      amenities: [
        { icon: Wifi, label: "WiFi Gratuito" },
        { icon: Parking, label: "Parqueadero Amplio" },
        { icon: Users, label: "Zona Familiar" },
        { icon: Star, label: "Área Infantil" }
      ],
      schedule: {
        weekdays: "6:30 AM - 8:30 PM",
        saturday: "7:00 AM - 6:00 PM",
        sunday: "8:00 AM - 12:00 PM"
      },
      transport: [
        "Ruta 8A, 15B, 22C",
        "Cerca al centro comercial Morrorico",
        "Acceso directo desde autopista"
      ],
      capacity: 120,
      courtSize: "26m x 14m",
      established: "2016",
      rating: 4
    },
    {
      id: 3,
      name: "Sede Sur - La Flora",
      address: "Calle 12 #34-67, La Flora",
      neighborhood: "La Flora",
      phone: "+57 317 123 4569",
      image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Nuestra sede más nueva en el sur de la ciudad, diseñada con tecnología moderna y espacios abiertos.",
      features: [
        "Cancha con piso deportivo premium",
        "Graderías para 150 personas",
        "Vestidores premium",
        "Sala de fisioterapia",
        "Gimnasio complementario",
        "Terraza al aire libre",
        "WiFi alta velocidad",
        "Parqueadero techado"
      ],
      amenities: [
        { icon: Wifi, label: "WiFi Alta Velocidad" },
        { icon: Parking, label: "Parqueadero Techado" },
        { icon: Users, label: "Gimnasio" },
        { icon: Star, label: "Fisioterapia" }
      ],
      schedule: {
        weekdays: "6:00 AM - 9:00 PM",
        saturday: "7:00 AM - 6:00 PM",
        sunday: "8:00 AM - 12:00 PM"
      },
      transport: [
        "Ruta 3A, 11B, 19C",
        "Terminal de buses sur (10 min)",
        "Vía principal La Flora"
      ],
      capacity: 150,
      courtSize: "27m x 15m",
      established: "2022",
      rating: 5
    }
  ];

  const currentVenue = venues[selectedVenue];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sedes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Nuestras Instalaciones
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            3 Sedes en <span className="text-yellow-500">Bucaramanga</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instalaciones modernas y completamente equipadas, estratégicamente ubicadas 
            para tu comodidad y la mejor experiencia deportiva.
          </p>
        </div>

        {/* Venue Selector */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
            {venues.map((venue, index) => (
              <button
                key={venue.id}
                onClick={() => setSelectedVenue(index)}
                className={`p-4 rounded-lg text-left transition-all duration-200 ${
                  selectedVenue === index
                    ? 'bg-yellow-500 text-black shadow-lg'
                    : 'bg-white hover:bg-yellow-50 border border-gray-200'
                }`}
              >
                <h3 className="font-semibold mb-1">{venue.name}</h3>
                <p className="text-sm opacity-80">{venue.neighborhood}</p>
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(venue.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Venue Display */}
        <Card className="overflow-hidden shadow-2xl mb-12">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              <ImageWithFallback
                src={currentVenue.image}
                alt={currentVenue.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{currentVenue.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{currentVenue.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Phone className="h-4 w-4" />
                    <span>{currentVenue.phone}</span>
                  </div>
                </div>
                <Badge className="bg-yellow-500 text-black">
                  Desde {currentVenue.established}
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">{currentVenue.description}</p>

              {/* Amenities */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {currentVenue.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <amenity.icon className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{amenity.label}</span>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-yellow-600">{currentVenue.capacity}</div>
                  <div className="text-xs text-gray-600">Capacidad</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <div className="font-bold text-yellow-600">{currentVenue.courtSize}</div>
                  <div className="text-xs text-gray-600">Cancha</div>
                </div>
              </div>

              <Button 
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => scrollToSection('#contacto')}
              >
                Visitar esta Sede
              </Button>
            </div>
          </div>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="features" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="features">Características</TabsTrigger>
            <TabsTrigger value="schedule">Horarios</TabsTrigger>
            <TabsTrigger value="transport">Cómo Llegar</TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle>Instalaciones y Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentVenue.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Lunes a Viernes:</span>
                    <span className="text-yellow-600">{currentVenue.schedule.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Sábados:</span>
                    <span className="text-yellow-600">{currentVenue.schedule.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Domingos:</span>
                    <span className="text-yellow-600">{currentVenue.schedule.sunday}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transport">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5" />
                  Opciones de Transporte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentVenue.transport.map((option, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span className="text-sm">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Tip:</strong> Todas nuestras sedes cuentan con parqueadero gratuito 
                    y fácil acceso en transporte público.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default VenuesCarousel;