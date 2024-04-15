<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'

import n1 from '../Fotos/Noticias/n1.png'
import n2 from '../Fotos/Noticias/n2.png'
import n3 from '../Fotos/Noticias/n3.png'
import n4 from '../Fotos/Noticias/n4.png'
import n5 from '../Fotos/Noticias/n5.png'


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