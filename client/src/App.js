import logo from './logo.svg';
import './App.css';
import ALLTODOS from './Components/ALLTODOS';
import { Link, Route, Routes } from 'react-router-dom'



function App() {



  return (
    <div className="App">
      <div id="navbar">
        <Link to={'/home'}>home</Link>
      </div>
      <Routes>
        <Route path='/home' element={<ALLTODOS />} />
      </Routes>

    </div>
  );
}

export default App;
