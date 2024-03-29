import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './page/Home/Home';
import Composition from './page/Composition/Composition';
import FirstAdmin from './page/AdminPage/FirstAdmin/FirstAdmin';
import TwoAdmin from './page/AdminPage/TwoAdmin/TwoAdmin';
import AutoAdmin from './page/AdminPage/AutoAdmin/AutoAdmin';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/composition/:id' element={<Composition />}/>
      <Route path='/AdminPage/FirstAdmin/:id' element={<FirstAdmin />}/>
      <Route path='/AdminPage/TwoAdmin/:id' element={<TwoAdmin />}/>
      <Route path='/AdminPage/AutoAdmin/:id' element={<AutoAdmin />}/>

    </Routes>
  );
}

export default App;
