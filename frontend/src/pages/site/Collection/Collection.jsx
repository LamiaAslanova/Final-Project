import React from 'react'
import './Collection.css'
import Hero from '../../../components/site/CollectionComponents/Hero/Hero'
import Description from '../../../components/site/CollectionComponents/Description/Description'
import Americas from '../../../components/site/CollectionComponents/Americas/Americas'

const Collection = () => {
  return (
    <main>
        <Hero/>
        <Description/>
        <Americas/>
    </main>
  )
}

export default Collection