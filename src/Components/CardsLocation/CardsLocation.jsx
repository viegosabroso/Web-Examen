const CardsLocation = ({ location,price, ImgSrcLocation, onSelectLocation}) => {

    const handleClick = () => {
        console.log('Click')
        onSelectLocation(location,price)
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={ImgSrcLocation} alt="" />
            <h1>{location}</h1>
            <h2>{price}</h2>
        </div>
        )
    }

    export default CardsLocation;