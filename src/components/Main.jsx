
import Planet from "./Planet"

const Main = ({planetsData,planetIndex}) => {


  return (
          <div>
                {planetsData.map((planet,index) => {
                     return <Planet  planet={planet} key={index}/>
                 })[planetIndex]}
        </div>
  )

}

export default Main
