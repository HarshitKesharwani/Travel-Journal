
import './App.css';
import Navbar from './Navbar';
import Journey from './Journey';
import data from './data';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function App() {
  const tour=data.map(pla=>
    {
      return(

<Journey
img={pla.img}
name={pla.name}
about={pla.about}
city={pla.city}
/>


      )
    })
  return (
    <div>
      
    <Navbar/>
    
    <div>{tour}</div>
    
    
    </div>
  )
}


