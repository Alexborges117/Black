import React, { useState, useEffect } from 'react'
import './HeaderImg.css'
import BlackJackPC from '../img/F1PC.png'
import NovidadesPC from '../img/F2PC.png'
import AssistenciaTecPC from '../img/F3PC.png'
import BlackJackMobile from '../img/F1M.png' 
import NovidadesMobile from '../img/F2M.png' 
import AssistenciaTecMobile from '../img/F3M.png'
import SetaDireita from '../img/angulo-direito.png'
import SetaEsquerda from '../img/angulo-esquerdo.png'

const imagesPC = [BlackJackPC, NovidadesPC, AssistenciaTecPC];
const imagesMobile = [BlackJackMobile, NovidadesMobile, AssistenciaTecMobile];

const HeaderImg = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((oldIndex) => {
        let newIndex = oldIndex + 1;
        const images = windowWidth >= 1000 ? imagesPC : imagesMobile;
        if (newIndex === images.length) {
          newIndex = 0;
        }
        return newIndex;
      });
    }, 5000); // Change slides every 5 seconds
  
    return () => clearInterval(timer); // Clear the timer if the component is unmounted
  }, [windowWidth]); // Adicione windowWidth como dependência

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex + 1;
      const images = windowWidth >= 1000 ? imagesPC : imagesMobile;
      if (newIndex === images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };
  
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let newIndex = oldIndex - 1;
      const images = windowWidth >= 1000 ? imagesPC : imagesMobile;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      return newIndex;
    });
  };

  const images = windowWidth >= 1000 ? imagesPC : imagesMobile;

  return (
    <div className="Card">
      <div>
        <button onClick={prevSlide}> <img src={SetaEsquerda} alt="seta para voltar" /></button>
      </div>
      <div className="ImgSlide">
        <img className='slide' src={images[index]} alt="slide" />
      </div>
      <div>
        <button onClick={nextSlide}><img src={SetaDireita} alt="seta para direita" /></button>
      </div>
    </div>
  );
};

export default HeaderImg