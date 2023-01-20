import './App.css';
import Home from './components/Home';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
 import FoodRecalls from './components/food-recalls/FoodRecalls';
 import DrugRecalls from './components/drug-recalls/DrugRecalls';
 import DeviceRecalls from './components/device-recalls/DeviceRecalls';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/food-recalls' element={<FoodRecalls />} />
        <Route path='/drug-recalls' element={<DrugRecalls />} />
        <Route path='/device-recalls' element={<DeviceRecalls />} />
      </Routes>
    </Router>
  );
}

export default App;
