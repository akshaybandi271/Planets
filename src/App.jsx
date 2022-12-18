import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import planetsData from './planetsData.json'

function App() {

  const [planetIndex,setPlanetIndex] =  useState(0)

  const handlePlanetIndex = (index) => {
      setPlanetIndex(index)
  }

    return (
       <>
         <Header planetsData = {planetsData} handlePlanetIndex={handlePlanetIndex}/>
         <Main planetsData = {planetsData} planetIndex={planetIndex}/>
       </>
    )
}

export default App
