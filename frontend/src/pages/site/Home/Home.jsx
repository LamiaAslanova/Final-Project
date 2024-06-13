import React from 'react'
import Hero from '../../../components/site/Hero'
import FirstSection from '../../../components/site/FirstSection/FirstSection'
import SecondSection from '../../../components/site/SecondSection/SecondSection'
import ThirdSection from '../../../components/site/ThirdSection/ThirdSection'
import FourthSection from '../../../components/site/FourthSection/FourthSection'
import FifthSection from '../../../components/site/FifthSection/FifthSection'


const Home = () => {
  return (
    <main>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </main>
  )
}

export default Home