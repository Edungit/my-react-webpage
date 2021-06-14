import React from 'react';
import './App.css';
import './logo512.png';
import {Link} from 'react-router-dom'; 


function Navbar() {
  return (
    <React.Fragment>
    <nav className = 'Navbar'>
      <ul className= 'menu-list'>
      <li><img className = 'logo' src= {'logo512.png'} alt= {'logo'}></img></li>
      <li><Link to='/' >Home</Link></li>
      <li><Link to='/About' >About Us</Link></li>
      <li>{'Event'}</li>
      <li>{'Volunteer'}</li>
      <li>{'Contact'}</li>
      <li><Link to='/About' ><button className='donate'>{'DONATE NOW'}</button></Link></li>
      </ul>
    </nav>
    </React.Fragment>
    
  );
}

export default Navbar;
