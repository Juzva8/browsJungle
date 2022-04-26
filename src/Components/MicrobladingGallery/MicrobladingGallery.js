import { useState } from "react";
import Slider from 'react-slick'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import './MicrobladingGallery.css'
import lipBlush from '../../Assets/Gallery/lip_blush.jpeg'
import pmu from '../../Assets/Gallery/pmu.jpeg'
import Ombré from '../../Assets/Gallery/Ombré.jpeg'
import Powder_Brow from '../../Assets/Gallery/Powder_Brow.jpeg'
import Touch_Up from '../../Assets/Gallery/Touch_Up.jpeg'
import Combination_Brow from '../../Assets/Gallery/Combination_Brow.jpeg'
import Microblading from '../../Assets/Gallery/Microblading.jpeg'
import BROW_DADDY from '../../Assets/Gallery/BROW_DADDY.png'
import pmuangel from '../../Assets/Gallery/pmuangel.jpeg'
import Corona from '../../Assets/Gallery/Corona.jpeg'
import Riverside from '../../Assets/Gallery/Riverside.jpeg'
import brows from '../../Assets/Gallery/brows.jpeg'
import eyebrow from '../../Assets/Gallery/eyebrow.jpeg'
import Permanent from '../../Assets/Gallery/Permanent.jpeg'
import Semi from '../../Assets/Gallery/Semi.jpeg' 
import tattoo from '../../Assets/Gallery/tattoo.jpeg'
import technique from '../../Assets/Gallery/technique.jpeg'


const images = [ lipBlush, pmu, Ombré, Powder_Brow, Touch_Up, Combination_Brow, Microblading, BROW_DADDY, pmuangel, Corona, Riverside, brows, eyebrow, Permanent, Semi, tattoo, technique ]

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
