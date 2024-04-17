import { Route,Routes ,Navigate } from 'react-router-dom';
// components
import ChooseGenderOrLogin from './ChooseGenderOrLogin';
import MenServices from './men/MenServices';
import WomenServices from './women/WomenServices';
import BarberINF from './men/BarberINF';
import BeauticianINF from "../components/women/BeauticianINF"
import Website from './web/Website';
import UserPanel from './admin/UserPanel';


const Landing = () => {
    return (
        <div style={{position:"relative"}}>
      <Routes>
        <Route path="/UserPanel" element={<UserPanel />} />
        <Route path="/Website" element={<Website/>} />
        <Route path="/menservices/:id" element={<BarberINF/>}/>
        <Route path="/womenservices/:id" element={<BeauticianINF/>}/>
        <Route path="/womenservices" element={<WomenServices />} />
        <Route path="/menservices" element={<MenServices />} />
        <Route path="/" element={<ChooseGenderOrLogin />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
            
        </div>
    );
};

export default Landing;