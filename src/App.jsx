import React from 'react';

import {Galeria} from './Componentes/Galeria'
import {Header, ContF1} from './Componentes/Header'
import {Nosotros} from './Componentes/Nosotros'
import {NavNoticia, Card_Noticias} from './Componentes/Noticias'
import {Footer} from './Componentes/Footer'


function App() {

  return (
    <>
      <Header></Header>
      <ContF1></ContF1>
      <Nosotros></Nosotros>
      <NavNoticia></NavNoticia>
      <Card_Noticias></Card_Noticias>
      <Galeria></Galeria>
      <Footer></Footer>
    </>
  )
}

export default App
