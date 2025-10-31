'use client';

import { IntlProvider } from 'react-intl';
import esForm from './components/form/messages/es.json';
import enForm from './components/form/messages/en.json';
import esSkills from './components/sections/Skills/messages/es.json';
import enSkills from './components/sections/Skills/messages/en.json';
import esProjects from './components/sections/Projects/messages/es.json';
import enProjects from './components/sections/Projects/messages/en.json';

import React from 'react';

type Lang = 'es' | 'en';

export const LanguageContext = React.createContext<{
  language: Lang;
  setLanguage: (lang: Lang) => void;
}>({ language: 'es', setLanguage: () => {} });

export default function IntlClientProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Lang>('es');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    // Leer preferencia y sincronizar tras el mount para evitar mismatch
    const stored = window.localStorage.getItem('lang');
    const preferred: Lang = stored === 'es' || stored === 'en'
      ? stored
      : (window.navigator.language.startsWith('es') ? 'es' : 'en');
    if (preferred !== language) setLanguage(preferred);
    document.documentElement.lang = preferred;
    window.localStorage.setItem('lang', preferred);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <IntlProvider
        locale={language}
        messages={
          language === 'es'
            ? { ...esForm, ...esSkills, ...esProjects }
            : { ...enForm, ...enSkills, ...enProjects }
        }
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}