import {Link} from 'react-router-dom';
import logoImg from '../assets/cashlizza-logo.svg';
import logoTwitter from '../assets/twitter.svg';
import logoFacebook from '../assets/facebook.svg';
import logoInstagram from '../assets/instagram.svg';
import iconLupa from '../assets/lupa.svg';
import { useContext, useState } from 'react'
import { CategoriesContext } from '../store/categories'
import '../styles/navbar.css';
import api from '../services/api';
import { GeneralContext } from '../store/general';

export function Navbar() {
  const { selectCategory } = useContext(CategoriesContext);
  const { selectKey, setProducts, fetchStores } = useContext(GeneralContext);
  const [searchValue, setSearchValue] = useState('');

  const handleKeyDown = async (event: any) => {
    if (event.key === 'Enter') {
      if(searchValue) {
        selectCategory({name: ''})
        selectKey('product')
        const { data } = await api.get(`/products.json?page=1&filter[products][name][search]=${searchValue}`);
        setProducts(data);
      }
    }
  }
  return (
    <div className='navbar-container'>
      <div className='content'>
        <Link to={'/'} onClick={() => {selectCategory({name: ''}); selectKey(''); fetchStores()}}>
          <img id='logo' src={logoImg} alt="cahslizza logo"/>
        </Link>
        <div className='input-container'>
          <input type="text" placeholder='Buscar por produto' onKeyDown={handleKeyDown} onChange={(e) => setSearchValue(e.target.value)}/>
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
