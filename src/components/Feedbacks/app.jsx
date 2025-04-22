import '../variable.css'
import '../../index.css'
import './style.css'

import {SarahK, MichaelL, LaurenM, StarIcon, EmptyStar
} from '../../asstes/plan'



function Feedbacks() {
    return (
        <section className="feedbacks">
          <div className="container">
            <div className="txt">
              <h3 className="display-m">What Our Patients Say</h3>
              <p className="body-m">
                Real Stories. Real Smiles.
              </p>
            </div>
    
            {/* Comments */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="100" className="comment">
                <div className="profile">
                  <img src={SarahK} alt="" />
                  <h3 className="display-xs">Sarah K.</h3>
                  <h6 className="body-s">UX Designer @Brello</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    I was always afraid of dentists, but this clinic changed everything.
                     The staff is incredibly kind, and the procedure was completely painless!
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="comment">
                <div className="profile">
                  <img src={MichaelL} alt="" />
                  <h3 className="display-xs">Michael L.</h3>
                  <h6 className="body-s">Creative Director @Yo</h6>
                </div>
    
                <main>
                  <p className="body-m">
                    Professional, clean, and modern. They explained every step,
                    and I felt totally relaxed. Highly recommend!
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={EmptyStar} alt="" />
                  </div>
                </main>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="comment">
                <div className="profile">
                  <img src={LaurenM} alt="" />
                  <h3 className="display-xs">Lauren M.</h3>
                  <h6 className="body-s">UI Designer @Boo</h6>
                </div>
    
                <main>
                  <p className="body-m">
                   From the moment I walked in, I felt welcome.
                    My teeth have never looked better — I finally smile in photos again.
                  </p>
    
                  <div className="rating">
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                </main>
              </div>
            </div>
            {/* /Comments */}
          </div>
        </section>
      )
}


export default Feedbacks;