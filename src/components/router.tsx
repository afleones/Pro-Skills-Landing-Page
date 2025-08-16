import type { PageType, RouterContextType } from "../types/types";
import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";

const RouterContext = createContext<RouterContextType | undefined>(undefined);

interface RouterProviderProps {
  children: ReactNode;
}

export function RouterProvider({ children }: RouterProviderProps): JSX.Element {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigate = (page: PageType): void => {
    setCurrentPage(page);
    window.history.pushState({}, '', `#${page}`);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Handle browser back/forward
    const handlePopState = (): void => {
      const hash = window.location.hash.slice(1) as PageType;
      if (hash && isValidPage(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Set initial page from hash
    const initialHash = window.location.hash.slice(1) as PageType;
    if (initialHash && isValidPage(initialHash)) {
      setCurrentPage(initialHash);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value: RouterContextType = {
    currentPage,
    navigate
  };

  return (
    <RouterContext.Provider value={value}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

// Utility function to validate page types
function isValidPage(page: string): page is PageType {
  const validPages: PageType[] = ['home', 'services', 'products', 'catalog', 'about', 'team', 'contact'];
  return validPages.includes(page as PageType);
}