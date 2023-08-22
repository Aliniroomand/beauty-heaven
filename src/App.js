import './App.css';
import { BrowserRouter } from 'react-router-dom';
//Components
import ChooseGenderOrLogin from './components/ChooseGenderOrLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ChooseGenderOrLogin/>
      </BrowserRouter>
    </div>
  );
}

export default App;
