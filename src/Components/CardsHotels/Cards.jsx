import './Cards.css';

const Cards = ({ ImgSrc,Name, PriceComp, Services,Ubication, Stars, onSelect}) => {

   
    const handleClick = () => {
        
        onSelect(Name,PriceComp)
        
        

    }
    return(
        <>
        <div className="Cards"   onClick={handleClick}>
        <img src={ImgSrc} alt="" height="200px" width="100px" />
        <h1>{Name}</h1>
        <h3>{PriceComp}$</h3>
        <h2>Ubicacion</h2>
        <h3>{Ubication}</h3>
        <h2>Servicios</h2>
        <ul>
            {Services}
        </ul>
        </div>
        </>
    )
}

export default Cards;