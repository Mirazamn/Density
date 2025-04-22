import { useState } from 'react'
import SubscribeModal from '../Modal/app'

import './style.css'
import '../../components/variable.css'
import '../../index.css'
import Card from './Card/app'
import { RightPointer } from '../../asstes/plan'



function Features() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="features" id="features">
          <div className="container">
            <h1 className="display-m">Why Patients Choose Us</h1>
            <p className="body-m">
              These are just a few features you’ll get using our services
            </p>
    
            <div className="feature-cards">

                <div data-aos="fade-up" data-aos-delay="100" className="feature-card">
                  <span className="Persimmon">
                      <i className="fa-solid fa-hand-holding-medical"></i>
                  </span>
                  <h3 className="display-s">Painless Procedures</h3>
                  <p className="body-m">We use the latest pain-free techniques and anesthesia to make sure your visit is as comfortable as possible</p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <img src={RightPointer} alt="" />
                      </h6>
                  </a>
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="feature-card">
                  <span className="Observatory">
                      <i className="fa-solid fa-suitcase-medical"></i>
                  </span>
                  <h3 className="display-s">Modern Equipment</h3>
                  <p className="body-m"> 
                    Our clinic is equipped with 3D X-ray imaging, digital diagnostics, and the newest tools to ensure accurate, efficient, and safe treatments.
                    </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <img src={RightPointer} alt="" />
                      </h6>
                  </a>
                </div>


                <div data-aos="fade-up" data-aos-delay="300" className="feature-card">
                  <span className="Sweet-Corn">
                      <i className="fa-solid fa-user-doctor"></i>
                  </span>
                  <h3 className="display-s">Experienced Dentists</h3>
                  <p className="body-m"> 
                    Our dentists have over 10 years of experience, international certifications, and a passion for making every patient feel relaxed and confident.
                    </p>
                  <a
                  onClick={() => setModalOpen(true)}>
                      <h6 className="flex display-x">
                          Learn More
                          <img src={RightPointer} alt="" />
                      </h6>
                  </a>
                </div>

            </div>
          </div>


          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
    )
}


export default Features;