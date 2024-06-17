import React from 'react'
import Hero from '../../../components/site/HomeComponents/Hero/Hero'
import Discover from '../../../components/site/HomeComponents/Discover/Discover'
import Visit from '../../../components/site/HomeComponents/Visit/Visit'
import SignUp from '../../../components/site/HomeComponents/SignUp/SignUp'
import Explore from '../../../components/site/HomeComponents/Explore/Explore'
import Welcome from '../../../components/site/HomeComponents/Welcome/Welcome'


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