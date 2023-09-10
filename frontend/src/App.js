import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      {/* <Route path='/Contact' element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
