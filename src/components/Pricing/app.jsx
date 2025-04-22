import { useState } from 'react';
import SubscribeModal from '../Modal/app';

import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Plans() {
  const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="plan">
          <div className="container">
            <h1 className="display-m">Pick Your Perfect Plan</h1>
            <p className="body-m">
              Find the perfect plan for your business with our flexible pricing
              options.
            </p>
    
            <div className="plan-cards flex">
              {/* Free Plan */}
              <div data-aos="fade-up" data-aos-delay="300" className="card">
                <h6 className="body-l">Free Consultation</h6>
                <h2><span className="display-l">$0</span>/ month</h2>
                <h4 className="body-m">Talk to a dentist and get answers</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Visual exam</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Recommendations</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i>Cost estimate</li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x"> Book Now</button></a>
              </div>
              {/* Free Plan */}
    
              {/* Professional Plan */}
              <div data-aos="fade-up" data-aos-delay="200" className="card">
                <h6 className="body-l">Cavity Treatment</h6>
                <h2><span className="display-l">$89</span>/ month</h2>
                <h4 className="body-m">High-quality composite fillings. </h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Digital X-ray</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Anesthesia</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Tooth-colored filling</li>
                </ul>
                <a onClick={() => setModalOpen(true)}><button className="display-x"> Book Now</button></a>
              </div>
              {/* Professional Plan */}
    
              {/* Enterprise Plan */}
              <div data-aos="zoom-in" data-aos-delay="100" className="card enterprise">
                <h6 className="body-l">Teeth Whitening</h6>
                <h2><span className="display-l">$149</span>/ month</h2>
                <h4 className="body-m">Get 2–4 shades brighter in one visit.</h4>
                <ul>
                  <li className="display-x"><i className="fa-solid fa-check"></i> Consultation</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i>Whitening gel</li>
                  <li className="display-x"><i className="fa-solid fa-check"></i> LED acceleration</li>
                </ul>
                <a 
                    onClick={() => setModalOpen(true)}>
                  <button className="display-x">
                    Book Now
                  </button>
                </a>
              </div>
              {/* Enterprise Plan */}

            </div>
          </div>
          <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </section>
      );
}


export default Plans;