<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'

import logo1 from '../Logo/logo1.png'
import logo2 from '../Logo/cangrejitos.png'

export const Footer = () => {
    return ( 
  
        <footer>
            <div className="ContFooter">
              <div className='LogosFooter'>
                    <img src={logo1} alt='Logo comuna' className='Logo1Footer'/>
                    <img src={logo2} alt='Logo comuna' className='Logo2Footer'/>
                    <text>Club de futbol Cangrejos de Lolol</text>
              </div>
              <div className='ContFooter'>
                    <nav className='ContRrss'>
                       <ul>
                         <li><a href='' class="nav-link">Facebook</a></li>
                         <li><a href='' class="nav-link">Instagram</a></li>
                         <li><a href='' class="nav-link">Correo</a></li>
                         <li><a href='' class="nav-link">Contacto</a></li>
                        </ul>
                    </nav>
                  </div>
            </div>
        </footer>
     );
  }
