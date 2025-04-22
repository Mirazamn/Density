import './App.css'
import { Header } from './components/Header/app'
import Logo from './asstes/images/Logo.svg'
import Hero from './components/Hero/app'
// import Partners from './components/Partners/app'
import Features from './components/Features/app'
import Metrics from './components/Metrics/app'
import CTA from './components/Call-To-Action/app'
import Feedbacks from './components/Feedbacks/app'
import Pricing from './components/Pricing/app'
import GetLanding from './components/Banner/app'
import Contact from './components/Contacts/app'
import Footer from './components/Footer/app'

import SubscribeModal from './components/Modal/app'
import { useState } from 'react'


function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header logo={Logo} openModal={() => setModalOpen(true)} />
      <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <Hero />
      {/* <Partners /> */}
      <Features />
      <Metrics />
      <CTA />
      <Feedbacks />
      <Pricing />
      <GetLanding />
      <Contact />
      <Footer />
      <SubscribeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default App