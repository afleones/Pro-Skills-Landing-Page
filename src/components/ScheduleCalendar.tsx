import { useState } from 'react';
import { Clock, Users, MapPin, Calendar as CalendarIcon, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';

const ScheduleCalendar = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scheduleData = [
    // Lunes
    { day: 'Lun', time: '6:00', category: 'adultos', program: 'Básquet Adultos', coach: 'Roberto Vásquez', venue: 'Centro', spots: 8, maxSpots: 20, level: 'Intermedio' },
    { day: 'Lun', time: '16:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Norte', spots: 12, maxSpots: 15, level: 'Iniciación' },
    { day: 'Lun', time: '17:00', category: 'juvenil', program: 'Juvenil Sub-16', coach: 'Andrés Martínez', venue: 'Centro', spots: 5, maxSpots: 20, level: 'Avanzado' },
    { day: 'Lun', time: '18:30', category: 'femenino', program: 'Básquet Femenino', coach: 'Carolina Ruiz', venue: 'Sur', spots: 7, maxSpots: 18, level: 'Intermedio' },
    
    // Martes
    { day: 'Mar', time: '6:30', category: 'adultos', program: 'Básquet Adultos', coach: 'Miguel Torres', venue: 'Sur', spots: 15, maxSpots: 20, level: 'Principiante' },
    { day: 'Mar', time: '16:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Centro', spots: 10, maxSpots: 15, level: 'Iniciación' },
    { day: 'Mar', time: '17:00', category: 'juvenil', program: 'Juvenil Sub-14', coach: 'Javier Hernández', venue: 'Norte', spots: 8, maxSpots: 20, level: 'Intermedio' },
    { day: 'Mar', time: '19:00', category: 'juvenil', program: 'Juvenil Sub-18', coach: 'Roberto Vásquez', venue: 'Centro', spots: 3, maxSpots: 20, level: 'Avanzado' },
    
    // Miércoles
    { day: 'Mié', time: '6:00', category: 'adultos', program: 'Básquet Adultos', coach: 'Roberto Vásquez', venue: 'Centro', spots: 12, maxSpots: 20, level: 'Intermedio' },
    { day: 'Mié', time: '16:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Sur', spots: 6, maxSpots: 15, level: 'Iniciación' },
    { day: 'Mié', time: '17:00', category: 'juvenil', program: 'Juvenil Sub-16', coach: 'Andrés Martínez', venue: 'Centro', spots: 4, maxSpots: 20, level: 'Avanzado' },
    { day: 'Mié', time: '18:30', category: 'femenino', program: 'Básquet Femenino', coach: 'Carolina Ruiz', venue: 'Norte', spots: 9, maxSpots: 18, level: 'Intermedio' },
    
    // Jueves
    { day: 'Jue', time: '6:30', category: 'adultos', program: 'Básquet Adultos', coach: 'Miguel Torres', venue: 'Sur', spots: 11, maxSpots: 20, level: 'Principiante' },
    { day: 'Jue', time: '16:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Centro', spots: 8, maxSpots: 15, level: 'Iniciación' },
    { day: 'Jue', time: '17:00', category: 'juvenil', program: 'Juvenil Sub-14', coach: 'Javier Hernández', venue: 'Norte', spots: 6, maxSpots: 20, level: 'Intermedio' },
    { day: 'Jue', time: '19:00', category: 'juvenil', program: 'Juvenil Sub-18', coach: 'Roberto Vásquez', venue: 'Centro', spots: 2, maxSpots: 20, level: 'Avanzado' },
    
    // Viernes
    { day: 'Vie', time: '6:00', category: 'adultos', program: 'Básquet Adultos', coach: 'Roberto Vásquez', venue: 'Centro', spots: 14, maxSpots: 20, level: 'Intermedio' },
    { day: 'Vie', time: '16:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Norte', spots: 11, maxSpots: 15, level: 'Iniciación' },
    { day: 'Vie', time: '17:00', category: 'juvenil', program: 'Juvenil Sub-16', coach: 'Andrés Martínez', venue: 'Sur', spots: 7, maxSpots: 20, level: 'Avanzado' },
    { day: 'Vie', time: '18:30', category: 'femenino', program: 'Básquet Femenino', coach: 'Carolina Ruiz', venue: 'Centro', spots: 5, maxSpots: 18, level: 'Intermedio' },
    
    // Sábado
    { day: 'Sáb', time: '8:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Centro', spots: 9, maxSpots: 15, level: 'Iniciación' },
    { day: 'Sáb', time: '9:00', category: 'juvenil', program: 'Juvenil Sub-14', coach: 'Javier Hernández', venue: 'Centro', spots: 12, maxSpots: 20, level: 'Intermedio' },
    { day: 'Sáb', time: '10:30', category: 'juvenil', program: 'Juvenil Sub-18', coach: 'Roberto Vásquez', venue: 'Centro', spots: 6, maxSpots: 20, level: 'Avanzado' },
    { day: 'Sáb', time: '14:00', category: 'femenino', program: 'Básquet Femenino', coach: 'Carolina Ruiz', venue: 'Norte', spots: 10, maxSpots: 18, level: 'Intermedio' },
    
    // Domingo
    { day: 'Dom', time: '8:00', category: 'mini', program: 'Mini Básquet', coach: 'Sofía Mendoza', venue: 'Sur', spots: 5, maxSpots: 15, level: 'Iniciación' },
    { day: 'Dom', time: '9:30', category: 'juvenil', program: 'Juvenil Sub-16', coach: 'Andrés Martínez', venue: 'Norte', spots: 8, maxSpots: 20, level: 'Intermedio' },
    { day: 'Dom', time: '11:00', category: 'femenino', program: 'Básquet Femenino', coach: 'Carolina Ruiz', venue: 'Centro', spots: 12, maxSpots: 18, level: 'Intermedio' }
  ];

  const categories = [
    { id: 'all', name: 'Todos', color: 'bg-gray-500' },
    { id: 'mini', name: 'Mini Básquet', color: 'bg-green-500' },
    { id: 'juvenil', name: 'Juvenil', color: 'bg-blue-500' },
    { id: 'femenino', name: 'Femenino', color: 'bg-pink-500' },
    { id: 'adultos', name: 'Adultos', color: 'bg-purple-500' }
  ];

  const timeSlots = Array.from({length: 24}, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });
  
  const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const venues = ['Centro', 'Norte', 'Sur'];
  const coaches = ['Roberto Vásquez', 'Andrés Martínez', 'Carolina Ruiz', 'Miguel Torres', 'Javier Hernández', 'Sofía Mendoza'];

  const filteredData = selectedCategory === 'all' 
    ? scheduleData 
    : scheduleData.filter(item => item.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  const getAvailabilityColor = (spots: number, maxSpots: number) => {
    const percentage = (spots / maxSpots) * 100;
    if (percentage <= 25) return 'text-red-500';
    if (percentage <= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSessionForTimeAndDay = (time: string, day: string) => {
    const timeAsNumber = parseInt(time.split(':')[0]);
    return filteredData.find(session => {
      const sessionTime = parseInt(session.time.split(':')[0]);
      return session.day === day && Math.abs(sessionTime - timeAsNumber) < 2;
    });
  };

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Horarios de Entrenamiento
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Encuentra tu <span className="text-yellow-500">Momento Ideal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Horarios flexibles diseñados para adaptarse a tu estilo de vida. 
            Entrenamientos de lunes a domingo en nuestras 3 sedes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`${
                selectedCategory === category.id 
                  ? 'bg-yellow-500 text-black hover:bg-yellow-600' 
                  : 'hover:bg-yellow-50'
              }`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        <Tabs defaultValue="table" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="table">Tabla Horarios</TabsTrigger>
            <TabsTrigger value="coaches">Por Entrenador</TabsTrigger>
            <TabsTrigger value="venues">Por Sede</TabsTrigger>
          </TabsList>

          {/* Main Schedule Table */}
          <TabsContent value="table">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Horarios Semanales (Lun - Dom)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-96 overflow-auto border-t">
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th className="text-left p-2 font-medium text-xs border-r w-16">Hora</th>
                        {days.map(day => (
                          <th key={day} className="text-center p-2 font-medium text-xs min-w-[100px] border-r">
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {timeSlots.map(time => (
                        <tr key={time} className="border-t h-12">
                          <td className="p-2 bg-gray-50 font-medium text-xs whitespace-nowrap border-r text-center">
                            {time}
                          </td>
                          {days.map((day, dayIndex) => {
                            const session = getSessionForTimeAndDay(time, day);
                            return (
                              <td key={dayIndex} className="p-1 text-center align-middle border-r">
                                {session ? (
                                  <div className="bg-white border border-gray-300 rounded p-1 hover:shadow-sm transition-shadow">
                                    <div className="flex items-center justify-center mb-1">
                                      <div className={`w-1.5 h-1.5 rounded-full ${getCategoryColor(session.category)} mr-1`}></div>
                                      <span className="text-[10px] font-medium truncate">{session.program}</span>
                                    </div>
                                    <div className="text-[9px] text-gray-600 mb-1">{session.coach}</div>
                                    <div className="text-[9px] text-gray-500 mb-1">{session.venue}</div>
                                    <div className={`text-[9px] font-medium ${getAvailabilityColor(session.spots, session.maxSpots)}`}>
                                      {session.spots}/{session.maxSpots}
                                    </div>
                                    <Button 
                                      size="sm" 
                                      className="bg-yellow-500 hover:bg-yellow-600 text-black text-[8px] px-1 py-0 h-4 mt-1 w-full"
                                      onClick={() => scrollToSection('#contacto')}
                                    >
                                      Reservar
                                    </Button>
                                  </div>
                                ) : (
                                  <div className="text-gray-200 text-xs">-</div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* By Coach */}
          <TabsContent value="coaches">
            <div className="h-96 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coaches.map(coach => {
                  const coachSessions = filteredData.filter(session => session.coach === coach);
                  if (coachSessions.length === 0) return null;

                  return (
                    <Card key={coach} className="h-fit">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <Users className="h-3 w-3 text-yellow-500" />
                          {coach}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2 max-h-40 overflow-auto">
                          {coachSessions.map((session, index) => (
                            <div key={index} className="bg-gray-50 rounded p-2">
                              <div className="flex justify-between items-start mb-1">
                                <div>
                                  <div className="font-medium text-xs">{session.day}</div>
                                  <div className="text-[10px] text-gray-600">{session.time}</div>
                                </div>
                                <Badge className={`text-[8px] ${getCategoryColor(session.category)} text-white px-1 py-0`}>
                                  {session.venue}
                                </Badge>
                              </div>
                              <div className="text-xs mb-1">{session.program}</div>
                              <div className="flex justify-between items-center">
                                <span className={`text-[10px] ${getAvailabilityColor(session.spots, session.maxSpots)}`}>
                                  {session.spots}/{session.maxSpots}
                                </span>
                                <Button 
                                  size="sm" 
                                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-[8px] px-1 py-0 h-4"
                                  onClick={() => scrollToSection('#contacto')}
                                >
                                  Reservar
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* By Venue */}
          <TabsContent value="venues">
            <div className="h-96 overflow-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {venues.map(venue => {
                  const venueSessions = filteredData.filter(session => session.venue === venue);
                  if (venueSessions.length === 0) return null;

                  return (
                    <Card key={venue} className="h-fit">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-yellow-500" />
                          Sede {venue}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2 max-h-60 overflow-auto">
                          {venueSessions.map((session, index) => (
                            <div key={index} className="bg-gray-50 rounded p-2">
                              <div className="flex justify-between items-start mb-1">
                                <div>
                                  <div className="font-medium text-xs">{session.day}</div>
                                  <div className="text-[10px] text-gray-600">{session.time}</div>
                                </div>
                                <div className={`w-2 h-2 rounded-full ${getCategoryColor(session.category)}`}></div>
                              </div>
                              <div className="text-xs mb-1">{session.program}</div>
                              <div className="text-[10px] text-gray-600 mb-1">Coach: {session.coach}</div>
                              <div className="flex justify-between items-center">
                                <span className={`text-[10px] ${getAvailabilityColor(session.spots, session.maxSpots)}`}>
                                  {session.spots}/{session.maxSpots}
                                </span>
                                <Button 
                                  size="sm" 
                                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-[8px] px-1 py-0 h-4"
                                  onClick={() => scrollToSection('#contacto')}
                                >
                                  Reservar
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-0">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-green-800">Horarios Flexibles</h4>
              <p className="text-green-700 text-sm">
                Desde las 6:00 AM hasta las 8:00 PM, 7 días a la semana
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-0">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-blue-800">Grupos Reducidos</h4>
              <p className="text-blue-700 text-sm">
                Máximo 20 estudiantes por sesión para atención personalizada
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-0">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-purple-800">3 Sedes Disponibles</h4>
              <p className="text-purple-700 text-sm">
                Elige la sede más conveniente para ti en Bucaramanga
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCalendar;