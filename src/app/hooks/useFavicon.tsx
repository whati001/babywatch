import { useEffect } from 'react';

export function useFavicon(iconUrl: string) {
  useEffect(() => {
    // Remove existing favicon links
    const existingLinks = document.querySelectorAll("link[rel*='icon']");
    existingLinks.forEach(link => link.remove());

    // Create new favicon link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = iconUrl;
    document.head.appendChild(link);

    // Also set as apple-touch-icon for iOS devices
    const appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = iconUrl;
    document.head.appendChild(appleLink);

    return () => {
      link.remove();
      appleLink.remove();
    };
  }, [iconUrl]);
}
