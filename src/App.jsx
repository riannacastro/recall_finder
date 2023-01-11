import './App.css';
import Home from './components/Home';
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import FoodRecalls from './components/FoodRecalls';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/food-recalls' element={<FoodRecalls />} />
      </Routes>
    </Router>
  );
}

export default App;
