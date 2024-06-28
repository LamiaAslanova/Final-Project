import React, { useContext } from 'react'
import Hero from '../../../components/site/HomeComponents/Hero/Hero'
import Discover from '../../../components/site/HomeComponents/Discover/Discover'
import Visit from '../../../components/site/HomeComponents/Visit/Visit'
import SignUp from '../../../components/site/HomeComponents/SignUp/SignUp'
import Explore from '../../../components/site/HomeComponents/Explore/Explore'
import Welcome from '../../../components/site/HomeComponents/Welcome/Welcome'
import MainContext from '../../../context/context'
import Empty from '../../../components/site/HomeComponents/EmptySection/Empty'


const Home = () => {

  const { exhibitions, setExhibitions } = useContext(MainContext)
  const { collections, setCollections } = useContext(MainContext)
  const { shop, setShop } = useContext(MainContext)

  return (
    <main>
      <Hero />
      <Discover exhibitions={exhibitions} />
      <Visit />
      <SignUp />
      <Explore collections={collections} />
      <Empty/>
      <Welcome shop={shop} />
    </main>
  )
}

export default Home