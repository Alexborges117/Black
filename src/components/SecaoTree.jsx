import React, { useRef, useState, useEffect } from 'react';
import './SecaoTree.css';
import SetaDireita from '../img/angulo-direito.png';
import SetaEsquerda from '../img/angulo-esquerdo.png';
import WppJack from '../img/wppblackjack.png'

const SecaoTree = () => {
  const cardsRef = useRef();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const checkScrollPosition = () => {
    setIsAtStart(cardsRef.current.scrollLeft === 0);
    setIsAtEnd(cardsRef.current.scrollLeft + cardsRef.current.clientWidth === cardsRef.current.scrollWidth);
  };

  useEffect(() => {
    window.addEventListener('load', checkScrollPosition);
    cardsRef.current.addEventListener('scroll', checkScrollPosition);
    window.addEventListener('resize', checkScrollPosition);
    return () => {
      window.removeEventListener('load', checkScrollPosition);
      cardsRef.current.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    }
  }, []);

  const scrollCards = (direction) => {
    if (direction === 'left') {
      cardsRef.current.scrollLeft -= cardsRef.current.offsetWidth;
    } else {
      cardsRef.current.scrollLeft += cardsRef.current.offsetWidth;
    }
    checkScrollPosition();
  };

  return (
    <div>
      {!isAtStart && <button className='ButtonEsquerdaSecaoTree' onClick={() => scrollCards('left')}><img src={SetaEsquerda} alt="Seta para a esquerda" /></button>}
      <h2><span  style={{ textTransform: 'uppercase' }}>produtos:</span>semi novos</h2>
      <div className="Cards" ref={cardsRef}>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard Xr'>
            <h4>IPHONE XR 64GB</h4>
            <p>Cor branca</p>
            <h4>A parti de R$ 1.399</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard EigthpLUS'>
            <h4>IPHONE 8 PLUS 64GB</h4>
            <p>Cor dourada</p>
            <h4>A parti de R$ 1.099</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard Eleven'>
            <h4>IPHONE 11 124GB</h4>
            <p>Cor vermelha</p>
            <h4>A parti de R$ 1.799</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard ElevenPro'>
            <h4>IPHONE 11 PRO 124GB</h4>
            <p>Cor Branca</p>
            <h4>A parti de R$ 2.399</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard Twelve'>
            <h4>IPHONE 12 124GB</h4>
            <p>Cor Preto</p>
            <h4>A parti de R$ 2.599</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard TwelvePro'>
            <h4>IPHONE 12 PRO 250GB</h4>
            <p>Cor Cinza espacial</p>
            <h4>A parti de R$ 3.399</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard Thirteenmini'>
            <h4>IPHONE 13 MINI 250GB</h4>
            <p>Cor Azul</p>
            <h4>A parti de R$ 4.099</h4>
            </div>
          </div>
          <div className="Card" onClick={() => setShowPopup(true)}>
            <div className='imgcard ThirteenPro'>
            <h4>IPHONE 12 PRO 250GB</h4>
            <p>Cor dourada</p>
            <h4>A parti de R$ 5.599</h4>
            </div>
          </div>
      </div>
      {!isAtEnd && <button className='ButtonDireitaSecaoTree' onClick={() => scrollCards('right')}><img src={SetaDireita} alt="Seta para a direita" /></button>}
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

export default SecaoTree;