import './App.css';
import { Quiz } from './Pages/Quiz';
import { AllRoutes } from './Routes/AllRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
