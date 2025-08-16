import { useState, useEffect } from 'react';
import logoImage from '/assets/images/academy/logo.png';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    // Fallback para asegurar que el loader desaparezca
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="text-center">
        {/* Logo con animación */}
        <div className="mb-8 animate-pulse">
          <img
            src={logoImage}
            alt="Pro Skills Basketball"
            className="h-24 w-auto mx-auto animate-bounce-custom"
          />
        </div>

        {/* Texto de carga */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Pro Skills Basketball
        </h2>
        <p className="text-gray-600 mb-8">Cargando experiencia deportiva...</p>

        {/* Barra de progreso */}
        <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto mb-4">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Porcentaje */}
        <p className="text-sm text-gray-500">
          {Math.round(Math.min(progress, 100))}%
        </p>

        {/* Puntos de carga animados */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;