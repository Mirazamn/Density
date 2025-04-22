import './style.css'
import '../../components/variable.css'
import '../../index.css'

import {PhoneCall, EnvelopeSimple, twitter, behance, dribbble, instagram, UserImg} from '../../asstes/plan'




function Contacts() {
    return (
        <section className="contacts" id="contacts">
          <div className="container">
            <h1 className="display-m">Let’s brighten your smile!</h1>
            <p className="body-m">
              Have questions about our dental services? We’re here to help. Reach out for quick and friendly support.
            </p>
    
            <div className="wraper flex">
              {/* Left side: Contact info and social media */}
              <div className="social flex">
                <div className="contact-details">
                  <a href="tel:+1234567890">
                    <h2 data-aos="fade-right" data-aos-delay="100" className="body-m flex">
                      <img src={PhoneCall} alt="" /> +012 345 6789
                    </h2>
                  </a>

                  <a href="mailto:hello@example.com">
                    <h2 data-aos="fade-right" data-aos-delay="200" className="body-m flex">
                      <img src={EnvelopeSimple} alt="" /> hello@example.com
                    </h2>
                  </a>

                </div>
    
                <div data-aos="fade-right" data-aos-delay="300" className="social-media flex">
                  <h3 className="display-xs">Connect with us</h3>
                  <div className="social-links flex">
                    <a href="https://instagram.com" target='_blank'>
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://dribbble.com" target='_blank'>
                      <img src={dribbble} alt="" />
                    </a>
                    <a href="https://behance.net" target='_blank'>
                      <img src={behance} alt="" />
                    </a>
                    <a href="https://x.com" target='_blank'>
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
    
              {/* Right side: Contact form */}
              <form className="flex">
                <div data-aos="fade-up" className="field flex">
                  <label htmlFor="name">
                    <img src={UserImg} alt="" />
                  </label>
                  <input type="text" id="name" placeholder="Full Name" required />
                </div>
    
                <div data-aos="fade-up" data-aos-delay="100" className="field flex">
                  <label htmlFor="email">
                    <img src={EnvelopeSimple} alt="" />
                  </label>
                  <input type="email" className="body-m" id="email" placeholder="Email" required />
                </div>
    
                <a data-aos="zoom-in" data-aos-delay="200" href="#contacts">
                  <button className="display-x">Submit</button>
                </a>
              </form>
            </div>
          </div>
        </section>
      );
}


export default Contacts;  // export the component