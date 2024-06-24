import React, { useContext } from 'react'
import './Collection.css'
import Hero from '../../../components/site/CollectionComponents/Hero/Hero'
import Description from '../../../components/site/CollectionComponents/Description/Description'
import Americas from '../../../components/site/CollectionComponents/Americas/Americas'
import MainContext from '../../../context/context'

const Collection = () => {

  const {collections, setCollections} = useContext(MainContext)

  return (
    <main>
        <Hero/>
        <Description/>
        <Americas/>
        <Americas/>
    </main>
  )
}

export default Collection