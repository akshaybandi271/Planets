import { useState } from "react"
import "./components.css"

const Planet = ({ planet }) => {

  const {
    name,
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images,
  } = planet

  const [planetContent, setPlanetContent] = useState(overview)
  const [planetImage, setPlanetImage] = useState(images.planet)
  const [isGeology, setIsGeology] = useState(false)

  const handleChangeContent = (event) => {
    
    if (event.target.dataset.content === "overview") {
      setPlanetContent(overview)
      setPlanetImage(images.planet)
      setIsGeology(false)
    } else if (event.target.dataset.content === "structure") {
      setPlanetContent(structure)
      setPlanetImage(images.internal)
      setIsGeology(false)
    } else {
      setPlanetContent(geology)
      setPlanetImage(images.planet)
      setIsGeology(true)
    }
  }

  return (
    <div className="planet">
        <div className="planet--section--one">
            <img
              src={`./src/${planetImage}`}
              alt=""
              className="planet--image"
            />
            <img
              src={`./src/${images.geology}`}
              alt=""
              className={`planet--geology--image ${
                isGeology ? "show" : ""
              }`}
            />

          <div className="planet--desc">

              <div>
                <h1 className="planet--name">{name}</h1>
                <p className="planet--about">{planetContent.content}</p>
                <a href={planetContent.source} target="_blank" className="planet-wiki">
                  Source: <span>Wikipedia</span>
                </a>
              </div>
              
              <div className="planet--btns--container">
                  <div
                    className={`planet--option-div ${planetContent === overview ? "planet--option--selected" : ""}`}
                    data-content="overview"
                    onClick={(e) => handleChangeContent(e)}>
                      overview
                  </div>
                  <div
                    className={`planet--option-div ${planetContent === structure ? "planet--option--selected" : ""}`}
                    data-content="structure"
                    onClick={(e) => handleChangeContent(e)}
                  >
                      structure
                  </div>
                  <div
                    className={`planet--option-div ${planetContent === geology ? "planet--option--selected" : ""}`}
                    data-content="geology"
                    onClick={(e) => handleChangeContent(e)}
                  >
                    internal
                  </div>
              </div>
          </div>
      </div>

          <div className="planet--orbit--details--container">
              <div className="planet--orbit--details">
                  <p className="planet--orbit--details--name">Rotation Time</p>
                  <p className="planet--orbit--details--number">{rotation}</p>
              </div>
              <div className="planet--orbit--details">
                  <p className="planet--orbit--details--name">Revolution Time</p>
                  <p  className="planet--orbit--details--number">{revolution}</p>
              </div>
              <div className="planet--orbit--details">
                  <p className="planet--orbit--details--name">Radius Time</p>
                  <p  className="planet--orbit--details--number">{radius}</p>
              </div>
              <div className="planet--orbit--details">
                  <p className="planet--orbit--details--name">Average Temp</p>
                  <p  className="planet--orbit--details--number">{temperature}</p>
              </div>
          </div>
    </div>
  )
}

export default Planet
