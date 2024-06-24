import React from 'react'
import Special from '../../../components/site/ExhibitionsComponents/Special/Special'
import Free from '../../../components/site/ExhibitionsComponents/Free/Free'
import Highlight from '../../../components/site/ExhibitionsComponents/Highlight/Highlight'
import Guided from '../../../components/site/ExhibitionsComponents/Guided/Guided'
import Heading from '../../../components/site/ExhibitionsComponents/Heading/Heading'

const Exhibitions = () => {
  return (
    <main>
      <Heading />
      <Special />
      <Free />
      <Highlight />
      <Guided />
    </main>
  )
}

export default Exhibitions