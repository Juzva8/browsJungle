import React from 'react'
import './ServicesComponent.css'
import PmuBrows from '../../Assets/services-logo/PmuBrows.webp'
import gallery from '../../Assets/services-logo/gallery.webp'
import LipBlush from '../../Assets/services-logo/LipBlush.webp'
import pricing from '../../Assets/services-logo/pricing.webp'
import PmuBrows_text from '../../Assets/services-logo-text/BROWS_PMU.webp'
import gallery_text from '../../Assets/services-logo-text/gallery_text-copy.webp'
import Lip_blush_text from '../../Assets/services-logo-text/Lip_blush_text.webp'
import pricing_text from '../../Assets/services-logo-text/pricing_text-copy.webp'



function ServicesComponent() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/PmuBrows" className="services__content__image" rel="PmuBrows">
            <img src={PmuBrows_text} alt="PmuBrows_text"/>
            <img src={PmuBrows} alt="services"/>
            </a>
            
             <a href="/LipBlush" className="services__content__image" rel="LipBlush">
             <img src={Lip_blush_text} alt="Lip_blush_text"/>
             <img src={LipBlush} alt="LipBlush"/>  
             </a>

            <a href="/Pricing" className="services__content__image" rel="pricing">
             <img src={pricing_text} alt="pricing_text"/>
             <img src={pricing} alt="pricing"/>
             </a>


             <a href="/Gallery" className="services__content__image" rel="Gallery">
             <img src={gallery_text} alt="gallery_text"/>
             <img src={gallery} alt="gallery"/>   
            </a>
         </div>
        </div>
    )
}

export default ServicesComponent
