import './Cards.css';

const Cards = ({ ImgSrc,Name, Price, Services,Ubication, Stars, onSelect}) => {

   
    const handleClick = () => {
        console.log('Click')
        onSelect(Name)
        console.log(Name);
        

    }
    return(
        <>
        <div className="Cards"   onClick={handleClick}>
        <img src={ImgSrc} alt="" height="200px" width="100px" />
        <h1>{Name}</h1>
        <h3>{Price}</h3>
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