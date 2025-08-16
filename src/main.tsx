import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // añadido
import ScrollToTop from '@components/ScrollToTop';
import WhatsAppWidget from '@components/WhatsAppWidget';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navigation from '@components/Navigation';
import { Favicon } from '@components/ui/favicon';
import AboutSection from '@components/AboutSection';
import ScheduleCalendar from '@components/ScheduleCalendar';
import CoachesCarousel from '@components/CoachesCarousel';
import VenuesCarousel from '@components/VenuesCarousel';
import PaymentSection from '@components/PaymentSection';
import ContactSection from '@components/ContactSection';
import CategoriesSection from '@components/CategoriesSection';
import Loader from '@components/Loader';

// Inyección de favicon (runtime) — coloca /public/favicon.png o cambia el nombre abajo.
(function ensureFavicon(href: string) {
  if (typeof document === 'undefined') return;
  const rels = ['icon', 'shortcut icon'];
  rels.forEach(rel => {
    let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = rel;
      document.head.appendChild(link);
    }
    link.type = href.endsWith('.ico') ? 'image/x-icon' : 'image/png';
    link.href = href;
  });
})('/assets/images/academy/favicon.ico');

document.title = 'Proskills Academia de Baloncesto';

// Punto único de montaje en el DOM.
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Loader />
      <ScrollToTop />
      <Favicon /> {/* Si este componente también añade meta tags, se mantiene */}
      <Navigation />
      <main className="overflow-x-hidden w-full relative">
        <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* LANDING / SPA PRINCIPAL */}
                  <section id="home"><Hero /></section>
                  <section id="about"><AboutSection /></section>
                  <section id="categories"><CategoriesSection /></section>
                  <section id="schedule"><ScheduleCalendar /></section>
                  <section id="coaches"><CoachesCarousel /></section>
                  <section id="venues"><VenuesCarousel /></section>
                  <section id="payment"><PaymentSection /></section>
                  <section id="contact"><ContactSection /></section>
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
    </BrowserRouter>
  </React.StrictMode>
);
