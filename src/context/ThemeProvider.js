import React, { createContext, useState } from "react";

// Crea il contesto di tema
export const ThemeContext = createContext();

// Definisci il tuo provider di tema
export const ThemeProvider = ({ children }) => {
  // Definisci lo stato del tema, con "light" come valore predefinito
  const [theme, setTheme] = useState(false);

  // Funzione per cambiare il tema
  const toggleTheme = () => {
    setTheme(!theme);
  };

  // Passa lo stato del tema e la funzione per cambiarlo come valore del contesto
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
