import './App.css';
import LatestRelease from './Component/LatestRelease';

import NavBar from './Component/NavBar';
import WelcomeHero from './Component/WelcomeCarosel/WelcomeHero';
import MyFooter from './Component/footer/MyFooter';


function App() {
  return (
    <>
    < NavBar />
    < WelcomeHero />
    < LatestRelease />
    < MyFooter />
    </>
  );
}

export default App;
