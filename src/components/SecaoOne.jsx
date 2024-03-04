import React, { useRef, useState, useEffect } from 'react';
import './SecaoOne.css';
import SetaDireita from '../img/angulo-direito.png'
import SetaEsquerda from '../img/angulo-esquerdo.png'
import WppJack from '../img/wppblackjack.png'

const SecaoOne = () => {
  const cardsRef = useRef();
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const checkScrollPosition = () => {
    setIsAtStart(cardsRef.current.scrollLeft === 0);
    setIsAtEnd(cardsRef.current.scrollLeft + cardsRef.current.clientWidth === cardsRef.current.scrollWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para chamar a função quando todo o conteúdo da página estiver carregado
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
    <div className="Secao">
      {!isAtStart && <button className='ButtonEsquerda' onClick={() => scrollCards('left')}><img src={SetaEsquerda} alt="Seta para a esquerda" /></button>}
      <div className="Cards" ref={cardsRef}>
        <div className="Card"  onClick={() => setShowPopup(true)}>
          <div className='imgcard one'>
          <h4>APPLE WATCH ULTRA 2</h4>
          <p>Sua Próxima aventura.</p>
          <h4>A parti de R$ 9.699</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard two'>
          <h4>IPHONE 15 PRO</h4>
          <p>Titânio</p>
          <h4>A parti de R$ 9.299</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard tree'>
          <h4>VISION PRO</h4>
          <p>Inovador</p>
          <h4>A parti de R$ 28.299</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard four'>
          <h4>MACBOOK PRO</h4>
          <p>Maior duração de bateria</p>
          <h4>A parti de R$ 12.599</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard five'>
          <h4>IPAD 11PRO</h4>
          <p>Desing inteligente</p>
          <h4>A parti de R$ 4.599</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard six'>
          <h4>Apple Tv</h4>
          <p>4K</p>
          <h4>A parti de R$ 1.599</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard seven'>
          <h4>WATCH SERIES 9</h4>
          <p>Estilo</p>
          <h4>A parti de R$ 2.299</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard eigth'>
          <h4>MACBOOK AIR</h4>
          <p>Tecnologia e inovação</p>
          <h4>A parti de R$ 7.599</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard nine'>
          <h4>IPHONE 15 MINI</h4>
          <p>Desin inovador</p>
          <h4>A parti de R$ 5.599</h4>
          </div>
        </div>
        <div className="Card" onClick={() => setShowPopup(true)}>
        <div className='imgcard ten'>
          <h4>IMAC PRO</h4>
          <p>8 Nucleos</p>
          <h4>A parti de R$ 10.599</h4>
          </div>
        </div>
      </div>
      {!isAtEnd && <button className='ButtonDireita' onClick={() => scrollCards('right')}><img src={SetaDireita} alt="Seta para a direita" /></button>}
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
  );
};

export default SecaoOne;