'use client'

import { useContext } from 'react'
import { LanguageContext } from '../IntlClientProvider'

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <div className="language-toggle">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`lang-btn ${language === 'es' ? 'active' : ''}`}
        aria-pressed={language === 'es'}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        aria-pressed={language === 'en'}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
