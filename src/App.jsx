
import './App.css'
import Cards from './Components/CardsHotels/Cards'
import planDeViajes from './Data/data'
import CardsFoods from './Components/CardsFood/CardsFood'
import CardsLocation from './Components/CardsLocation/CardsLocation'
import SideBar from './Components/SideBar/SideBar'
import { useState } from 'react'

function App() {
  const [Name, setName] = useState('')
  const [Price, setPrice] = useState(0)
  const [Location, setLocation] = useState('')
  const [LocationPrice, setLocationPrice] = useState(0)
  const [Food, setFood] = useState('')  
  const [FoodPrice, setFoodPrice] = useState(0)

  const handleClick = (Name,PriceClick) => {
    console.log('Click')
    console.log(Name)
    setName(Name)
    setPrice(PriceClick)
    
  }
  const handleLocationCard = (Name,Price) => {
    console.log('Click')
    console.log(Name)
    setLocation(Name)
    setLocationPrice(Price)
  }

const handleFoodCard = (Name,Price) => {
  console.log('Click')
  console.log(Name)
  setFood(Name)
 
  setFoodPrice(Price)
}


  const DataHotels = planDeViajes.hoteles.map((hotel,key) => {
    return (
      <Cards key={key} ImgSrc={hotel.imagen} Name={hotel.nombre} PriceComp={hotel.costo} Ubication={hotel.ubicacion} Services={hotel.servicios.map((servicio,key) => {
        return (
          
          <li key={key}>{servicio}</li>
        
        )
      })} Stars={hotel.estrellas} onSelect={handleClick} />
    )
  })

  const DataAlimentacion = planDeViajes.alimentacion.map((alimentacion,key) => {
    return (
      <CardsFoods key={key} ImgSrc={alimentacion.imagen} Name={alimentacion.titulo} Price={alimentacion.precio} onFoodCard={handleFoodCard} />
    )
  })


  return (
    <>
      <h1>Prepara tu viaje</h1>
      <h2>Hoteles</h2>
      <div className="Container-Hoteles">
        
        {DataHotels}
      </div>
      <h2>Alimentacion</h2>
      <div>
      {DataAlimentacion}
      </div>
      <div>
      
      </div>
      <div className="SideBar-Container">
        <SideBar Hotel={Name} HotelPrice={Price} Location={"s"} LocationPrice={0} Food={Food} FoodPrice={FoodPrice}  />
      </div>
    </>
  )
}

export default App
