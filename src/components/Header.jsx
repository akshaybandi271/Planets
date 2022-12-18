import { useState } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import "./components.css"


const Header = ({planetsData,handlePlanetIndex}) => {

    const [selectedPlanet,setSelectedPlanet] = useState("mercury")
    const [isNavOpen,setIsNavOpen] = useState(false)

    const handleClick = (index) => {
        handlePlanetIndex(index)
        setSelectedPlanet(planetsData[index].name.toLowerCase())
        setIsNavOpen(false)
    }

    const handleNav = () => {
        setIsNavOpen(prevState => !prevState)
    }

  return (
      <header className="header">
            <nav>
                <h1 className="heading">the planets</h1>

                <ul className={`${isNavOpen ? "navOpen" : ""}`}>
                    {planetsData.map((planet,index) => {
                        return (  
                                <div key={index} className="nav-li-div" onClick={() => handleClick(index)}>
                                    <li  className={`nav-planet-name ${selectedPlanet === planet.name.toLowerCase() ? "selectedPlanet" : ""}`} >
                                         {planet.name} 
                                     </li>
                                     <span><FontAwesomeIcon icon={faAngleRight} className="angle--right--icon"/></span>
                                </div>
                            )
                    })}
                </ul>
                
              <FontAwesomeIcon icon={faBars}  className="bars-icon" onClick={handleNav}/>
            </nav>
      </header>
  )
}

export default Header
