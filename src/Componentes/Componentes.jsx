import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'

import logo1 from '../Logo/logo1.png'
import logo2 from '../Logo/cangrejitos.png'
import logo3 from '../Logo/logo3.png'

import no1 from '../Fotos/Nosotros/no1.png'
import no2 from '../Fotos/Nosotros/no2.png'
import no3 from '../Fotos/Nosotros/no3.png'
import no4 from '../Fotos/Nosotros/no4.png'

import n1 from '../Fotos/Noticias/n1.png'
import n2 from '../Fotos/Noticias/n2.png'
import n3 from '../Fotos/Noticias/n3.png'
import n4 from '../Fotos/Noticias/n4.png'
import n5 from '../Fotos/Noticias/n5.png'

import ga1 from '../Fotos/Galeria/ga1.png'
import ga2 from '../Fotos/Galeria/ga2.png'
import ga3 from '../Fotos/Galeria/ga3.png'
import ga4 from '../Fotos/Galeria/ga4.png'
import ga5 from '../Fotos/Galeria/ga5.png'
import ga6 from '../Fotos/Galeria/ga6.png'
import ga7 from '../Fotos/Galeria/ga7.png'
import ga8 from '../Fotos/Galeria/ga8.png'
import ga9 from '../Fotos/Galeria/ga9.png'
import ga10 from '../Fotos/Galeria/ga10.png'
import ga11 from '../Fotos/Galeria/ga11.png'
import ga12 from '../Fotos/Galeria/ga12.png'
import ga13 from '../Fotos/Galeria/ga13.png'
import ga14 from '../Fotos/Galeria/ga14.png'
import ga15 from '../Fotos/Galeria/ga15.png'
import ga16 from '../Fotos/Galeria/ga16.png'


export const Header = () => {
  return ( 

      <header>
          <div className="ContMenu">
          <div className='Logos'>
                <img src={logo1} alt='Logo comuna' className='Logo1'/>
                  <img src={logo2} alt='Logo comuna' className='Logo2'/>
                   <text>Club de futbol Cangrejos de Lolol</text>
          </div>
          <div className='ContNav'>
                  <nav>
                     <ul>
                       <li><a href='' >Directiva</a></li>
                       <li><a href=''>Contacto</a></li>
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

export const Nosotros = () => {
  return ( 

    <div className='ContNosotros'>
        <div className='TituloNosotros'>
          <h3>NOSOTROS</h3>
          <p>
              Somos un club de Fútbol 
              que busca trascender en cada una de las personas que 
              conviven con nosotros.<br/>

              Nuestro Club escuela nace a partir de un grupo de padres
              de la comuna de lolol, tras la necesidad de brindar a nuestros
              niños y jovenes la oportunidad de integrarse de forma activa y recreativa
              al deporte del futbol.
          </p>

          <h3>MISION</h3>
          <p>
          Impulsar y promover el deporte en los niños y jovenes para contribuir
          a su desarrollo integral, social y como consecuencia el de la comunidad
          con objeto de formar deportistas profesionales para el futuro.
          </p>

        </div>

        <div className='Card-Nosotros'>
          <img src={no1} alt='Nosotros'/>
          <img src={no2} alt='Nosotros'/>
          <img src={no3} alt='Nosotros'/>
          <img src={no4} alt='Nosotros'/>
        </div>
   </div>

      );
  }

export const NavNoticia = () => {
  return ( 

    <div>
        <div className='NavNoticia'>
          <h3>NOTICIAS</h3>
        </div>
     </div>
   );
}

export const Card_Noticias = () => {
  return ( 

    <div className='Container'>

        <div className='Card'>
            <img src={n1} alt='entrenando'/>
              <text className='text1'>
              Nuestros Cangrejitos jugando para Alcantara en muestra de apoyo en cuadrangular de la comuna de Lolol</text>
        </div>

        <div className='Card'>
          <img src={n2} alt='entrenando'/>
              <text className='text1'>3er lugar en su categoria obtiene la escuela de Alcantara en cuadrangular de LOLOl 
                                        en la cual participaron varios de nuestros cangrejitos.</text>
        </div>

        <div className='Card'>
          <img src={n3} alt='entrenando'/>
              <text className='text1'>Medalla de 3er lugar para todos los jugadores que participaron junto al equipo</text>
        </div>

        <div className='Card'>
          <img src={n4} alt='entrenando'/>
              <text className='text1'>Cangrejitos orgullosos junto a su entrenador DANIEL QUITRAL despues de la gran participacion en el equipo de ALCANTARA.</text>
        </div>

        <div className='Card'>
            <img src={n5} alt='entrenando'/>
              <text className='text1'>Gran audiencia obtuvo el cuadrangular organizado por la ILUSTRE MUNICIPALIDAD DE LOLO 
                         en el cual participaron varias comunas de la region.
            </text>
          </div>
     </div>

   );
}


export const Galeria = () => {
  return ( 

        <div className='ContGaleria'>

            <div className='TituloGaleria'>
              <h3>GALERIA</h3>
            </div>

          <div className='Galeria'>
          <img src={ga1} alt='Nosotros'/>
          <img src={ga2} alt='Nosotros'/>
          <img src={ga3} alt='Nosotros'/>
          <img src={ga4} alt='Nosotros'/>
          <img src={ga5} alt='Nosotros'/>
          <img src={ga7} alt='Nosotros'/>
          <img src={ga9} alt='Nosotros'/>
          <img src={ga10} alt='Nosotros'/>
          <img src={ga11} alt='Nosotros'/>
          <img src={ga12} alt='Nosotros'/>
          <img src={ga13} alt='Nosotros'/>
          <img src={ga14} alt='Nosotros'/>
          <img src={ga15} alt='Nosotros'/>
          <img src={ga16} alt='Nosotros'/>
        </div>
        </div>

      );
  }

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
                  <nav>
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