'use client';

import { IntlProvider } from 'react-intl';
import esMessages from './components/form/messages/es.json';
import enMessages from './components/form/messages/en.json';
import React from 'react';

export default function IntlClientProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState('es'); // Valor por defecto

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const detectedLanguage = window.navigator.language;
      const lang = detectedLanguage.startsWith('es') ? 'es' : 'en';
      setLanguage(lang);
    }
  }, []);

  return (
    <IntlProvider locale={language} messages={language === 'es' ? esMessages : enMessages}>
      {children}
    </IntlProvider>
  );
}