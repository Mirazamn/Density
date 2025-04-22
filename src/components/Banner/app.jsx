import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {GetLandingImg
} from '../../asstes/plan'

function GetLanding() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="banner">
          <div className="container flex">
    
            <div data-aos="fade-right" data-aos-delay="100" className="banner-txt">
              <h1 className="display-l">Smile Brighter with Expert Dental Care!</h1>
              <p>From routine check-ups to advanced treatments — we’ve got your smile covered.</p>
              <a onClick={() => setModalOpen(true)}>
                <button className="display-x flex">
                  Get Started <i className="fa-solid fa-arrow-right"></i>
                </button>
              </a>
            </div>
    
            <img data-aos="zoom-in" data-aos-delay="200" src={GetLandingImg} alt=""/>
            
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default GetLanding;  // export the component