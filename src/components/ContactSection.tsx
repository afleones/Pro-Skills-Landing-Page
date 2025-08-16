import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    venue: '',
    program: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono Principal',
      value: '+57 317 123 4567',
      description: 'Lun - Vie: 6:00 AM - 9:00 PM',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@proskillscolombia.com',
      description: 'Respuesta en 24 horas',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: '3 Sedes en Bucaramanga',
      description: 'Centro, Norte y Sur',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Horarios',
      value: 'Lun - Sáb',
      description: '6:00 AM - 9:00 PM',
      color: 'bg-yellow-500'
    }
  ];

  type Venue = {
    id: string;
    name: string;
  };
  
  const venues: Venue[] = [
    { id: 'centro', name: 'Sede Centro - Cabecera del Llano' },
    { id: 'norte', name: 'Sede Norte - Morrorico' },
    { id: 'sur', name: 'Sede Sur - La Flora' }
  ];

  const programs = [
    { id: 'mini', name: 'Mini Básquet (6-8 años)' },
    { id: 'juvenil', name: 'Básquet Juvenil (9-16 años)' },
    { id: 'femenino', name: 'Básquet Femenino' },
    { id: 'adultos', name: 'Básquet Adultos (+17 años)' },
    { id: 'personal', name: 'Entrenamiento Personal' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `¡Hola! Mi nombre es ${formData.name}.

📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}
🏢 Sede de interés: ${venues.find(v => v.id === formData.venue)?.name || 'No especificada'}
🏀 Programa: ${programs.find(p => p.id === formData.program)?.name || 'No especificado'}

💬 Mensaje: ${formData.message}

¡Espero su respuesta!`;

    const phoneNumber = '+573171234567';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Contáctanos
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            ¡Comienza tu <span className="text-yellow-500">Aventura Deportiva</span>!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para resolver tus dudas y ayudarte a encontrar el programa perfecto. 
            ¡Tu primera clase es completamente gratis!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-yellow-500" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className={`${info.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1">{info.title}</h4>
                        <p className="text-sm font-semibold text-gray-900 mb-1">{info.value}</p>
                        <p className="text-xs text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-yellow-500" />
                  Nuestras Sedes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 text-center">
                  <Building className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
                  <h4 className="font-semibold mb-2">3 Ubicaciones Estratégicas</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>🏢 <strong>Centro:</strong> Calle 56 #23-45, Cabecera del Llano</div>
                    <div>🏢 <strong>Norte:</strong> Carrera 15 #87-23, Morrorico</div>
                    <div>🏢 <strong>Sur:</strong> Calle 12 #34-67, La Flora</div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                    onClick={() => {
                      const element = document.querySelector('#sedes');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Ver Detalles de Sedes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5 text-yellow-500" />
                  Solicita tu Clase Gratis
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  Completa el formulario y nos comunicaremos contigo por WhatsApp
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 - Nombre y Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Tu nombre completo"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - Teléfono y Sede */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="+57 300 123 4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Sede de Preferencia
                      </label>
                        <Select onValueChange={(value: string) => handleInputChange('venue', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una sede" />
                        </SelectTrigger>
                        <SelectContent>
                          {venues.map((venue: Venue) => (
                          <SelectItem key={venue.id} value={venue.id}>
                            {venue.name}
                          </SelectItem>
                          ))}
                        </SelectContent>
                        </Select>
                    </div>
                  </div>

                  {/* Row 3 - Programa */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Programa de Interés
                    </label>
                    <Select onValueChange={(value: string) => handleInputChange('program', value)}>
                      <SelectTrigger>
                      <SelectValue placeholder="Selecciona un programa" />
                      </SelectTrigger>
                      <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program.id} value={program.id}>
                        {program.name}
                        </SelectItem>
                      ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Row 4 - Mensaje */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensaje (Opcional)
                    </label>
                    <Textarea
                      placeholder="Cuéntanos sobre tus objetivos, experiencia previa o cualquier pregunta específica..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3"
                    size="lg"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, serás redirigido a WhatsApp para continuar la conversación.
                    <br />
                    <strong>¡Tu primera clase es completamente GRATIS!</strong>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🎉 ¡Oferta Especial de Bienvenida!</h3>
              <div className="space-y-2 mb-6">
                <p className="text-lg">✅ Primera clase completamente GRATIS</p>
                <p className="text-lg">✅ Evaluación personalizada sin costo</p>
                <p className="text-lg">✅ Plan de entrenamiento inicial</p>
                <p className="text-lg">✅ Sin compromiso ni permanencia mínima</p>
              </div>
              <Badge className="bg-black text-yellow-400 px-4 py-2">
                ⏰ Oferta válida hasta fin de mes
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;