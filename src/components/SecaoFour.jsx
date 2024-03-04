import React, { useState } from 'react'
import './SecaoFour.css'
import Iphone14ProMax from '../img/Iphone14promax.svg'
import AirPodsMax from '../img/AirPodsMax.svg'
import AppleWatch from '../img/apple watch.svg'
import MacbookPro from '../img/MacBook.svg'
import AirPod from '../img/Ai1r.svg'
import WppJack from '../img/wppblackjack.png'

const SecaoFour = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='Cont'>
        <h2><span style={{ textTransform: 'uppercase' }}>Produtos:</span> Novos</h2>
        <div className='Container'>
      <div className="Quadro"  onClick={() => setShowPopup(true)}>
        <img src={Iphone14ProMax} alt="Iphone 14 Pro max" />
      </div>
      <div className="cont">
        <div>
          <div className="Quadro"  onClick={() => setShowPopup(true)}>
              <img src={AppleWatch} alt="Apple Watch" />
          </div>
          <div className="Quadro"  onClick={() => setShowPopup(true)}>
              <img src={AirPod} alt="Ipad Pro" />
          </div>
        </div>
      <div className="Quadro"  onClick={() => setShowPopup(true)}>
             <img src={MacbookPro} alt="MacBookPro" />
      </div>
      </div>
      <div className="Quadro"  onClick={() => setShowPopup(true)}>
        <img src={AirPodsMax} alt="Air pod max" />
      </div>
      </div>
      {showPopup && (
      <div className="Overlay">
        <div className="Popup">
          <h4>Fale com um vendedor</h4>
          <a href="https://api.whatsapp.com/send/?phone=5511948980365&text&type=phone_number&app_absent=0"><img src={WppJack} alt="Black Jack wpp" /></a>
          <button className='buttonPopup' onClick={() => setShowPopup(false)}>Fechar</button>
        </div>
      </div>
    )}
    </div>
  )
}

export default SecaoFour
