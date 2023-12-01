
//Contex
import BarbersContextProvider from './context/BarbersContextProvider';
//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
// import Footer from './components/Footer';
//styles
import styles from"./App.module.css"

//pages transition
import { AnimatePresence } from 'framer-motion';


function App() {
  return (
    <div className={styles.container} style={{ textAlign: "center", height: "100vh", overflow: "hidden"  }}>
        <AnimatePresence mode="wait">
      <BarbersContextProvider>
        <Navbar/>
      <Landing/>
      {/* <Footer/> */}
      </BarbersContextProvider>
        </AnimatePresence>
    </div>
  );
}

export default App;
