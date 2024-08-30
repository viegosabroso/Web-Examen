import './SideBar.css';

const SideBar = ({ Hotel,HotelPrice, Food,FoodPrice, Location,LocationPrice,}) => {

    const sum = HotelPrice + FoodPrice + LocationPrice;    

    return (
        <>
            <div className="SideBar">
                <div>
                <h1>{Hotel}</h1>
                <h2>{HotelPrice}</h2>
                </div>
                <div>
                <h1>{Food}</h1>
                <h2>{FoodPrice}</h2>
                </div>
                <div>
                <h1>{Location}</h1>
                <h2>{LocationPrice}</h2>
                </div>

                <h1>Total: {sum}</h1>
            </div>
        </>
    )
}

export default SideBar;
