<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'


import ga1 from '../Fotos/Galeria/ga1.png'
import ga2 from '../Fotos/Galeria/ga2.png'
import ga3 from '../Fotos/Galeria/ga3.png'
import ga4 from '../Fotos/Galeria/ga4.png'
import ga5 from '../Fotos/Galeria/ga5.png'
import ga7 from '../Fotos/Galeria/ga7.png'
import ga9 from '../Fotos/Galeria/ga9.png'
import ga10 from '../Fotos/Galeria/ga10.png'
import ga11 from '../Fotos/Galeria/ga11.png'
import ga12 from '../Fotos/Galeria/ga12.png'
import ga13 from '../Fotos/Galeria/ga13.png'
import ga14 from '../Fotos/Galeria/ga14.png'
import ga15 from '../Fotos/Galeria/ga15.png'
import ga16 from '../Fotos/Galeria/ga16.png'


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