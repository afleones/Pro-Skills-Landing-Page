import { useEffect } from 'react';

interface FaviconProps {
  href?: string;          // Ruta del favicon (en /public)
  type?: 'image/png' | 'image/x-icon' | string;
  themeColor?: string;    // Meta theme-color
  appleTouchIcon?: string;
}

export const Favicon = ({
  href = '/assets/images/academy/favicon.ico',
  type,
  themeColor = '#1e3a8a',
  appleTouchIcon = '/assets/images/academy/favicon.ico'
}: FaviconProps) => {
  useEffect(() => {
    const applyLink = (rel: string, url: string, linkType?: string) => {
      if (!url) return;
      let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      if (linkType) link.type = linkType;
      link.href = url;
    };

    const resolvedType =
      type || (href.endsWith('.ico') ? 'image/x-icon' : 'image/png');

    // favicon estándar
    applyLink('icon', href, resolvedType);
    // compatibilidad (IE / antiguos)
    applyLink('shortcut icon', href, resolvedType);
    // Apple touch icon
    if (appleTouchIcon) applyLink('apple-touch-icon', appleTouchIcon);

    // theme-color meta
    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = themeColor;
  }, [href, type, themeColor, appleTouchIcon]);

  return null;
};