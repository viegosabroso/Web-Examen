import './SideBar.css';

const SideBar = ({ Hotel, Food, Location, onSelect }) => {
    return (
        <>
            <div className="SideBar" onClick={handleClick}>
                <h1>{Hotel}</h1>
                <h2>{Food}</h2>
                <h3>{Location}</h3>
            </div>
        </>
    )
}