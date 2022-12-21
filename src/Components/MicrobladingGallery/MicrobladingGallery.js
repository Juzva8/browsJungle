import { useState } from "react";
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import './MicrobladingGallery.css'
import lipBlush from '../../Assets/Gallery/lip_blush.png'
import pmu from '../../Assets/Gallery/pmu.png'
import Ombré from '../../Assets/Gallery/Ombré.png'
import Powder_Brow from '../../Assets/Gallery/Powder_Brow.png'
import Touch_Up from '../../Assets/Gallery/Touch_Up.png'
import Combination_Brow from '../../Assets/Gallery/Combination_Brow.png'
import Microblading from '../../Assets/Gallery/Microblading.png'
import BROW_DADDY from '../../Assets/Gallery/BROW_DADDY.png'
import pmuangel from '../../Assets/Gallery/pmuangel.png'
import Corona from '../../Assets/Gallery/Corona.png'
import Riverside from '../../Assets/Gallery/Riverside.png'
import brows from '../../Assets/Gallery/brows.png'
import eyebrow from '../../Assets/Gallery/eyebrow.png'
import Permanent from '../../Assets/Gallery/Permanent.png'
import Semi from '../../Assets/Gallery/Semi.png' 
import tattoo from '../../Assets/Gallery/tattoo.png'
import technique from '../../Assets/Gallery/technique.png'


import Temescal_Valley from '../../Assets/Gallery/1.png'
import Dos_Lagos from '../../Assets/Gallery/2.png'
import Coronita from '../../Assets/Gallery/3.png'
import Woodcrest from '../../Assets/Gallery/4.png'
import Perris from '../../Assets/Gallery/5.png'
import Socal from '../../Assets/Gallery/6.png'
import California from '../../Assets/Gallery/7.png'
import Girl from '../../Assets/Gallery/8.png'
import Woman from '../../Assets/Gallery/9.png'
import Lady from '../../Assets/Gallery/10.png' 
import Best from '../../Assets/Gallery/11.png'
import Natural from '../../Assets/Gallery/12.png'


const images = [ lipBlush, pmu, Ombré, Powder_Brow, Touch_Up, Combination_Brow, 
  Microblading, BROW_DADDY, pmuangel, Corona, Riverside, brows, eyebrow, Permanent, 
  Semi, tattoo, technique, Temescal_Valley, Dos_Lagos, Coronita, Woodcrest, Perris, 
  Socal, California, Girl, Woman, Lady, Best, Natural ]

function MicrobladingGallery() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 400,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img className="Slider_image" src={img} alt={img} />
          </div>
        ))}
      </Slider>
</div>

            
  
    )
}
export default MicrobladingGallery;
