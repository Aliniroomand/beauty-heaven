
//Contex
import BarbersContextProvider from './context/BarbersContextProvider';
//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BarbersContextProvider>
        <Navbar/>
      <Landing/>
      <Footer/>
      </BarbersContextProvider>
    </div>
  );
}

export default App;
