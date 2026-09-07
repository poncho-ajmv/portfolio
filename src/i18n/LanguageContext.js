import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

// Lee el valor anidado de un objeto a partir de una ruta "a.b.c".
function getPath(obj, path) {
  return path.split('.').reduce((cur, key) => (cur == null ? undefined : cur[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      // 1) Preferencia guardada del usuario
      const saved = window.localStorage.getItem('lang');
      if (saved === 'es' || saved === 'en') return saved;

      // 2) Idioma del navegador, si es uno de los soportados
      const browser = (window.navigator.language || '').slice(0, 2).toLowerCase();
      if (browser === 'es' || browser === 'en') return browser;
    }
    // 3) Por defecto, inglés
    return 'en';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  // Devuelve el texto traducido. Si falta en el idioma actual, cae a inglés;
  // si tampoco existe, devuelve la propia clave (útil para detectar olvidos).
  const t = (path) => {
    const value = getPath(translations[lang], path);
    if (value !== undefined) return value;
    const fallback = getPath(translations.en, path);
    return fallback !== undefined ? fallback : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLang debe usarse dentro de <LanguageProvider>');
  }
  return ctx;
}
