import { Route,Routes ,Navigate } from 'react-router-dom';
// contex
import ChooseGenderOrLogin from './ChooseGenderOrLogin';
import MenServices from './men/MenServices';
import WomenServices from './women/WomenServices';
import BarberINF from './men/BarberINF';
//styles
import styles from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={styles.container}>
      <Routes>
        <Route path="/menservices/:id" element={<BarberINF/>}/>
        <Route path="/womenservices" element={<WomenServices />} />
        <Route path="/menservices" element={<MenServices />} />
        <Route path="/" element={<ChooseGenderOrLogin />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
            
        </div>
    );
};

export default Landing;