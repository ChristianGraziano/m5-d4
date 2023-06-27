import './App.css';
import LatestRelaese from './Component/LatestRelaese';
import NavBar from './Component/NavBar';
import WelcomeHero from './Component/WelcomeCarosel/WelcomeHero';
import MyFooter from './Component/footer/MyFooter';

function App() {
  return (
    <>
    < NavBar />
    < WelcomeHero />
    < LatestRelaese />
    < MyFooter />
    </>
  );
}

export default App;
