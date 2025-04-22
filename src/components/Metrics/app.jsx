import './style.css'
import '../../components/variable.css'
import '../../index.css'


function Metrics() {
    return (
        <section className="metrics">
          <div className="container">
            <h1 className="display-m">Our Results Speak for Themselves</h1>
            <p className="body-m">
            Trusted by Thousands of Happy Patients
            </p>
    
            {/* Cards */}
            <div className="flex">
              <div data-aos="fade-up" data-aos-delay="400" className="metric">
                <span className="display-m">10k+</span>
                <h4 className="body-m">Happy Patients</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="300" className="metric">
                <span className="display-m">15+</span>
                <h4 className="body-m">Years of Experience</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="200" className="metric">
                <span className="display-m">1,200+</span>
                <h4 className="body-m">Successful Implants</h4>
              </div>
    
              <div data-aos="fade-up" data-aos-delay="100" className="metric">
                <span className="display-m">98%</span>
                <h4 className="body-m">Patient Satisfaction</h4>
              </div>
            </div>
            {/* /Cards */}
          </div>
        </section>
      )
}


export default Metrics;