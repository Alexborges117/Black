import React from 'react'
import './Footer.css'
import Whatsapp from '../assets/whatsapp.png'
import Facebook from '../assets/facebook.png'
import Tiktok from '../assets/tiktok.png'
import Instagram from '../assets/instagram.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Redes">
        <a href="https://api.whatsapp.com/send/?phone=5511948980365&text&type=phone_number&app_absent=0"><img src={Whatsapp} alt="Whatsapp" /></a>
        <a href="https://www.facebook.com/blackjackcelularesbarueri/"><img src={Facebook} alt="Facebook" /></a>
        <a href="https://www.tiktok.com/@blackjackiphones"><img src={Tiktok} alt="tiktok" /></a>
        <a href="https://www.instagram.com/blackjackbarueri/"><img src={Instagram} alt="Instagram" /></a>
      </div>
        <ul className='links'>
            <ol><a href="#">HOME</a></ol>
            <ol><a href="#">CONTATO</a></ol>
            <ol><a href="#">PRODUTOS</a></ol>
        </ul>
      <div className="Direitos">
        <span>Copyright @ 2024 BlackJack | Todos os direitos reservados | Desnevolvidor por </span>
      </div>
    </div>
  )
}

export default Footer
