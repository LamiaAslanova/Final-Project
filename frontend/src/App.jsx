import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import './reset.css'
import './App.css'
import axios from 'axios'

const App = () => {
  const routes = createBrowserRouter(ROUTES)

  const [exhibitions, setExhibitions] = useState([])
  const [events, setEvents] = useState([])
  const [collections, setCollections] = useState([])
  const [shop, setShop] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await axios.all([
          axios.get('http://localhost:8080/exhibitions'),
          axios.get('http://localhost:8080/events'),
          axios.get('http://localhost:8080/collections'),
          axios.get('http://localhost:8080/shop')
        ])

        const [response1, response2, response3, response4] = responses
        setExhibitions(response1.data)
        setEvents(response2.data)
        setCollections(response3.data)
        setShop(response4.data)
        // console.log(responses)
      }
      catch (error){
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const contextData = {exhibitions, setExhibitions, events, setEvents, collections, setCollections, shop, setShop}

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App