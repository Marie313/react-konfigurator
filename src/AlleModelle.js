import { useEffect } from "react";
import AmgLogo from './/logos/AmgLogo.jpg';

const AlleModelle = ({car, setCar}) => {

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

    const carsType = (carType) => {
        if (carType == "AMG"){
            return <img className="carTypeImage"  src={AmgLogo} />;
        }
        if (carType == "new"){
            return <p className="newCar">Neu</p>;
        }
    }
    const inline = (carType, carAntriebskonzept, carsPreis) => {
        if ((carType === "AMG" || carType === "new") && (carAntriebskonzept !== "old")){
            return (
                <div className="inline">
                    <div className="center">
                        { carsType(carType) }
                        <div className="carAntriebskonzept"><p className="carAntrieb">{carAntriebskonzept}</p></div>
                    </div>
                </div>
            )
        }
        if ((carType === "AMG" || carType === "new") && (carAntriebskonzept === "old")){
            return (
                <div className="inline">
                    <div className="center">
                        { carsType(carType) }
                    </div>
                </div>
            )
        }
        if ((carType !== "AMG" || carType !== "new") && (carAntriebskonzept !== "old")){
            return (
                <div className="inline">
                    <div className="center">
                        <div className="carAntriebskonzept"><p className="carAntrieb">{carAntriebskonzept}</p></div>
                    </div>
                </div>
            )
        }
        if ((carType !== "AMG" || carType !== "new") && (carAntriebskonzept === "old") && (carsPreis !== "")){
            return <div style={{ minHeight: '60px' }} />
        }
        if ((carType !== "AMG" || carType !== "new") && (carAntriebskonzept === "old") && (carsPreis === "")){
            return <div style={{ minHeight: '85px' }} />
        }
    }

    return ( 
        <div className="returnALL">
        <div className="cars-map">
            {car && car.map((cars) => (
                <div className="cars-prview" key={cars.id}>
                    <h3 className="carName">{cars.name}</h3>
                    <p className="carPreis">{cars.preis}</p>
                    { inline(cars.type, cars.antriebskonzept, cars.preis) }
                    <img src={`${cars.pic}`}  alt="pic" />
                </div>
            ))} 
        </div>
        </div> 
        
    );
}
 
export default AlleModelle;