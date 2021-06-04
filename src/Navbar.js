import './App.css';
import './logo512.png';

function Navbar() {
  return (
    <nav className = 'Navbar'>
      <ul className= 'menu-list'>
      <li><img className = 'logo' src= {'logo512.png'} alt= {'logo'}></img></li>
      <li>{'Home'}</li>
      <li>{'About Us'}</li>
      <li>{'Event'}</li>
      <li>{'Volunteer'}</li>
      <li>{'Contact'}</li>
      <li><button className='donate'>{'DONATE NOW'}</button></li>
      </ul>
    </nav>
    
    
  );
}

export default Navbar;
