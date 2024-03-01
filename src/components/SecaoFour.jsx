import React from 'react'
import './SecaoFour.css'
import Iphone14ProMax from '../img/Iphone14promax.svg'
import AirPodsMax from '../img/AirPodsMax.svg'
import AppleWatch from '../img/apple watch.svg'
import MacbookPro from '../img/MacBook.svg'
import AirPod from '../img/Ai1r.svg'

const SecaoFour = () => {
  return (
    <div className='Cont'>
        <h2><span style={{ textTransform: 'uppercase' }}>Produtos:</span> Novos</h2>
        <div className='Container'>
      <div className="Quadro">
        <img src={Iphone14ProMax} alt="Iphone 14 Pro max" />
      </div>
      <div className="Quadro">
        <div className="GuardaQuadro">
            <div className="QuadroInterno">
                <img src={AppleWatch} alt="Apple Watch" />
            </div>
            <div className="QuadroInterno">
                <img src={AirPod} alt="Ipad Pro" />
            </div>
        </div>
      </div>
      <div className="QuadroInterno">
        <img src={MacbookPro} alt="MacBookPro" />
      </div>
      <div className="Quadro">
        <img src={AirPodsMax} alt="Air pod max" />
      </div>
      </div>
    </div>
  )
}

export default SecaoFour
