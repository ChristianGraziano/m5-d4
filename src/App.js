import './App.css';
import LatestRelease from './Component/LatestRelease';
import React,{useState,useEffect,createContext,} from 'react';
import NavBar from './Component/NavBar';
import WelcomeHero from './Component/WelcomeCarosel/WelcomeHero';
import MyFooter from './Component/footer/MyFooter';
import SpinnerLoading from './Component/SpinnerLoading';


 

 export const getBooksContext =createContext()

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
            <SpinnerLoading/>
            console.log(error);
          }
      }
  
      useEffect(() => {
      getBookApi();
    }, []);
  
    
 
  
    
    return (
    <>
      <getBooksContext>
        < NavBar />
        < WelcomeHero />
        
        < LatestRelease arrayBook={arrayBook} />
        < MyFooter />
      </getBooksContext>

    
    </>
  );
}

export default App;
