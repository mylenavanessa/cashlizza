import {Link} from 'react-router-dom';
import iconArrow from '../assets/seta-direita.svg';
import '../styles/footer.css';

export function Footer() {
  return(
    <div className="footer-container">
      <div className='content'>
        <div className='menu-container'>
          <div className='right-container'>
            <ul>
              <li>
                <div className='icon-container'>
                  <img src={iconArrow} alt='icone'/>
                </div>
                <Link className='menu-text' to={'/help'}>
                  Ajuda
                </Link>
              </li>
              <li>
                <div className='icon-container'>
                  <img src={iconArrow} alt='icone'/>
                </div>
                <Link className='menu-text' to={'/contact'}>
                  Contato
                </Link>
              </li>
              <li>
                <div className='icon-container'>
                  <img src={iconArrow} alt='icone'/>
                </div>
                <Link className='menu-text' to={'/about'}>
                Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div className='left-container'>
            <ul>
              <li>
                <div className='icon-container'>
                  <img src={iconArrow} alt='icone'/>
                </div>
                <Link className='menu-text' to={'/privacy'}>
                Políticas de privacidade
                </Link>
              </li>
              <li>
                <div className='icon-container'>
                  <img src={iconArrow} alt='icone'/>
                </div>
                <Link className='menu-text' to={'/terms'}>
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p>Todos os direitos reservados &copy; 2022 Mylena e Isadora</p>
      </div>
    </div>
  )
}