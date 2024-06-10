import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import MainContext from './context/context'
import './reset.css'
import './App.css'

const App = () => {
  const routes = createBrowserRouter(ROUTES)

  const contextData = {}

  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  )
}

export default App