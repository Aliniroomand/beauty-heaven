
//Contex
import BarbersContextProvider from './context/BarbersContextProvider';
import BeauticianContextProvider from './context/BeauticianContextProvider';
//Components
import Navbar from './components/Navbar';
import Landing from './components/Landing';
//styles
import styles from"./App.module.css"

//pages transition
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <div className={styles.container} style={{ textAlign: "center" }}>
        <AnimatePresence mode="wait">
      <BarbersContextProvider>
      <BeauticianContextProvider>
        <Navbar/>
        <Landing/>
      {/* <Footer/> */}
      </BeauticianContextProvider>
      </BarbersContextProvider>
        </AnimatePresence>
    </div>
  );
}

export default App;
