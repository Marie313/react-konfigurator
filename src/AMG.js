import { useEffect } from "react";
import AmgLogo from './/logos/AmgLogo.jpg';

const AMG = ({car, setCar}) => {
    useEffect(() => {
        fetch('http://localhost:8000/cars')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setCar(data);
        })
    }, [])

    return ( 
        <div className="returnAMG">
        <div className="cars-map">
            {car
            .filter((car) => car.type === 'AMG')
            .map((cars) => (
                <div className="cars-prview" key={cars.id}>
                    <h3 className="carName">{cars.name}</h3>
                    <p className="carPreis">{cars.preis}</p>
                    <div className="inline">
                        <div className="center"> 
                        <img className="carTypeImage" src={AmgLogo}/>
                        <div className="carAntriebskonzept">{cars.antriebskonzept !== "old" && <p className="carAntrieb">{cars.antriebskonzept}</p>}</div>
                        </div>
                    </div>
                    <img src={`${cars.pic}`}  alt="pic" />
                </div>
            ))} 
        </div>
        </div> 
    );
}
 
export default AMG;