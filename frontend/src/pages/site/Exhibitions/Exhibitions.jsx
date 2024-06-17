import React from 'react'
import Special from '../../../components/site/ExhibitionsComponents/Special/Special'
import Free from '../../../components/site/ExhibitionsComponents/Free/Free'
import Highlight from '../../../components/site/ExhibitionsComponents/Highlight/Highlight'
import Guided from '../../../components/site/ExhibitionsComponents/Guided/Guided'
import Uk from '../../../components/site/ExhibitionsComponents/Uk/Uk'
import International from '../../../components/site/ExhibitionsComponents/International/International'

const Exhibitions = () => {
  return (
    <main>
      <Special/>
      <Free/>
      <Highlight/>
      <Guided/>
      <Uk/>
      <International/>
    </main>
  )
}

export default Exhibitions