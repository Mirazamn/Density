import { useState } from 'react'
import './style.css'
import '../../components/variable.css'
import '../../index.css'
import SubscribeModal from '../Modal/app'

import {Visuals
} from '../../asstes/plan'

function Hero() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="hero" id='hero'>
          <div className="container flex">
            <div className="hero-txt">
              <h1 data-aos="fade-up" className='display-xl'>
                Smile With Confidence Again
              </h1>
              <p data-aos="fade-up" data-aos-delay="100" className="body-l hero-p">
                Premium dental care with modern technology and a gentle touch. Book your appointment today.
              </p>
              
              <div className="buttons">
                {/* <a href=""> */}
                  <button
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="cta display-x"
                    onClick={() => setModalOpen(true)}
                  >
                    <i className="fa-solid fa-rocket"></i> Book Now
                  </button>
                {/* </a> */}
    
                  <button
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="display-x secondary"
                    onClick={() => setModalOpen(true)}
                  >
                    Consultation
                  </button>

              </div>
            </div>
    
            <img data-aos="zoom-in" src={Visuals} alt="" />
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default Hero;