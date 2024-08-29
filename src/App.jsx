
import './App.css'
import Cards from './Components/CardsHotels/Cards'
import planDeViajes from './Data/data'
import CardsFoods from './Components/CardsFood/CardsFood'
import { useState } from 'react'

function App() {
  const [Name, setName] = useState('')
  const [Price, setPrice] = useState(0)
  const [Details, setDetails] = useState('')

  const handleClick = (Name) => {
    console.log('Click')
    console.log(Name)

  }

  const DataHotels = planDeViajes.hoteles.map((hotel,key) => {
    return (
      <Cards key={key} ImgSrc={hotel.imagen} Name={hotel.nombre} Price={hotel.costo} Ubication={hotel.ubicacion} Services={hotel.servicios.map((servicio) => {
        return (
          
          <li>{servicio}</li>
        
        )
      })} Stars={hotel.estrellas} onSelect={handleClick} />
    )
  })

  const DataAlimentacion = planDeViajes.alimentacion.map((alimentacion,key) => {
    return (
      <CardsFoods key={key} ImgSrc={alimentacion.imagen} Name={alimentacion.titulo} Price={alimentacion.precio} />
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
    </>
  )
}

export default App
