<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import React , {useState} from 'react'
import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'
import logo1 from '../Logo/logo1.png'
import logo2 from '../Logo/cangrejitos.png'
import logo3 from '../Logo/logo3.png'


export const Header  = () => {

  const[Header,setHeader]= useState(false);
  const changeBg = () =>{
    if(window.scrollY>0) {
      setHeader(false);
      
    }else{
      setHeader(true);
    }
  };

  window.addEventListener('scroll', changeBg);

    return ( 
  
        <header className={Header ? 'header' : 'Hscroll'}>
            <div className="ContMenu">
            <div className='Logos'>
                  <img src={logo1} alt='Logo comuna' className='Logo1'/>
                    <img src={logo2} alt='Logo comuna' className='Logo2'/>
                     <text>Club de futbol Cangrejos de Lolol</text>
            </div>
            <div className='ContNav'>
                    <nav>
                       <ul>

                         <li><a href='#' className='selector'>Directiva</a>

                          <ul className='sub-menu1'>

                            <li><a href='#'>Presidente:</a></li>
                            <li><a href='#'>V.Presidente:</a></li>
                            <li><a href='#'>Secretario:</a></li>
                            <li><a href='#'>Tesorero:</a></li>

                          </ul>
                         </li>

                         <li><a href='#' className='selector'>Contacto</a>

                         <ul className='sub-menu1'>

                            <li><a href='#'>Correo:</a></li>
                            <li><a href='#'>Telefono:</a></li>

                          </ul>
                         </li>
                        </ul>
                    </nav>
                  </div>
            </div>
        </header>
     );
  }



  export const ContF1 = () => {
    return ( 
  
      <div>
          <div className='contF1'>
          <img src={logo3} alt='entrenando'/>
          </div>
       </div>
     );
  }