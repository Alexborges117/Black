import React from 'react'
import './SecaoTwo.css'
import Moto from   '../img/motobranca.png'
import Cartao from '../img/cartao.png'
import BlackJack from '../img/BlackJack.png'

const SecaoTwo = () => {
  return (
    <div className='SecaoTwo'>
      <div className='CardsInfo'>
        <img src={Moto} alt="Moto" />
        <h3>Frete Grátis para Barueri</h3>
      </div>
      <div className='CardsInfo'>
        <img src={Cartao} alt="Cartao" />
        <h3>Varias opções de parcelamento</h3>
      </div>
      <div className='CardsInfo'>
        <img src={BlackJack} alt="BlackJack" />
        <h3>Tenha uma experiencia de compra personalizada com o Black Jack</h3>
      </div>
    </div>
  )
}

export default SecaoTwo
