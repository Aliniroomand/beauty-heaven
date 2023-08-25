import { Route,Routes ,Navigate } from 'react-router-dom';
//Contex
import BarbersContextProvider from './context/BarbersContextProvider';
//Components
import ChooseGenderOrLogin from './components/ChooseGenderOrLogin';
import MenServices from './components/men/MenServices';
import WomenServices from './components/WomenServices';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BarbersContextProvider>
      <Routes>
        <Route path="/womenservices" element={<WomenServices />} />
        <Route path="/menservices" element={<MenServices />} />
        <Route path="/" element={<ChooseGenderOrLogin />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      </BarbersContextProvider>
    </div>
  );
}

export default App;
