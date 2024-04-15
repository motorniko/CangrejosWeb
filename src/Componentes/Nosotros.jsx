<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import '../EstilosCss/Header-Footer.css'
import '../EstilosCss/Contenidos.css'

import no1 from '../Fotos/Nosotros/no1.png'
import no2 from '../Fotos/Nosotros/no2.png'
import no3 from '../Fotos/Nosotros/no3.png'
import no4 from '../Fotos/Nosotros/no4.png'

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