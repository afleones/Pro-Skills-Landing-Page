'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Clock, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { Textarea } from '@ui/textarea';
import logoImage from "/assets/images/academy/logo.png";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  
  const phoneNumber = "+573171234567";
  const defaultMessage = "¡Hola! Me interesa conocer más sobre los programas de Pro Skills Basketball.";

  const handleSendMessage = () => {
    const finalMessage = message || defaultMessage;
    const fullMessage = name 
      ? `Hola, mi nombre es ${name}. ${finalMessage}`
      : finalMessage;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
    
    // Limpiar y cerrar
    setMessage('');
    setName('');
    setIsOpen(false);
  };

  const quickMessages = [
    "Información sobre horarios y precios",
    "Quiero agendar una clase de prueba",
    "Consulta sobre inscripciones",
    "Información sobre sedes disponibles"
  ];

  return (
    <>
      {/* Floating Button - Posicionado a la izquierda */}
      <div className="fixed bottom-20 left-4 md:bottom-24 md:left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            bg-[#25D366] hover:bg-[#20BA5A] text-white border-none rounded-full 
            w-14 h-14 flex items-center justify-center cursor-pointer 
            shadow-lg transition-all duration-300 animate-whatsapp-pulse
            ${isOpen ? 'scale-110' : 'hover:scale-105'}
          `}
          aria-label="Contactar por WhatsApp"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            1
          </div>
        )}
      </div>

      {/* Chat Widget - Posicionado desde la izquierda */}
      {isOpen && (
        <div className="fixed bottom-36 left-4 md:bottom-40 md:left-6 z-50 w-80 md:w-96">
          <Card className="shadow-2xl border-0 overflow-hidden animate-slideInFromBottom">
            {/* Header */}
            <CardHeader className="bg-[#25D366] text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={logoImage}
                      alt="Pro Skills Basketball Logo"
                      className="w-8 h-8 object-contain"
                    />
                    </div>
                  <div>
                    <CardTitle className="text-sm">Pro Skills Basketball</CardTitle>
                    <p className="text-xs opacity-90">Normalmente responde en minutos</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 rounded-full"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {/* Info Section */}
              <div className="bg-gray-50 p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Lun-Vie: 6:00 AM - 9:00 PM | Sáb: 7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+57 317 123 4567</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>3 sedes en Bucaramanga</span>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="p-4 space-y-2">
                <p className="text-sm font-medium text-gray-700 mb-3">Mensajes rápidos:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg)}
                    className="w-full text-left p-2 text-sm bg-gray-100 hover:bg-yellow-50 hover:border-yellow-200 border border-gray-200 rounded-lg transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              {/* Custom Message Form */}
              <div className="p-4 border-t space-y-3">
                <Input
                  placeholder="Tu nombre (opcional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm"
                />
                <Textarea
                  placeholder="Escribe tu mensaje personalizado..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm min-h-[80px] resize-none"
                />
                <Button
                  onClick={handleSendMessage}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-3 text-center">
                <p className="text-xs text-gray-500">
                  Te responderemos lo antes posible
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppWidget;