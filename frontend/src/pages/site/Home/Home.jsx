import React from 'react'
import Hero from '../../../components/site/Hero/Hero'
import Discover from '../../../components/site/Discover/Discover'
import Visit from '../../../components/site/Visit/Visit'
import SignUp from '../../../components/site/SignUp/SignUp'
import Explore from '../../../components/site/Explore/Explore'
import Welcome from '../../../components/site/Welcome/Welcome'


const Home = () => {
  return (
    <main>
      <Hero />
      <Discover/>
      <Visit/>
      <SignUp/>
      <Explore/>
      <Welcome/>
    </main>
  )
}

export default Home