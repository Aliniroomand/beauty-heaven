import { Route,Routes ,Navigate } from 'react-router-dom';

//Components
import ChooseGenderOrLogin from './components/ChooseGenderOrLogin';
import MenServices from './components/MenServices';
import WomenServices from './components/WomenServices';

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Routes>
        <Route path="/womenservices" element={<WomenServices />} />
        <Route path="/menservices" element={<MenServices />} />
        <Route path="/" element={<ChooseGenderOrLogin />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
