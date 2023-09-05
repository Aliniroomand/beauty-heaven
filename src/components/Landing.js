import { Route,Routes ,Navigate } from 'react-router-dom';
// contex
import ChooseGenderOrLogin from './ChooseGenderOrLogin';
import MenServices from './men/MenServices';
import WomenServices from './WomenServices';

const Landing = () => {
    return (
        <div>
      <Routes>
        <Route path="/womenservices" element={<WomenServices />} />
        <Route path="/menservices" element={<MenServices />} />
        <Route path="/" element={<ChooseGenderOrLogin />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
            
        </div>
    );
};

export default Landing;