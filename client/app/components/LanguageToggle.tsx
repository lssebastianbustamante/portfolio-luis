'use client'

import { useContext } from 'react'
import { LanguageContext } from '../IntlClientProvider'

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded border ${language === 'es' ? 'bg-portfolio-orange text-white' : 'bg-white'}`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded border ${language === 'en' ? 'bg-portfolio-orange text-white' : 'bg-white'}`}
      >
        EN
      </button>
    </div>
  )
}
