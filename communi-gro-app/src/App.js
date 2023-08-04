import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import PlantList from './PlantList';
import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom';
import Home from './Home';
import CommentSection from './CommentSection';
import BuyPlant from './BuyPlant';

function App() {
  const [plants, setPlants] = useState([{}]);
  useEffect(()=>{
    // fetch("https://server-redo-communi-gro.vercel.app/data")
    fetch("https://perenual.com/api/species-list?page=1&key=sk-u2lg64c813f6946291723")
    .then((resp)=>resp.json())
    .then((data)=>{
      // console.log(data);
      setPlants(data.data);
      console.log(data.data);
    });
  }, []); 

  const style = ({ isActive }) => ({
    color: isActive ? '#fff' : 'lightblue',
    background: isActive ? '#7600dc' : '#000',
    })

  return (
    <>
      <Header />
      <BrowserRouter>
        <NavLink to="/" style={style}>Home</NavLink>
        <NavLink to="/plantlist" style={style}>Discover PLants</NavLink>
        <NavLink to="/buyplant" style={style}>Order Seedlings</NavLink>
        <NavLink to="/comments" style={style}>Leave your Comment</NavLink>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="plantlist" element={<PlantList plants={plants}/>}/>
          <Route path="comments" element={<CommentSection />}/>
          <Route path="buyplant" element={<BuyPlant plants={plants} />}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;