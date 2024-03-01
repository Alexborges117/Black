import React, { useState, useEffect } from 'react'
import './HeaderImg.css'
import BlackJack from '../img/F1PC.png'
import Novidades from '../img/F2PC.png'
import AssistenciaTec from '../img/F3PC.png'
import SetaDireita from '../img/angulo-direito.png'
import SetaEsquerda from '../img/angulo-esquerdo.png'

const images = [BlackJack, Novidades, AssistenciaTec];

const HeaderImg = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        if (newIndex === images.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(timer); // Clear the timer if the component is unmounted
  }, []);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      if (newIndex === images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      return newIndex;
    });
  };

  return (
    <div className="Card">
    <div>
      <button onClick={prevSlide}> <img src={SetaEsquerda} alt="seta para voltar" /></button>
    </div>
    <img className='slide' src={images[index]} alt="slide" />
    <div>
      <button onClick={nextSlide}><img src={SetaDireita} alt="seta para direita" /></button>
    </div>
  </div>
  );
};

export default HeaderImg