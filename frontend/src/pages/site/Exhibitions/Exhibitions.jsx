import React, { useContext } from 'react'
import Special from '../../../components/site/ExhibitionsComponents/Special/Special'
import Free from '../../../components/site/ExhibitionsComponents/Free/Free'
import Highlight from '../../../components/site/ExhibitionsComponents/Highlight/Highlight'
import Guided from '../../../components/site/ExhibitionsComponents/Guided/Guided'
import Heading from '../../../components/site/ExhibitionsComponents/Heading/Heading'
import MainContext from '../../../context/context'

const Exhibitions = () => {

  const{exhibitions, setExhibitions} = useContext(MainContext)
  const{events, setEvents} = useContext(MainContext)

  return (
    <main>
      <Heading />
      <Special exhibitions={exhibitions}/>
      <Free exhibitions={exhibitions}/>
      <Highlight events={events}/>
      <Guided events={events}/>
    </main>
  )
}

export default Exhibitions