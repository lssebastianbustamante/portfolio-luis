// providers/AppProvider.tsx
import { createContext, useContext, useState } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  // ... más estados globales
  
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}