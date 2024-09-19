import { Route, Routes } from 'react-router-dom';
import './App.css';
import City from './components/City';
import CityParams from './components/CityParams';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<City/>}/>
        <Route path='/:city' element={<CityParams/>} />
      </Routes>
    </div>
  );
}

export default App;
