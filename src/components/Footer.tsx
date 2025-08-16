"use client";

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart, Coffee, Award, Users, Calendar } from "lucide-react";
import { Card, CardContent } from "@ui/card";
import logoImage from "/assets/images/academy/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Contacto",
      items: [
        {
          icon: Phone,
          text: "+57 317 123 4567",
          link: "tel:+573171234567",
        },
        {
          icon: Mail,
          text: "info@proskillscolombia.com",
          link: "mailto:info@proskillscolombia.com",
        },
        {
          icon: MapPin,
          text: "3 Sedes en Bucaramanga",
          link: "#sedes",
        },
      ],
    },
    {
      title: "Academia",
      items: [
        { text: "Sobre Nosotros", link: "#academia" },
        {
          text: "Nuestros Entrenadores",
          link: "#entrenadores",
        },
        { text: "Horarios", link: "#horarios" },
        { text: "Sedes", link: "#sedes" },
        { text: "Precios", link: "#precios" },
      ],
    },
    {
      title: "Síguenos",
      items: [
        {
          icon: Facebook,
          text: "Facebook",
          link: "https://facebook.com/proskillsbasketball",
        },
        {
          icon: Instagram,
          text: "Instagram",
          link: "https://instagram.com/proskillsbasketball",
        },
        {
          icon: Twitter,
          text: "Twitter",
          link: "https://twitter.com/proskillsbasket",
        },
        {
          icon: Youtube,
          text: "YouTube",
          link: "https://youtube.com/@proskillsbasketball",
        },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };
  return (
    <footer
      id="footer"
      className="bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoImage}
                alt="Pro Skills Basketball"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-400">
                  Pro Skills
                </h3>
                <p className="text-sm text-gray-300">
                  Basketball Academy
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Más de 10 años formando campeones de vida y
              deporte en Bucaramanga. Una academia comprometida
              con la excelencia deportiva y los valores humanos.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-yellow-400">
                  500+
                </div>
                <div className="text-xs text-gray-400">
                  Estudiantes
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-yellow-400">
                  15+
                </div>
                <div className="text-xs text-gray-400">
                  Títulos
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="text-xl font-bold text-yellow-400">
                  10
                </div>
                <div className="text-xs text-gray-400">
                  Años
                </div>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button
                      onClick={() => scrollToSection(item.link)}
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors group"
                    >
                      {"icon" in item && item.icon && (
                        <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      )}
                      <span className="text-sm">
                        {item.text}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                  ¡Mantente Informado!
                </h4>
                <p className="text-gray-300 text-sm">
                  Recibe noticias, eventos y ofertas especiales
                  de Pro Skills Basketball
                </p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Tu email aquí..."
                  className="flex-1 md:w-64 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
                  Suscribirse
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications and Legal */}

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Academia de Baloncesto Pro Skills.
                Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Bucaramanga, Santander - Colombia
              </p>
            </div>

            {/* Credits */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Hecho por</span>
              <span className="text-yellow-400 font-semibold">
                <a href="https://www.dccomunicacionessas.com/" target="_blank" rel="noopener noreferrer">D&C COMUNICACIONES S.A.S.</a>
              </span>
              <span>con</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>y mucho</span>
              <Coffee className="h-4 w-4 text-yellow-600  animate-pulse" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <button className="hover:text-yellow-400 transition-colors">
                Política de Privacidad
              </button>
              <span>|</span>
              <button className="hover:text-yellow-400 transition-colors">
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-8 right-8 opacity-10">
        <div className="w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-8 left-8 opacity-10">
        <div className="w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
};

export default Footer;