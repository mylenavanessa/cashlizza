import {Link} from 'react-router-dom';
import logoImg from '../assets/cashlizza-logo.svg';
import logoTwitter from '../assets/twitter.svg';
import logoFacebook from '../assets/facebook.svg';
import logoInstagram from '../assets/instagram.svg';
import iconLupa from '../assets/lupa.svg';
import '../styles/navbar.css';

export function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='content'>
        <Link to={'/'}>
          <img id='logo' src={logoImg} alt="cahslizza logo"/>
        </Link>
        <div className='input-container'>
          <input type="text" placeholder='Buscar por produto, marca ou loja' />
          <img src={iconLupa} alt='buscar'/> 
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src={logoFacebook} alt="logo facebook"/>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
              <img src={logoInstagram} alt="logo instagram"/>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/' target="_blank" rel="noreferrer">
              <img src={logoTwitter} alt="logo twitter"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
