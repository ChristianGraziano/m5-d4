import './App.css';
import LatestRelease from './Component/LatestRelease';
import React,{useState,useEffect, createContext} from 'react';
import NavBar from './Component/NavBar';
import WelcomeHero from './Component/WelcomeCarosel/WelcomeHero';
import MyFooter from './Component/footer/MyFooter';
import SpinnerLoading from './Component/SpinnerLoading';
import { nanoid } from 'nanoid';

// Contesto del thema Dark/light


const ThemeContext = createContext();

const ThemeProvider =({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    

    return (
          <ThemeContext.Provider value={{theme, toggleTheme}}>
              {children}
          </ThemeContext.Provider>
    );
}  

export {ThemeContext, ThemeProvider}


  // APP
  
function App() {
  
  //funzione per chiamare api dei libri
  const [arrayBook, setArrayBook]= useState([]);
  console.log(setArrayBook);
      
      const getBookApi= async () => {
          try {
              const data = await fetch('https://epibooks.onrender.com/');
              const response = await data.json();
              setArrayBook(response);
          } catch (error) {
          }
      }
  
      useEffect(() => {
      getBookApi();
    }, []);
  
    
 
  
    
    return (
    <>
    <ThemeProvider>
      < NavBar />
      < WelcomeHero />
      < SpinnerLoading />
      < LatestRelease arrayBook={arrayBook} />
      < MyFooter />
    </ThemeProvider>
    </>
  );
}

export default App;
