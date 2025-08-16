import { Check, Users, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs';

const PaymentSection = () => {
  const plans = [
    {
      id: "mini-basket",
      name: "Mini Básquet",
      age: "6-8 años",
      price: 180000,
      inscription: 100000,
      features: [
        "2 entrenamientos por semana",
        "1 hora por sesión",
        "Máximo 15 niños por grupo",
        "Material deportivo incluido",
        "Seguro de accidentes",
        "Camiseta oficial"
      ],
      popular: false,
      color: "border-green-200"
    },
    {
      id: "juvenil",
      name: "Básquet Juvenil",
      age: "9-16 años",
      price: 220000,
      inscription: 120000,
      features: [
        "3 entrenamientos por semana",
        "1.5 horas por sesión",
        "Máximo 20 jugadores",
        "Participación en torneos",
        "Evaluación técnica mensual",
        "Uniforme completo",
        "Clínicas especiales"
      ],
      popular: true,
      color: "border-yellow-500"
    },
    {
      id: "adultos",
      name: "Básquet Adultos",
      age: "+17 años",
      price: 200000,
      inscription: 80000,
      features: [
        "2 entrenamientos por semana",
        "1.5 horas por sesión",
        "Horarios flexibles",
        "Acceso al gimnasio",
        "Eventos sociales",
        "Camiseta oficial"
      ],
      popular: false,
      color: "border-blue-200"
    },
    {
      id: "personal",
      name: "Entrenamiento Personal",
      age: "Todas las edades",
      price: 150000,
      inscription: 50000,
      priceUnit: "/sesión",
      features: [
        "Sesiones 1 a 1",
        "1 hora por sesión",
        "Horario completamente flexible",
        "Plan personalizado",
        "Evaluación detallada",
        "Todas las sedes disponibles"
      ],
      popular: false,
      color: "border-purple-200"
    }
  ];

  const paymentMethods = [
    {
      name: "Transferencia Bancaria",
      description: "Banco de Bogotá, Bancolombia, Davivienda",
      discount: "5% descuento",
      icon: "🏦"
    },
    {
      name: "Tarjeta de Crédito/Débito",
      description: "Visa, Mastercard, American Express",
      discount: "Sin recargo",
      icon: "💳"
    },
    {
      name: "PSE",
      description: "Pago seguro en línea",
      discount: "Sin recargo",
      icon: "🔒"
    },
    {
      name: "Efectivo",
      description: "En cualquiera de nuestras sedes",
      discount: "Sin recargo",
      icon: "💵"
    }
  ];

  const discounts = [
    {
      title: "Descuento Familiar",
      description: "15% en el segundo hijo",
      icon: Users,
      condition: "2+ hermanos"
    },
    {
      title: "Pago Semestral",
      description: "10% de descuento",
      icon: Calendar,
      condition: "6 meses anticipado"
    },
    {
      title: "Pago Anual",
      description: "20% de descuento",
      icon: Star,
      condition: "12 meses anticipado"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-500 text-black mb-4 px-4 py-2">
            Planes y Precios
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-6">
            Inversión en tu <span className="text-yellow-500">Futuro Deportivo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos planes accesibles con múltiples opciones de pago y descuentos especiales. 
            ¡La primera clase es completamente gratis!
          </p>
        </div>

        <Tabs defaultValue="planes" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-md mx-auto">
            <TabsTrigger value="planes">Planes</TabsTrigger>
            <TabsTrigger value="pagos">Métodos de Pago</TabsTrigger>
            <TabsTrigger value="descuentos">Descuentos</TabsTrigger>
          </TabsList>

          {/* Plans */}
          <TabsContent value="planes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <Card key={plan.id} className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${plan.color} ${plan.popular ? 'border-2' : 'border'}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2">
                      <Badge className="bg-black text-yellow-500 text-xs">
                        Más Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                    <CardTitle className="text-lg mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">{plan.age}</p>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-yellow-600">
                        ${plan.price.toLocaleString()}
                        <span className="text-lg text-gray-500 font-normal">
                          {plan.priceUnit || '/mes'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Inscripción: ${plan.inscription.toLocaleString()}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full mt-4 ${plan.popular ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
                      onClick={() => scrollToSection('#contacto')}
                    >
                      {plan.id === 'personal' ? 'Consultar' : 'Inscribirse'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Free Trial CTA */}
            <div className="mt-12 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl mb-4">¡Primera Clase Completamente Gratis!</h3>
              <p className="text-gray-600 mb-6">
                Conoce nuestras instalaciones, metodología y entrenadores antes de tomar tu decisión.
              </p>
              <Button 
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
                onClick={() => scrollToSection('#contacto')}
              >
                Agendar Clase de Prueba
              </Button>
            </div>
          </TabsContent>

          {/* Payment Methods */}
          <TabsContent value="pagos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{method.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                        <Badge className="bg-green-100 text-green-800">
                          {method.discount}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Información Bancaria</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Banco de Bogotá</strong><br />
                  Cuenta Corriente: 123-456789-01<br />
                  A nombre de: Fundación Pro Skills Basketball
                </div>
                <div>
                  <strong>Bancolombia</strong><br />
                  Cuenta de Ahorros: 987-654321-02<br />
                  A nombre de: Fundación Pro Skills Basketball
                </div>
                <div>
                  <strong>Davivienda</strong><br />
                  Cuenta Corriente: 456-123789-03<br />
                  A nombre de: Fundación Pro Skills Basketball
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Discounts */}
          <TabsContent value="descuentos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {discounts.map((discount, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <discount.icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="font-semibold mb-2">{discount.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{discount.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {discount.condition}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Política de Reembolsos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Cancelación antes del inicio:</span>
                    <span className="font-medium">100% reembolso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Primera semana:</span>
                    <span className="font-medium">80% reembolso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Segunda semana:</span>
                    <span className="font-medium">50% reembolso</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Después de la segunda semana:</span>
                    <span className="font-medium">No hay reembolso</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <strong>Lesiones médicas:</strong> Congelamiento de mensualidades con certificado médico
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PaymentSection;