import React from 'react'
import Hero from '../../../components/site/Hero'
import FirstSection from '../../../components/site/FirstSection/FirstSection'
import SecondSection from '../../../components/site/SecondSection/SecondSection'
import ThirdSection from '../../../components/site/ThirdSection/ThirdSection'
import FourthSection from '../../../components/site/FourthSection/FourthSection'


const Home = () => {
  return (
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  )
}

export default Home