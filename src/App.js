import { BrowserRouter } from 'react-router-dom';
//Components
import ChooseGenderOrLogin from './components/ChooseGenderOrLogin';

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <BrowserRouter>
      <ChooseGenderOrLogin/>
      </BrowserRouter>
    </div>
  );
}

export default App;
