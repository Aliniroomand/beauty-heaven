
//Contex
import BarbersContextProvider from './context/BarbersContextProvider';
//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';


function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BarbersContextProvider>
        <Navbar/>
      <Landing/>
      </BarbersContextProvider>
    </div>
  );
}

export default App;
