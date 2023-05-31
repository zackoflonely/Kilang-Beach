import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navweb from './component/Navweb';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Section1 from './component/Section1';
import Wisata from './component/pages/destinations/Wisata';
import MapContainer from './component/pages/MapContainer';
import Footer  from './component/Footer';
import Main from './component/pages/main/Main';
import MapHotel from './component/pages/MapHotel';
import MapResto from './component/pages/MapResto';
import My from './component/pages/profile/My';
import Article from './component/pages/artikel/Article';
import Facility from './component/pages/artikel/Facility';


function App() {
  return (
    <div className="App">
      <Navweb/>
      <div className='bg-App'>
        <div style={{paddingTop:'10%', minHeight:'100vh', minWidth:'95%'}}>
        <Routes>
            <Route path='' element={<Section1/>}/>
            <Route path='galeri' element={<Wisata/>}/>
            <Route path='map' element={<MapContainer/>}/>
            <Route path='about' element={<Main/>}/>
            <Route path='map/hotel' element={<MapHotel/>}/>
            <Route path='map/resto' element={<MapResto/>}/>
            <Route path='myprofile' element={<My/>}/>
            <Route path='artikel' element={<Article/>}/>
            <Route path='fasilitas' element={<Facility/>}/>
        </Routes>
        </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
