import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layouts from './Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    </div>
  );
}

export default App;
