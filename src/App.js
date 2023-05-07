import Landing from './pages/landing';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Authenticationlayout from './layouts/Authenticationlayout'
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Routes>
              <Route index element={<Landing />} />
              <Route path="/" element={<Authenticationlayout/>}>

              <Route path="dashboard" element={<Dashboard/>}></Route>
               </Route>

    </Routes>


   
  );
}

export default App;
