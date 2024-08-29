import './CardsFood.css';

const CardsFoods = ({ ImgSrc,Name, Price}) => {

    

    return(
        <>
        <div className="Cards-Food">
        <img src={ImgSrc} alt="" height="200px" width="100px" />
        <h1>{Name}</h1>
        <h3>{Price}</h3>
        </div>
        </>

    )
}

export default CardsFoods;