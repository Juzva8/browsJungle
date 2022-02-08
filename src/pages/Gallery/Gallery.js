import React from 'react';
import MicrobladingGallery from '../../Components/MicrobladingGallery/MicrobladingGallery'
import ServicesComponent from '../../Components/ServicesComponent/ServicesComponent'
import { Row } from 'reactstrap';
import './Gallery.css'



function Gallery() {
  return(

      <div className="Gallery">
      <div className="Gallery__Banner">
        </div>
        <ServicesComponent />
        <Row className="Gallery__row__2" >
        <h1 id="microblading__anchor__tag" className="Gallery__h1">
        Previous Work
          </h1>
        </Row>
        <MicrobladingGallery />
</div>

  )

}

export default Gallery;
