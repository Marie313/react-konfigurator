import { useEffect } from "react";

const CarList = ({car, setCar}) => {
    useEffect(() => {
        fetch('http://localhost:8000/cars')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCar(data);
        })
    },)

    return ( 
        <div className="carList">
        <div className="cars-map">
            {car && car.map((cars) => (
                <div className="cars-prview" key={cars.id}>
                    <h3>{cars.name}</h3>
                    <p>{cars.preis}</p>
                    <p>{cars.type}</p><p>{cars.antriebskonzept}</p>
                </div>
            ))} 
        </div>
        </div> 
    )
}
 
export default CarList;